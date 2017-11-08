import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // tables: []
      tables: {
        length: 0
      }
    };
  }

  add = (item) => {
      let stateNew = Object.assign({}, this.state);
      stateNew.tables[stateNew.tables.length] = item;
      stateNew.tables.length++
      this.setState(stateNew);
      console.log('state add', this.state)
  }

  addTable = () => {
    // changed from push
    this.add({
            name: 'Schema',
            rows: [
              { field: '', type: '' }
            ]
        })
    let stateNew = Object.assign({}, this.state);
    console.log('new state', stateNew)
    this.setState(stateNew);
    console.log('state', this.state)

  }

  deleteTable = (index) => {
    // add button to table for deleting
    // copy state
    // get the index of the target table
    // make the target table an empty object
    // check to make sure state has changed
    const stateNew = Object.assign({}, this.state);
    stateNew.tables.splice(index, 1);
    this.setState(stateNew);
  }

  render() {
    return (
      <div>
        <div id="tableBarWrap">
        <form onSubmit={this.handleSubmit}>
            <input
              id="tableBar"
              type="text"
              onChange={this.changeTableName}
              placeholder={'Type here'}/>
            <button className="addTableBtn" onClick={this.addTable}>Add Table</button>
            <input type="submit" value="Submit" className="addTableBtn" onClick={this.changeTableName}/>
        </form>
        </div>
        <Display state = {this.state} deleteTable={this.deleteTable}/>
      </div>
    );
  }
}

export default App;
