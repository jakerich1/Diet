/* eslint-disable func-names */
import {
  React,
} from 'react';
import { IconBolt, IconMeat, IconRipple } from '@tabler/icons';
import {
  DashWrap, Tile, Title, Percent, Amount, Label,
} from './Dash.style';

const Dash = function () {
  return (
    <DashWrap>
      <Tile>
        <Label background="#ffff59">
          <IconBolt color="black" />
        </Label>
        <Title>Calories</Title>
        <Percent>31%</Percent>
        <Amount>1,300 kCal</Amount>
      </Tile>
      <Tile>
        <Label background="#FF5964">
          <IconMeat color="white" />
        </Label>
        <Title>Protein</Title>
        <Percent>64%</Percent>
        <Amount>76g</Amount>
      </Tile>
      <Tile spanning>
        <Label background="#59c2ff">
          <IconRipple color="white" />
        </Label>
        <Title>Water</Title>
        <Percent>60%</Percent>
        <Amount>1,200 mL</Amount>
      </Tile>
    </DashWrap>
  );
};

export default Dash;
