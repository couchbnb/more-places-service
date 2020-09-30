import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';
// import Slider from 'react-slick';

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

  // const setting = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // };
  return (
    // <Slider {...settings}>

    <Slide>
      {data.map((item, index) => <Item item={item} key={index} />)}
    </Slide>
    // </Slider>

  );
};

export default List;

// flex-wrap: nowrap;
