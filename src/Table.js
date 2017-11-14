import React, { Component } from 'react';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: ''
    }
  }

  componentDidMount() {
    // console.log(this.coordinates.getBoundingClientRect())
    let tableCoord = this.coordinates.getBoundingClientRect();
    let stateNew = Object.assign({}, this.state);
    stateNew.x = tableCoord
    this.setState(stateNew);
  }

  componentDidUpdate() {
    // console.log('x', this.state.x)
  }

  updatePosition = () => {
    let tableCoord = this.coordinates.getBoundingClientRect();
    let stateNew = Object.assign({}, this.props.state);
    stateNew.tables[0].tableCoord.x = 400;
  }

  render() {
    const {state, name, table, tableIndex, deleteTable, addRow, changeTableName} = this.props;
    // console.log('new state', this.state)
    let rows;
    if (table) {
      rows = table.rows.map((row, i) => {
        return (
          <tr className="dataField">
            <td><TextField
                floatingLabelText="data type"
              />
            </td>
            <td><input type="text" placeholder="data type" /></td>
          </tr>
        );
      })
    }

    return (
      <Draggable>
      <div className="tableWrapper">
        <table style={{"margin-left": this.state.x}} className="table" onChange={changeTableName} ref={(e) => {this.coordinates = e}}>
          <span className="deleteTableBtn" onClick={() => deleteTable(tableIndex)}>X</span>
            <tr className="topRow">
              <th colSpan={2}>
                <input type="text" placeholder="Table Name..."/>
              </th>
            </tr>
          <tbody>
            {rows}
            <tr className="buttonRow" colSpan={2}>
              <div>
              <FloatingActionButton mini="true" className="addRowBtn" onClick={() => this.props.addRow(tableIndex)}>
                <ContentAdd/>
              </FloatingActionButton>
              </div>
            </tr>
          </tbody>
        </table>
        <h1>{table.name}</h1>
      </div>
      </Draggable>
    );
  }
}


export default Table;
