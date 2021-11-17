/* eslint-disable func-names */
import {
  React, useEffect, useState,
} from 'react';
import { IconCirclePlus } from '@tabler/icons';
import { format } from 'date-fns';
import { NavCont, AddCont, NavTitle } from './Nav.style';
import Modal from '../Modal/Modal';

const Nav = function () {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(format(new Date(), 'MMM do'));
  }, []);

  return (
    <NavCont justify="space-between" align="center">
      <Modal open={open} setOpen={setOpen} />
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

export default Nav;
