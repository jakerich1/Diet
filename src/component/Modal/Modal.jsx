/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  React, useState,
} from 'react';
import PropTypes from 'prop-types';
import { IconToolsKitchen2, IconRipple } from '@tabler/icons';
import ProgressCont from '../Progress/Progress';
import useEventListener from '../../Hooks/useEventListener';
import {
  ModalOuter, ModalInner, Action, AddItem, Menu, InputNum, Line, Submit,
} from './Modal.style';

const Modal = function (props) {
  const {
    open,
    setOpen,
  } = props;

  // Event lister that closes the modal when the user
  // clicks in the translucent area surrounding the modal
  useEventListener('click', (e) => {
    if (open && e.target.id === 'close-modal') {
      setOpen(false);
    }
  });

  // State for displaying the correct form
  const [food, setFood] = useState(false);
  const [water, setWater] = useState(false);

  // Submitting form state
  const [submittingFood, setSubmittingFood] = useState(false);
  const [submittingWater, setSubmittingWater] = useState(false);

  // Handle the submit event for the food menu
  const submitFood = (e) => {
    e.preventDefault();
    if (!submittingFood) {
      setSubmittingFood(true);
      console.log(e);
    }
  };

  // Handle the submit event for the water menu
  const submitWater = (e) => {
    e.preventDefault();
    if (!submittingWater) {
      setSubmittingWater(true);
      console.log(e);
    }
  };

  return (
    <ModalOuter id="close-modal" open={open ? 1 : 0}>
      <ModalInner>
        <Action gap="1em">
          <AddItem onClick={() => { setFood(!food); setWater(false); }} tabIndex="0" role="button" align="center" justify="center" gap="1em" column background="#FF5964">
            Add Food
            <IconToolsKitchen2
              size={36}
              color="white"
              stroke={1}
              strokeLinejoin="miter"
            />
          </AddItem>
          <AddItem onClick={() => { setWater(!water); setFood(false); }} tabIndex="0" role="button" align="center" justify="center" gap="1em" column background="#59c2ff">
            Add Water
            <IconRipple
              size={36}
              color="white"
              stroke={1}
              strokeLinejoin="miter"
            />
          </AddItem>
        </Action>

        {food ? (
          <Menu>
            <ProgressCont
              title="Protein"
              current={66}
              target={160}
              unit="g"
              background="#FF5964"
              color="white"
            />
            <ProgressCont
              title="Calories"
              current={1680}
              target={2900}
              unit=""
              background="#ffff59"
              color="black"
            />
            <Line />
            <form onSubmit={submitFood}>
              <InputNum required type="text" placeholder="Enter Name of Food" min="1" max="124" step="1" />
              <InputNum required type="number" placeholder="Enter Protein" step="1" />
              <InputNum required type="number" placeholder="Enter calories" step="50" />
              <Submit background={submittingFood ? 'grey' : '#FF5964'} type="submit">Add Food</Submit>
            </form>
          </Menu>
        ) : ''}

        {water ? (
          <Menu>
            <ProgressCont
              title="Calories"
              current={500}
              target={2000}
              unit="ml"
              background="#59c2ff"
              color="white"
            />
            <Line />
            <form onSubmit={submitWater}>
              <InputNum required type="number" placeholder="Enter in ml" step="50" />
              <Submit background={submittingWater ? 'grey' : '#59c2ff'} type="submit">Add Water</Submit>
            </form>
          </Menu>
        ) : ''}

      </ModalInner>
    </ModalOuter>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Modal;
