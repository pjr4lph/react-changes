import React, { Component } from 'react';

// const List = ({pageList, removeItem}) => {
class List extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    console.log(e.target);
    const data = e.target.value;

    fetch('localhost:3000/addTodo', {
      method: 'POST',
      body: data,
    });
  }

  render() {
  const renderedList = this.props.pageList.map((obj, i) => {
    let curDate = Date(obj.createdAt).toString();
    return <li key={i} onClick={()=>{this.props.removeItem(obj.value);}}>{obj.value}<span>{curDate}</span></li>;
  }, this);
// <div>
// </div>
  return (
    <form onSubmit={(e)=>{this.handleSubmit(e)}}>
      <ul>
        {renderedList}
      </ul>
    </form>
  )
}
}
module.exports = List;
