import React, { Component } from "react";
import axios from "axios";
import { Card, FormLabel, Input } from "@material-ui/core";
import "./com-edit-form.css"
import {Form} from "react-bootstrap"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default class EditCompany extends Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.onChangeDesc=this.onChangeDesc.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeNos = this.onChangeNos.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Name:"",
      Desc:"",
      img:"",
      nos:"",
      Date:"",   
    };
  }

  componentDidMount() {
     const id=this.props.match.params.id;
    axios.get(`http://localhost:2000/company/${id}`)
      .then(res=> {
        if(res.data.success){
        this.setState({
          Name: res.data.post.Name,
          Desc: res.data.post.Desc,
          img:res.data.post.img,
          nos:res.data.post.nos,
          Date:res.data.post.Date,
        });
      }
    });
  }
  onChangeName(e) {
    this.setState({ Name: e.target.value })
}

onChangeImage(e) {
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
// handleInputChange = (e) => {
//   const { Name, value } = e.target;
//   this.setState({
//     ...this.state,
//     [Name]: value,
//   });
// };
  // valiDate =(Name)=>{
  //   const errors=setErrors(Name);
  //   this.setState({errors:errors});
  //   return Object.values(errors).every((err)=>err ==="")
  // };


  onSubmit(e){
    e.preventDefault()
    const id=this.props.match.params.id;
    // const { Name, Desc,Date,img,nos } = this.state;
   
      fetch(`http://localhost:2000/company/update/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
          "Authorization" : "Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          Name:this.state. Name,
            img:this.state. img,
            Date:this.state. Date,
            Desc:this.state. Desc,
            nos:this.state. nos,      
  
        })
    })
      .then(res=>res.json())
      .then((data)=>{console.log(data)
        if(data.message!=undefined)
        alert(data.message);
      }).catch(err => {console.error(err.response);
        console.log("j")
      });
  //   axios.put(`http://localhost:2000/company/update/${id}` ,companyObject)
  //   .then((res) => {
  //     console.log(res.data.success)
  //     alert("COMPANY EDITED!!");
  //     // this.setState({ Name: '',
  //     // desc:'',
  //     // img:'',
  //     // Date:'',
  //     // nos:''})
  //     this.props.history.push('/user/pdashboard/company');
  // }).catch((error) => {
  //     console.log(error)
  // });
  }
  render() {
    return (
      <div>
        <Navbar/>
      <Card id="eccard">
        <h3>Edit Company Details</h3>
        <hr/>
                <Form id="ecf" onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label id="ecl">Company</Form.Label>
                        <Form.Control id="ect" type="text" value={this.state.Name} onChange={this.onChangeName} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Description</Form.Label>
                        <Form.Control id="ecta" as="textarea" rows={4} value={this.state.Desc} onChange={this.onChangeDesc} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Image URL</Form.Label>
                        <Form.Control id="ecta" as="textarea" rows={4} value={this.state.img} onChange={this.onChangeImage} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">Tentative Dates</Form.Label>
                        <Form.Control id="ect" type="text"  onChange={this.onChangeDate} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="ecl">No. of Students Selected Per Year</Form.Label>
                        <Form.Control id="ect" type="text" onChange={this.onChangeNos} className="form-control" />
                    </Form.Group>
                    <Form.Group>
                        <button id="ecb" type="submit" className="btn-success" > Save</button>
                    </Form.Group>
                </Form>
                </Card>
                <Footer/>
                </div>
      );
  }
}

