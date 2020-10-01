import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';


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

const List = ({ data }) => {


  return (
    <div>

      <Slide id="container">
        {data.map((item, index) => <Item id="item" item={item} key={index} />)}
      </Slide>
    </div>
  );
};

export default List;

// flex-wrap: nowrap;
