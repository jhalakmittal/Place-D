import React, { useState , useEffect } from 'react';
import { Button,Form} from 'react-bootstrap';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import M from 'materialize-css';
import '../../src/App.css';

const Forgotpassword = ()=>{
    const[editinp,editinps]=useState({
        email : ""
      });
    const onLoginFormSubmit = (e) => {
        e.preventDefault();
      
      }; 
      const editEvent = (event)=>{
        const value=event.target.value;
        const name=event.target.name;
        editinps((prevValue)=>{
          return{
            ...prevValue,
            [name]:value,
          };
        });
        // console.log(editinp.email);
      
      }
      
  const editSave = () =>{ 
    console.log("in forgot password method");
    console.log(editinp.email);
    axios.post('http://localhost:2000/user/postforgotpassword',editinp)
    .then((res)=>{
    //   console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
    //   console.log(props.id);
    
    // M.toast({html: res.data.message ,classes: "#c62828 red darken-3" })
    alert(res.data.message);
      console.log(res);

    }).catch((err)=>{
    //   console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
    // M.toast({html:err.response,classes:"#c62828 red darken-3"})
    alert(err.response.data.message);
      console.log(err);
    });
  }
    
    return(
        <div className="container my-3 py-5 text-center">
        <div className="row mb-5">
        <div className="col">
        <h1>Forgot Password</h1>
        <div className="row">
        <div className="col">
              
    <div   className="card" style={{width:'50rem'}}>
    <div className="card-body">
        <Form onSubmit={onLoginFormSubmit} className="w-50  h-50 " >
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px"}}>Email</Form.Label>
        <Form.Control
          type="email"
          onChange={editEvent}
          name="email"
          value={editinp.email}
          
        />
      </Form.Group>
      <Button  className="w-50 h-50 mx-auto" style={{   border:'0px' , color : "white" , backgroundColor:"#CBA9EF"}} onClick={editSave}   type="submit" block>
      submit
      </Button>
      </Form>
        </div>
        </div>
        </div>
        </div>

        </div>
        </div>
        </div>
    )
}
export default Forgotpassword;