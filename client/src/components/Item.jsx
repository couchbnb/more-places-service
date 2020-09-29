import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => {
  const {
    rate, name, picture, description, price,
  } = item;

  /* className="list" style="margin-left: -6px; margin-right: -6px;" */
  const Pic = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px;
  `;
  return (
    <div>

      <div>
        {rate}
      </div>
      <div>
        {name}
      </div>
      <div>
        <Pic src={picture} />
      </div>
      <div>
        {description}
      </div>
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
