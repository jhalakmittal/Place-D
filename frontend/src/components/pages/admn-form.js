import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import QueueTwoToneIcon from '@material-ui/icons/QueueTwoTone';
import {Button, TabContent} from 'react-bootstrap';
import axios from "axios";
import "../../Component/com-edit-form.css";
import { Card } from "@material-ui/core";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default class AForm extends Component{
    constructor(props) {
        super(props);
        this.onChangeAnnounce=this.onChangeAnnounce.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            announce:'',
        }
    }

    onChangeAID(e) {
        this.setState({ AID: e.target.value })
    }

    onChangeAnnounce(e) {
        this.setState({ announce: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            announce: this.state.announce,
        };

        fetch('http://localhost:2000/dashboard/create',{
          method: "post",
          headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer "+localStorage.getItem("jwt")
          },body:JSON.stringify({
            announce:this.state.announce         
        })
      })
            .then(res=>res.json())
            .then((data)=>{console.log(data)
              if(data.message!=undefined)
              alert(data.message);
            }).catch(err => {console.error(err.response);
            // setTes(err.response.data.message)
            });

        this.setState({announce:''})
        alert("Announcement Added!")
    }

    render(){
    return(
        <div>
            <Navbar/>
        <Card id="eccard">
        <h3>Add Announcement</h3>
        <hr/>
        <Form>
                            <br/>
                            <Form.Group>
                                <Form.Label id="ecl"  className="float-left">Announcement <TabContent/></Form.Label>
                                <Form.Control id="ecta" as="textarea" row={3} value={this.state.announce} onChange={this.onChangeAnnounce} className="float-right txtarea"  placeholder="Enter Announcement" />
                            </Form.Group>
                            <Form.Group>
                            <br/>
                            <br/>
                            <br/>
                            <Button onClick={this.onSubmit} className="float-right" variant="success" type="submit" style={{backgroundColor:"green"}}>
                                Add
                            </Button>
                            </Form.Group>
                        </Form>
                        </Card>
                        <br/>
                        <br/>
                        <br/>
                        <Footer/>
                        </div>
    )}
}