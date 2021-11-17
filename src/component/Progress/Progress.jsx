/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  React, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  ProgressWrap, Progress, SmallLabel, Item, ItemBold, ProgWrap,
} from './Progress.style';

const ProgressCont = function (props) {
  const {
    title,
    current,
    target,
    unit,
    background,
    color,
  } = props;

  const [percent, setPercent] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const progress = Math.round((current / target) * 100);
    setRemaining(target - current);
    setPercent(progress);
  }, [current, target]);

  return (
    <ProgWrap>
      <SmallLabel>
        <ItemBold>{title}</ItemBold>
        <Item>
          Current:
          {' '}
          {current}
          {unit}
        </Item>
      </SmallLabel>
      <ProgressWrap>
        <Progress background={background} color={color} percent={percent}>
          {`${percent}%`}
        </Progress>
      </ProgressWrap>
      <SmallLabel>
        <Item>
          Target
          {' '}
          {target}
          {unit}
        </Item>
        <Item>
          Remaining:
          {' '}
          {remaining}
          {unit}
        </Item>
      </SmallLabel>
    </ProgWrap>
  );
};

ProgressCont.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressCont;
