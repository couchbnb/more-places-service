import React from 'react';
import styled from 'styled-components';
import Heart from './Heart.jsx';


const Frame = styled.div`
  position: relative;
`;
const Bold = styled.span`
color: #222222 !important;
font-weight: 600 !important;
font-size: 15px;
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
`;
const Star = styled.span`
  margin-top: 5px;

`;
const Review = styled.span`
color: rgb(113, 113, 113) !important;
  overflow: hidden !important;
    padding: 0px !important;
    white-space: nowrap !important;
    width: 1px !important;
    font-size: 15px !important;
    line-height: 13px !important;
`;
const Host = styled.div`
color: #222222;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-weight: 650 !important;
font-size: 12px !important;
line-height: 20px !important;
font-size: 12px !important;
    letter-spacing: 0.04em !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
`;
const Upleft = styled.div`
  margin-top: 25px;
  display: flex;
  left: 30px;
  box-sizing: border-box;
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
    display: inline-flex !important;
    vertical-align: top !important;
    background-clip: padding-box !important;
    max-width: 100% !important;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
    border-radius: 4px !important;
    padding: 4px 8px !important;
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
  padding-top: 5px;
  line-height: 15px;
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
        {
    superhost === true ? (
      <Upleft id="upleft">
        <Host>
          SUPERHOST
        </Host>
      </Upleft>

    ) : null
    }
        <Upright id="upright">
          <Heart id="heart" />
        </Upright>
        <Pic src={picture} />
      </Frame>
      <Bottom>
        <Star>
          <svg
            viewBox="0 0 1000 1000"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style={{
              height: '14px',
              width: '14px',
              fill: '#ff385c',
            }}
          >
            <path d="M972 380c9 28 2 50-20
        67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499
        790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46
        447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39
        52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
            />
          </svg>
        </Star>
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
