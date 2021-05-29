import React, { Component } from "react";
import axios from "axios";
import { Card, FormLabel, Input } from "@material-ui/core";
import "../../Component/com-edit-form.css"
import {Form} from "react-bootstrap"
export default class EditAnnouncement extends Component {

  constructor(props) {
    super(props);
    this.onChangeAnnounce = this.onChangeAnnounce.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      announce:"",   
    };
  }

  componentDidMount() {
     const id=this.props.match.params.id;
    axios.get(`http://localhost:2000/dashboard/${id}`)
      .then(res=> {
        if(res.data.success){
        this.setState({
          announce: res.data.post.announce,
        });
      }
    });
  }
  onChangeAnnounce(e) {
    this.setState({ announce: e.target.value })
}



  onSubmit(e){
    e.preventDefault()
    const id=this.props.match.params.id;
    // const { announce, Desc,date,image,nos } = this.state;
      const companyObject={
        announce:this.state. announce
      };
   

    axios.put(`http://localhost:2000/dashboard/update/${id}` ,companyObject)
    .then((res) => {
      console.log(res.data.success)
      alert("COMPANY ADDED!!");
      this.props.history.push('/user/dashboard');
  }).catch((error) => {
      console.log(error)
  });
  }
  render() {
    return (
      <Card id="eccard">
        <h3>Edit Company Details</h3>
        <hr/>
                <Form id="ecf" onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label id="ecl">Announcement</Form.Label>
                        <Form.Control id="ecta" as="textarea" rows={4} value={this.state.announce} onChange={this.onChangeAnnounce} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <button id="ecb" type="submit" className="btn-success" > Save</button>
                    </Form.Group>
                </Form>
                </Card>
      );
  }
}