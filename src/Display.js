import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';


class Display extends Component {
  render () {
    const {state, deleteTable} = this.props;
    const tablesArr = [];
    for (let i = 0; i < state.tables.length; i++) {
      let table = <Table state={state} tableIndex={i} deleteTable={deleteTable}/>
      tablesArr.push(table)
    }
    return (
      <div>{tablesArr}</div>
    )
  }
}

export default Display;