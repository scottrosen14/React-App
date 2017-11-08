import React, { Component } from 'react';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable';


class Table extends Component {
  render() {
    const {state, tableIndex, deleteTable} = this.props;
    return (
      <Draggable>
      <div>
        <table className="table">
        <button onClick={() => deleteTable(tableIndex)}>Delete</button>
          <tr className="topRow">
            <th><input type="text" placeholder={state.tables[tableIndex].name}/></th>
          </tr>
          <tbody>
            <tr className="dataField">
              <td><input type="text" placeholder="field"/></td>
              <td><input type="text" placeholder="data type"/></td>
            </tr>
          </tbody>
          <button className="addRowBtn">Add Row</button>
        </table>

      </div>
      </Draggable>
    );
  }
}


export default Table;
