import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button,Modal,Form} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ToastContainer, toast } from 'react-toastify';
// import Editintexp from '../Component/Editintexp';
import './Card.css';
const LoginForm = (props) => {

  const[editinp,editinps]=useState({
    name : "",
    imgurl : "",
    companyname : "",
    experience : "",
  });
  const id = useState(props.id);

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
    console.log(editinp.name);
  
  }

  const editSave = () =>{ 
    console.log("in edit save");

    /*axios.post('http://localhost:2000/admin/addexperience',editinp)
    .then(()=>console.log('Experience Added'))
    .catch(err => {console.error(err.response.data.message)
    // setTes(err.response.data.message)
    });*/
    console.log(editinp);
    if(editinp.companyname=='')
    editinp.companyname = props.companyname;
    if(editinp.name=='')
    editinp.name = props.name;
    if(editinp.imgurl=='')
    editinp.imgurl = props.imgurl;
    if(editinp.experience=='')
    editinp.experience = props.experience;
    /*axios.patch(`http://localhost:2000/admin/updateexperience/${props.id}`,editinp)
    .then((res)=>{
      console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
      console.log(props.id);
      console.log("InterviewExperiece edited");
    }).catch((err)=>{
      console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
      console.log(err.response);
    });*/
    fetch(`http://localhost:2000/admin/updateexperience/${props.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        "Authorization" : "Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        name :editinp.name,
        imgurl:editinp.imgurl,
        companyname:editinp.companyname,
        experience:editinp.experience
        

     
    })
  })
    .then(res=>res.json())
    .then((data)=>{console.log(data)
      if(data.message!=undefined)
      alert(data.message);
    }).catch(err => {console.error(err.response);
      console.log("j")
    // setTes(err.response.data.message)
    });

  }

  return (
    <Form onSubmit={onLoginFormSubmit} >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          // id="Name"
          name="name"
          value={editinp.name}
          onChange={editEvent}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="url"
          onChange={editEvent}
            // id="imgurl"
            name="imgurl"
            value={editinp.imgurl}
            style={{width:"350px"}}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Company name</Form.Label>
        <Form.Control
          type="text"
          onChange={editEvent}
            // id="company"
            name="companyname"
            value={editinp.companyname}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          onChange={editEvent}
          onChange={editEvent}
            // id="experience"
            name="experience"
            value={editinp.experience}
        />
      </Form.Group>

      <Button id="edt" style={{marginLeft:"30px", width:"200px"}} onClick={editSave}  type="submit" >
      Edit 
      </Button>
    </Form>
  );
};


const Card = (props)=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(props.id);
  function handleDelete() {
    console.log('clicked from frontend')

    /*axios.delete(`http://localhost:2000/admin/deleteexperience/${props.id}`)
  .then((response) => {
    console.log(response.data);
  }).catch((error)=>{
    console.log(error.response);
  })*/
  fetch(`http://localhost:2000/admin/deleteexperience/${props.id}`,{
          method: "DELETE",
          headers:{
            "Content-Type": "application/json",
            "Authorization" : "Bearer "+localStorage.getItem("jwt")
          },
          
      })
        .then(res=>res.json())
        .then((data)=>{console.log(data)
          if(data.message!=undefined)
          alert(data.message);
        }).catch(err => {console.error(err.response);
        // setTes(err.response.data.message)
        });

}
    return(
        
    <div  key={props.index} id="ie-card" className="card" style={{width:'20rem'}}>
    <div className="card-body">
    
  
    <img src={props.imgurl}  className="img-fluid rounded-circle w-50 mb-3"></img>
    <h3>{props.name}</h3>
    <h5>{props.companyname}</h5>
    <p>{props.experience}</p>
    
<div className="p-3">
<ul className="list-inline">
<li className="list-inline-item"><button onclick="https://github.com/sneha-baser" ><GitHubIcon style={{ fontSize: 30,color:"black" }} /></button></li>
<li className="list-inline-item"><LinkedInIcon style={{ fontSize: 40,border:"1px",borderColor:"black" }}/></li>


</ul>

{/* <Editintexp  index={props.index} id={props.id} /> */}
<Button id="edt-btn" className="ml-1" onClick={handleShow}>
          Edit
        </Button>
      
      <Modal show={show} onHide={handleClose} id="del">
        <Modal.Header closeButton>
          
          <Modal.Title style={{width:"400px"}}>Edit Interview Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm id={props.id}/>
      
        </Modal.Body>
        <Modal.Footer>
          <Button  id="del" style={{width:"150px",float:"right"}} onClick={handleClose}>
            Close
          </Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>


 
<br/>
<Button id="del" className="ml-1" onClick={handleDelete} >
          Delete
        </Button>
</div>

    </div>

    </div>
    
    )


}
export default Card;