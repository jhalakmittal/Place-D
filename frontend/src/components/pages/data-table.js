import React, { Component } from 'react';
import "./data-table.css";
// import AdmnEdit from "./admn-edit";
// import AdmnDel from "./admn-del";
import { ButtonGroup } from 'react-bootstrap';
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td className="td">
                    <div>
                    {this.props.obj.announce}
                    <div className="float-right" style={{marginRight:"0%"}}>
                    {/* <ButtonGroup className="mr" aria-label="First group">
                    <AdmnEdit/>
                    <AdmnDel/><tab/>
                    </ButtonGroup> */}
                    </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DataTable;