/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  React, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  TableCont, TableHead, ThCol, ThRow, TbRow, TbCol,
} from './Table.style';

const Table = function (props) {
  const {
    foodDiary,
  } = props;

  useEffect(() => {
    console.log(foodDiary);
  }, [foodDiary]);

  const diaryEntries = foodDiary.map((entry) => (
    <TbRow key={entry.id}>
      <TbCol>{entry.name}</TbCol>
      <TbCol>{entry.calories}</TbCol>
      <TbCol>{entry.protein}</TbCol>
    </TbRow>
  ));

  return (
    <TableCont>
      <TableHead>
        <ThRow>
          <ThCol>Food Name</ThCol>
          <ThCol>Calories</ThCol>
          <ThCol>Protein</ThCol>
        </ThRow>
      </TableHead>
      <tbody>
        {diaryEntries}
      </tbody>
    </TableCont>
  );
};

Table.propTypes = {
  foodDiary: PropTypes.array.isRequired,
};

export default Table;
