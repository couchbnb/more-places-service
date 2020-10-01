import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Grid = styled.section`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px; 
`;
const Right = styled.div`
  align-items: center !important;
  display: flex !important;
  white-space: nowrap  
`;
const Title = styled.div`
  text-align: left;
  color: black;
  padding-bottom: 0px;
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 26px
  `;

const Button = styled.span`
  display: inline-flex;
  appearance: none 
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  border: 1px solid;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

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
let motion = 0;
const List = ({ data }) => {
  function handleClickPrev() {
    document.getElementById('container').style.transform = `translateX(${motion + 1000}px)`;
    motion += 500;
  }
  function handleClickNext() {
    document.getElementById('container').style.transform = `translateX(${motion - 1000}px)`;
    motion -= 500;
  }

  return (
    <div>
      <Grid>
        <Title id="title">More places to stay</Title>
        <Right>
          <div> 1/4 </div>
          <Button onClick={handleClickPrev}>{'<'}</Button>
          <Button id="nextButton"onClick={handleClickNext}>{'>'}</Button>
        </Right>
      </Grid>
      <Slide id="container">

        {data.map((item, index) => <Item id="item" item={item} key={index} />)}

      </Slide>
    </div>
  );
};

export default List;

// flex-wrap: nowrap;
