import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const List = ({ data }) => {
  const Slide = styled.div`
  display: flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory !important;
  `;
  return (
    <Slide>
      {data.map((item, index) => <Item item={item} key={index} />)}
    </Slide>
  );
};

export default List;

// flex-wrap: nowrap;
