import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: []
      // tables:{
      //   add: (item) => {
      //     tables[this.state.length] = item;
      //     this.state.tables.length++
      //   },
      //   length: 0
      // }
    };
  }

  addTable = () => {
    let stateNew = Object.assign({}, this.state);
    stateNew.tables.push({
            name: 'Schema',
            rows: [
              { field: '', type: '' }
            ]
        })
    this.setState(stateNew);
  }

  deleteAllTables = () => {
    // pass func down as props
    // create delete all button
    let stateNew = Object.assign({}, this.state);
    stateNew.tables = [];
    this.setState(stateNew);
  }

  deleteTable = (index) => {
    // add button to table for deleting
    // copy state
    // get the index of the target table
    // make the target table an empty object
    // check to make sure state has changed
    const stateNew = Object.assign({}, this.state);
    // stateNew.tables.splice(index, 1);
    stateNew.tables[index] = null;
    this.setState(stateNew);
    // console.log('blah state', this.state)
  }

  addRow = (tableIndex) => {
    let stateNew = Object.assign({}, this.state);
    let table = stateNew.tables[tableIndex];
    if (table) {
      stateNew.tables[tableIndex].rows.push({ field: '', type: '' })
    }
    this.setState(stateNew);
    // console.log('state1', this.state)
  }

  changeTableName = (e, tableIndex)=> {
    let stateNew = Object.assign({}, this.state);
    stateNew.tables.forEach((tbl, i) => {
      tbl.name = e.target.value;
    })
    // stateNew.tables[tableIndex].name = e.target.value;
    this.setState(stateNew);
    // console.log('name', this.state.tables[0]);
  }

  render() {
    return (
      <div>
        <div id="tableBarWrap">
            <input
              id="tableBar"
              type="text"
              placeholder="Type here..."/>
            <button className="addTableBtn" onClick={this.addTable}>Add Table</button>
            <button className="Delete All" onClick={this.deleteAllTables}>Delete All</button>
        </div>
        <Display state = {this.state} deleteTable={this.deleteTable} deleteAllTables={this.deleteAllTables} addRow={this.addRow} changeTableName={this.changeTableName} />
      </div>
    );
  }
}

export default App;
