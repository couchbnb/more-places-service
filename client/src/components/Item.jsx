import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

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
      <Frame>
        <Upleft>
          <div>SuperHost</div>
        </Upleft>
        <Upright>
          <div>
            <svg
              type="button"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                fill: 'rgb(0, 0, 0, 0.5)',
                height: '24px',
                width: '24px',
              }}
              stroke="currentcolor"
              strokeWidth="2"
              overflow="visible"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
            0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
            2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
              />
            </svg>
          </div>
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

//   const Wrapper = styled.section`

//     padding: 4em;
//     border-width: 0px 6px;
//     max-width: 66.6667%;
//     flex: 0 0 66.6667%;
//   `;
