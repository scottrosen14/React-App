import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Table from './Table';
import Draggable, {DraggableCore} from 'react-draggable';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Fullscreen from 'react-full-screen';



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
    stateNew.tables.splice(index, 1);
    // stateNew.tables[index] = null;
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

  changeTableName = (e)=> {
    let stateNew = Object.assign({}, this.state);
    stateNew.tables.forEach((tbl, i) => {
      if (tbl) {
        tbl.name = e.target.value;
      }
    })
    // stateNew.tables[tableIndex].name = e.target.value;
    this.setState(stateNew);
    // console.log('name', this.state.tables[0]);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <MuiThemeProvider>

      <div>
      <AppBar style={{'background-color': '#343A41', 'border-bottom': '3px solid white', 'line-height': '20px'}} className="appbar" title="Menu" onClick={this.handleToggle}></AppBar>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>


      <div>
        <div id="tableBarWrap">
            <RaisedButton primary = "true" className="addTableBtn" onClick={this.addTable}>ADD TABLE</RaisedButton>
            <button className="Delete All" onClick={this.deleteAllTables}>CLEAR</button>
        </div>
        <Display state = {this.state} deleteTable={this.deleteTable} deleteAllTables={this.deleteAllTables} addRow={this.addRow} changeTableName={this.changeTableName} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
