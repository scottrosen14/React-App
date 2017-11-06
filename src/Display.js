import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';

class Display extends Component {
  render () {
    let state = this.props.state;
    const tablesArr = [];
    for (let i = 0; i < state.tables.length; i++) {
      let table = <Table state={state} name={state.tables[i].name} tableIndex={i} addRow={(e) => this.props.addRow(e)}/>
      tablesArr.push(table)
    }
    return (
      <div>{tablesArr}</div>
    )
  }
}

export default Display;