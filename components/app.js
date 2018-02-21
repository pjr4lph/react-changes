import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './list';
import Submit from './submit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageList: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    let arr = this.state.pageList.concat([item]);
    this.setState({pageList: arr});
  }

  removeItem(item) {
    let arr = this.state.pageList.filter((el) => {
      return el.value !== item;
    });
    this.setState({pageList: arr});
  }

  render() {
    return (
      <div>
        <Submit addItem={this.addItem} />
        <List pageList={this.state.pageList} removeItem={this.removeItem}/>
      </div>
    )
  }
}

module.exports = App;
