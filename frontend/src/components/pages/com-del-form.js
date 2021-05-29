import DeleteSweepSharpIcon from '@material-ui/icons/DeleteSweepSharp';
import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import {Button, TabContent} from 'react-bootstrap';
import axios from "axios";
export default class ComDelForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            _id:''
        }
    }
    handleChange = event => {
        this.setState({ _id: event.target.value });
      }

      handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:8000/company/delete/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render(){
    return(
        <Form  onSubmit={this.handleSubmit}>
        <br/>
        <Form.Group>
        <Form.Label className="float-left">Company Name<TabContent/></Form.Label>
        <Form.Control  onChange={this.handleChange} type="text" className="float-right txt"  placeholder="Enter Name" />
        </Form.Group>
        <br/>
        <Button typeof="submit" className="float-right" variant="success"  color="success" type="submit">
        <DeleteSweepSharpIcon/>
        </Button>
        </Form>
    )}
}