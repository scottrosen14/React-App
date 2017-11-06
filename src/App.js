import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables:[{
        name: 'Schema',
            rows: [
              { field: '', type: '' }
            ]
      }]
    };
  }

  addTable = () => {
    // this.setState(() => {
    //   let newState = this.state;
    //     newState.tables.push({
    //         name: 'Schema',
    //         rows: [
    //           { field: '', type: '' }
    //         ]
    //     })
    //   return newState;
    // })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  changeTableName = (e) => {
    this.setState(() => {
      let newState = this.state;

      console.log('placeholder', e.target)
        // newState.tables[0].name = e.target.placeholder;
      return newState;
    })
  }
  addRow = () => {
    this.setState(() => {
      let newState = this.state;
      newState.tables.forEach((table, i) => {
        table.rows.push({ field: '', type: '' })
      })
      return newState;
    })
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
              placeholder={this.state.tables.length > 0 ? this.state.tables[0].name : 'Table'}/>
            <button className="addTableBtn" onClick={this.addTable}>Add Table</button>
            <input type="submit" value="Submit" className="addTableBtn" onClick={this.changeTableName}/>
        </form>
        </div>
        <Display state = {this.state} addRow={(e) => this.addRow(e)}/>
      </div>
    );
  }
}

export default App;