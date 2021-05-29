import React,{Component} from "react";
import axios from "axios";
import DataTable from "./data-table";
import { Table } from "react-bootstrap";
import "./Announcemnt.css"
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';

export default class Ancment extends Component {

  constructor(props) {
      super(props);
      this.state = { announcement: [],addModalShow: false };
  }

  componentDidMount() {
      axios.get('http://localhost:2000/dashboard')
          .then(res => {
              this.setState({ announcement: res.data });
          })
          .catch(function (error) {
              console.log(error);
          })
  }
  onDelete = (id) => {
		
    axios.delete(`http://localhost:2000/dashboard/delete/${id}`).then((res) => {
      alert(this.state.name + "is deleted successully");
      this.componentDidMount();
    });
  };

  dataTable() {
      return this.state.announcement.map((data, i) => {
          return <DataTable obj={data} key={i} />;
      });
  }

  render() {
      return (
          <div className="wrapper-users d-flex justify-content-end ">
              <marquee scrollamount="15">
                  <Table style={{width:"100%",marginBottom:"100px"}} responsive={true} bordered={true} className="tab">
                      <thead className="tab--th">
                          <tr className="tab--tr">
                              <td>Announcements</td>
                          </tr>
                      </thead>
                      <tbody className="tbody">
                      {this.state.announcement.map((data, index) => (<tr>
                <td className="td">
                    {data.announce}
                </td>
            </tr>))}
                      </tbody>
                  </Table>
                  </marquee>
                  &nbsp;
                  &nbsp;
                  <br/>
                  <br/>
                  <a href="/user/announcement/add">
                  <button className="btn-success">
                      Add
                      </button>  
                      </a>              
      </div>
      )
  }
}