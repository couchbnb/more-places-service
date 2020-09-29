import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => {
  const {
    star, review, name, picture, description, price,
  } = item;

  /* className="list" style="margin-left: -6px; margin-right: -6px;" */
  const Pic = styled.img`
  width: 250px;
  height: 200px;
  margin: 15px;
  `;
  return (
    <div>

      <div>
        <Pic src={picture} />
      </div>
      <span>{star}</span>
      <span>({review})</span>
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
