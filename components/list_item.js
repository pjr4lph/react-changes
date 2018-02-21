import React, { Component } from 'react';

const ListItem = (props) => {
  const { value, key } = props;
    return (
      <p key={key}>{value}</p>
    )
}

module.exports = ListItem;
