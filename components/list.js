import React, { Component } from 'react';

const List = ({pageList, removeItem}) => {

  const renderedList = pageList.map((obj, i) => {
    let curDate = Date(obj.createdAt).toString();
    return <li key={i} onClick={()=>{removeItem(obj.value)}}>{obj.value}<span>{curDate}</span></li>;
  });

  return (
    <ul>
      {renderedList}
    </ul>
  )
}

module.exports = List;
