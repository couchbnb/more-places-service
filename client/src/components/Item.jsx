import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Heart from './Heart.jsx';

const element = <FontAwesomeIcon icon={faStar} />;

const Frame = styled.div`
  position: relative;
`;
const Bold = styled.span`
color: #222222 !important;
font-weight: 600 !important;
font-size: 16px !important;
line-height: 30px;
`;
const Price = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: #4222222;
  font-weight: 300 !important;
`;
const Name = styled.div`
padding-top: 3px;
color: rgb(34, 34, 34) !important;
line-height: 20px;
max-height: 20px;
overflow: hidden;
text-overflow: ellipsis;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
font-weight: 300;
font-size: 16px !important;
line-height: 20px !important;
`;
const Rate = styled.span`
color: rgb(34, 34, 34) !important;
font-size: 15px !important;
    line-height: 18px !important;
`;
const Review = styled.span`
color: rgb(113, 113, 113) !important;
  overflow: hidden !important;
    padding: 0px !important;
    white-space: nowrap !important;
    width: 1px !important;
    font-size: 15px !important;
    line-height: 18px !important;
`;
const Host = styled.div`
color: #222222;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-weight: 650 !important;
font-size: 12px !important;
line-height: 20px !important;
`;
const Upleft = styled.div`
  margin-top: 25px;
  display: flex;
  left: 30px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(34, 34, 34);
  position: absolute;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  font-size: 14px !important;
    line-height: 18px !important;
`;
const Upright = styled.div`
  margin-top: 25px;
  display: flex;
  right: 25px;
  position: absolute;
`;
const Bottom = styled.div` 
  margin-left: 18px;
  margin-right: 15px;
`;
const Pic = styled.img`
  width: 270px;
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
          <Host>
            {
    superhost === true ? 'SUPERHOST' : ''
    }
          </Host>
        </Upleft>
        <Upright id="upright">
          <Heart id="heart" />
        </Upright>
        <Pic src={picture} />
      </Frame>
      <Bottom>
        <FontAwesomeIcon
          icon={faStar}
          color="#ff385c"
          width="6px"
          height="6px"
        />
&nbsp;
        <Rate>{star}</Rate>
&nbsp;
        <Review>
          (
          {review}
          )
        </Review>
        <Name>{description}</Name>
        <Name>{name}</Name>
        <Price>
          <Bold>{price}</Bold>
          {' / night'}
        </Price>
      </Bottom>
    </div>
  );
};

export default Item;
