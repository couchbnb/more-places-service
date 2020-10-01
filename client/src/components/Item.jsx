import React from 'react';
import styled from 'styled-components';
import Heart from './Heart.jsx';

const Item = ({ item }) => {
  const {
    star, review, name, picture, description, price,
  } = item;

  const Frame = styled.div`
    margin-bottom: 10px;
    position: relative;
`;

  const Upleft = styled.div`
    margin-top: 25px;
    display: flex;
    left: 30px;
    position: absolute;
  `;
  const Upright = styled.div`
    margin-top: 25px;
    display: flex;
    right: 25px;
    position: absolute;
  `;
  const Pic = styled.img`
    width: 280px;
    height: 220px;
    margin: 15px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    pointer-events: none;
    overflow: hidden; 
  `;
  return (
    <div>
      <Frame id="Frame">
        <Upleft>
          <div>SuperHost</div>
        </Upleft>
        <Upright>
          <Heart id="heart" />
        </Upright>
        <Pic src={picture} />
      </Frame>
      <span>{star}</span>
      <span>
        (
        {review}
        )
      </span>
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
