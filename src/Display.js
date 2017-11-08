import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';


class Display extends Component {
  render () {
    const {state, deleteTable, addRow} = this.props;
    const tablesArr = [];
    for (let i = 0; i < state.tables.length; i++) {
      let table = <Table state={state} name={state.tables[i].name} tableIndex={i} deleteTable={deleteTable} addRow={(e) => this.props.addRow(e)}/>
      tablesArr.push(table)
    }
    return (
      <div>{tablesArr}</div>
    )
  }
}

export default Display;