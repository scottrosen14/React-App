import React, { Component } from 'react';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable';
import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';

class Table extends Component {
  render() {
    let state = this.props.state;
    const rows = [];
    return (
      <Draggable>
      <div>
        <table className="table">
          <tr className="topRow">
            <th><input type="text" placeholder={this.props.name}/></th>
          </tr>
          <tbody>
            <tr className="dataField">
              <td><input type="text" placeholder="field"/></td>
              <td><input type="text" placeholder="data type"/></td>
            </tr>
          </tbody>
          <button className="addRowBtn" onClick={(e) => this.props.addRow(e)}>Add Row</button>
        </table>
      </div>
      </Draggable>
    );
  }
}


export default Table;
