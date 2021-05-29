import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import QueueTwoToneIcon from '@material-ui/icons/QueueTwoTone';
import {Button, TabContent} from 'react-bootstrap';
import axios from "axios";
import "./com-edit-form.css"
import { Card } from "@material-ui/core";
import { useHistory } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default class Ccontent extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImg=this.onChangeImg.bind(this);
        this.onChangeDesc=this.onChangeDesc.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeNos = this.onChangeNos.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Desc:'',
            img:'',
            Date:'',
            nos:''
        }
    }

    onChangeName(e) {
        this.setState({ Name: e.target.value })
    }

    onChangeImg(e) {
        this.setState({ img: e.target.value })
    }
    onChangeDate(e) {
        this.setState({ Date: e.target.value })
    }
    onChangeDesc(e) {
        this.setState({ Desc: e.target.value })
    }
    onChangeNos(e) {
        this.setState({ nos: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:2000/company/create',{
            method: "post",
            headers:{
              "Content-Type": "application/json",
              "Authorization" : "Bearer "+localStorage.getItem("jwt")
            },body:JSON.stringify({
                Name: this.state.Name,
                img: this.state.img,
                Date: this.state.Date,
                Desc: this.state.Desc,
                nos: this.state.nos         
          })
        })
              .then(res=>res.json())
              .then((data)=>{console.log(data)
                if(data.message!=undefined)
                alert(data.message);
              }).catch(err => {console.error(err.response);
              // setTes(err.response.data.message)
              });
  
          this.setState({Name: '',
          Desc:'',
          img:'',
          Date:'',
          nos:''})
          alert("Company Added!")
    }

    render(){
    return(
        <div>
        <Navbar/>
        <Card id="eccard">
        <h3>Add Company Details</h3>
        <hr/>
                <Form id="ecf" onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label id="ecl">Company</Form.Label>
                        <Form.Control id="ect" type="text" placeholder="Enter Company Name" value={this.state.Name} onChange={this.onChangeName} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Description</Form.Label>
                        <Form.Control id="ecta" as="textarea" placeholder="Enter Company Description" rows={4} value={this.state.Desc} onChange={this.onChangeDesc} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Image URL</Form.Label>
                        <Form.Control id="ecta" placeholder="Enter URL" as="textarea" rows={4} value={this.state.img} onChange={this.onChangeImg} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Tentative Dates</Form.Label>
                        <Form.Control id="ect" type="text" placeholder="Enter Tentaive Dates" onChange={this.onChangeDate} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">No. of Students Selected Per Year</Form.Label>
                        <Form.Control id="ect" placeholder="Enter No. of Students" type="text" onChange={this.onChangeNos} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <button id="ecb" type="submit" className="btn-success" > Add</button>
                    </Form.Group>
                </Form>
                </Card>
                <Footer/>
                </div>
    )}
}