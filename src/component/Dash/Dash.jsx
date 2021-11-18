/* eslint-disable func-names */
import {
  React, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { IconBolt, IconMeat, IconRipple } from '@tabler/icons';
import Loader from 'react-loader-spinner';
import { DateTime } from 'luxon';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
import {
  DashWrap, Tile, Title, Percent, Amount, Label, DashGrid,
} from './Dash.style';
import { fetchDiary } from '../../api/api';

const Dash = function (props) {
  const {
    open,
    setOpen,
  } = props;

  // State to hold data of food and water fetch request
  const [foodDiary, setFoodDiary] = useState([]);
  const [waterDiary, setWaterDiary] = useState([]);

  // State data to hsummarized values
  const [caloriesVal, setCaloriesVal] = useState(0);
  const [proteinVal, setProteinVal] = useState(0);
  const [waterVal, setWaterDrankVal] = useState(0);
  const [fetching, setFetching] = useState(false);

  // Toggle state is use to trigger a call of the fetch data useEffect
  const [toggleData, setToggleData] = useState(true);

  // Hard coded target value until functioality is added on the back end to store these
  const targets = {
    protein: 160,
    calories: 2900,
    water: 3000,
  };

  // Summarize the protein and calories values once the data is available
  useEffect(() => {
    if (foodDiary.length) {
      setProteinVal(foodDiary.reduce((n, { protein }) => n + protein, 0));
      setCaloriesVal(foodDiary.reduce((n, { calories }) => n + calories, 0));
    }
  }, [foodDiary]);

  // Summarize the water values once the data is available
  useEffect(() => {
    if (waterDiary.length) {
      setWaterDrankVal(waterDiary.reduce((n, { amount }) => n + amount, 0));
    }
  }, [waterDiary]);

  // Make initial call to the db for todays diary of food and water
  useEffect(() => {
    let isSubscribed = true;
    setFetching(true);
    fetchDiary(DateTime.now().toFormat('y-LL-dd'))
      .then((res) => {
        if (isSubscribed) {
          setFoodDiary(res.data.food_diary);
          setWaterDiary(res.data.water_diary);
          setFetching(false);
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          setFetching(false);
          console.log(error);
        }
      });
    return () => { isSubscribed = false; };
  }, [toggleData]);

  return (
    <DashWrap>
      <Modal
        open={open}
        setOpen={setOpen}
        caloriesVal={caloriesVal}
        proteinVal={proteinVal}
        waterVal={waterVal}
        targets={targets}
        toggleData={toggleData}
        setToggleData={setToggleData}
      />
      <DashGrid>
        <Tile>
          <Label background="#ffff59">
            <IconBolt color="black" />
          </Label>
          <Title>Calories</Title>
          <Percent>
            {!fetching
              ? `${Math.round((caloriesVal / targets.calories) * 100)}%`
              : (<Loader type="TailSpin" color="black" height={40} width={40} />)}
          </Percent>
          <Amount>{caloriesVal ? `${caloriesVal}kcals` : ''}</Amount>
        </Tile>
        <Tile>
          <Label background="#FF5964">
            <IconMeat color="white" />
          </Label>
          <Title>Protein</Title>
          <Percent>
            {!fetching
              ? `${Math.round((proteinVal / targets.protein) * 100)}%`
              : (<Loader type="TailSpin" color="black" height={40} width={40} />)}
          </Percent>
          <Amount>{proteinVal ? `${proteinVal}g` : ''}</Amount>
        </Tile>
        <Tile spanning>
          <Label background="#59c2ff">
            <IconRipple color="white" />
          </Label>
          <Title>Water</Title>
          <Percent>
            {!fetching
              ? `${Math.round((waterVal / targets.water) * 100)}%`
              : (<Loader type="TailSpin" color="black" height={40} width={40} />)}
          </Percent>
          <Amount>{waterVal ? `${waterVal}ml` : ''}</Amount>
        </Tile>
      </DashGrid>
      <Table foodDiary={foodDiary} />
    </DashWrap>
  );
};

Dash.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Dash;
