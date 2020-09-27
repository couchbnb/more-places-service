import React from 'react';
import Item from './Item.jsx';

const List = ({data}) => {
//   let {data} = props;
//   const { data } = props;
  console.log('data: ', data);
  return (
    <ul>
      {data.map((item, index) => <Item item={item} key={index} />)}
    </ul>
  );
};

export default List;
