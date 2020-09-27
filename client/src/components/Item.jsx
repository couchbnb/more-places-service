import React from 'react';

const Item = ({item}) => {
  console.log('item prop: ', item);
  return (
    <p>
      <li>
        {item.roomid}
      </li>
  <li> {item.host[0].description}</li>
    </p>
  );
};

export default Item;
