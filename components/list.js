import React, { Component } from 'react';
// import Item from './list_item';

const List = ({pageList, removeItem}) => {
  // const { pageList } = props;

  const renderedList = pageList.map((el, i) => {
    // return <li><Item key={i} value={el}></Item></li>;
    return <li key={i} onClick={()=>{removeItem(el)}}>{el}</li>;
  });

  return (
    <ul>
      {renderedList}
    </ul>
  )
}

module.exports = List;
