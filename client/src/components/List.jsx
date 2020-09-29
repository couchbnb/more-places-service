import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const List = ({ data }) => {
  const Grid = styled.div`
  display: flex;
  justify-content: center;

  `;
  return (
    <Grid>
      {data.map((item, index) => <Item item={item} key={index} />)}
    </Grid>
  );
};

export default List;

// flex-wrap: nowrap;
