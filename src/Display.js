import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Display extends Component {
  render () {
    const {state, deleteTable, deleteAllTables, addRow, changeTableName} = this.props;
    const tablesArr = [];
    for (let i = 0; i < state.tables.length; i++) {
      if (state.tables[i] !== null) {
        let table = (
          <Table key={i} state={state} table={state.tables[i]} tableIndex={i} deleteTable={deleteTable} deleteAllTables={deleteAllTables} addRow={addRow} changeTableName={changeTableName} />
        );
        tablesArr.push(table)
      } else {
        let pixel = (
          <table className="tableInvisible">
            <thead>
              <tr><th><input className="inputInv" type="text"/></th></tr>
            </thead>
            <tbody>
              <tr>
                <td><input className="inputInv" type="text"/></td>
                <td><input className="inputInv" type="text"/></td>
              </tr>
            </tbody>
          </table>
        )
        tablesArr.push(pixel)
      }
    }
    return (
      <div className="display">{tablesArr}</div>
    )
  }
}

export default Display;