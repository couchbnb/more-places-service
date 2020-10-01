import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Heart from './Heart.jsx';

const element = <FontAwesomeIcon icon={faStar} />;

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
  width: 250px;
  height: 200px;
  margin: 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  pointer-events: none;
  overflow: hidden; 
`;
const Item = ({ item }) => {
  const {
    star, review, name, picture, description, price, superhost,
  } = item;

  return (
    <div>
      <Frame id="Frame">
        <Upleft id="upleft">
          <div>
            {
    superhost === true ? 'SUPERHOST' : ''
    }
          </div>
        </Upleft>
        <Upright id="upright">
          <Heart id="heart" />
        </Upright>
        <Pic src={picture} />
      </Frame>
      <FontAwesomeIcon
        icon={faStar}
        color="#ff385c"
        width="6px"
        height="6px"
      />
&nbsp;
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
