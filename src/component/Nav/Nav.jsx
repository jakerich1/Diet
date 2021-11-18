/* eslint-disable func-names */
import {
  React, useEffect, useState,
} from 'react';
import { IconCirclePlus } from '@tabler/icons';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { NavCont, AddCont, NavTitle } from './Nav.style';

const Nav = function (props) {
  const {
    setOpen,
  } = props;

  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(DateTime.now().toLocaleString({ month: 'long', day: 'numeric' }));
  }, []);

  return (
    <NavCont justify="space-between" align="center">
      <NavTitle>{date}</NavTitle>
      <AddCont onClick={() => { setOpen(true); }}>
        <IconCirclePlus
          size={36}
          color="white"
          stroke={1}
          strokeLinejoin="miter"
        />
      </AddCont>
    </NavCont>
  );
};

Nav.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Nav;
