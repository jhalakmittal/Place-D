import React, { useState , useEffect  } from 'react';
import {useParams} from 'react-router-dom';
import { Button,Form} from 'react-bootstrap';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Updatepassword = ()=>{
    const {id,token}= useParams();
    // console.log(id);
    // console.log(token);
    const[editinp,editinps]=useState({
        updatepassword : "",
        id : "",
        token: ""
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
    console.log("in save password method");
    console.log(editinp.updatepassword);
    editinp.id = id;
    editinp.token=token;
    axios.post('http://localhost:2000/user/resetpassword',editinp)
    .then((res)=>{
    //   console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
    //   console.log(props.id);
    alert(res);
      console.log(res);
    }).catch((err)=>{
    //   console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
    alert(err.response.data.message);
      console.log(err.response);
    });
  }
    
    return(
        <div className="container my-3 py-5 text-center">
        <div className="row mb-5">
        <div className="col">
        <h1>Reset Password</h1>
        <div className="row">
        <div className="col">
              
    <div   className="card" style={{width:'50rem'}}>
    <div className="card-body">
        <Form onSubmit={onLoginFormSubmit} className="w-50  h-50 " >
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{fontSize:"30px"}}>Update Password</Form.Label>
        <Form.Control
          type="text"
          onChange={editEvent}
          name="updatepassword"
          value={editinp.updatepassword}
          
        />
      </Form.Group>
      <Button  className="w-50 h-50 mx-auto" style={{   border:'0px' , color : "white" , backgroundColor:"#CBA9EF"}} onClick={editSave}   type="submit" block>
      Update
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
export default Updatepassword;