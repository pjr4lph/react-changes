import React, { Component } from 'react';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      createdAt: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.resetField = this.resetField.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, createdAt: Date.now()});
  }

  resetField(){
    this.setState({value: '', createdAt: ''});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input id="submit-btn" type="submit" onClick={()=>{this.props.addItem(this.state); this.resetField()}}></input>
      </div>
    )
  }
}

module.exports = Submit;
