import React, { useState , useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import "./Editintexp.css";
const Editintexp = (props) =>{
    const[editinp,editinps]=useState({
        name : "",
        imgurl : "",
        companyname : "",
        experience : "",
      });
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
      const editSave = (temp) =>{ 
        console.log("in edit save");

        /*axios.post('http://localhost:2000/admin/addexperience',editinp)
        .then(()=>console.log('Experience Added'))
        .catch(err => {console.error(err.response.data.message)
        // setTes(err.response.data.message)
        });*/
        axios.patch(`http://localhost:2000/admin/updateexperience/${props.id}`,editinp)
        .then((res)=>{
          // console.log(memeobj.url);
          // console.log(memeobj.caption);
          console.log("InterviewExperiece edited");
        }).catch((err)=>{
          console.log(`http:localhost:2000/admin/updateexperience/${props.id}`);
          console.log(err.response);
        });
        // editinp.name="";
        // editinp.imgurl="";
        // editinp.companyname="";
        // editinp.experience="";
        
       
          /*axios.patch(`http:localhost:8081/memes/${props.id}`,memeobj)
        .then((res)=>{
          // console.log(memeobj.url);
          // console.log(memeobj.caption);
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        });
        editinp.editurl="";
        editinp.editcaption="";*/
   
    
    
      }
      return(
          <>
          <button type="button" style={{width:'200px'}} id="mf-btn" class="btn pull-right " data-toggle="modal" data-target="#exampleModal">
  Edit
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{width:"400px"}}>Add Interview Experience</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
          <div class="form-group float-left" style={{marginLeft:"-100px"}}>
            <label for="Name" class="col-form-label">Name</label>
            <input type="text" 
            onChange={editEvent}
            class="form-control"
             id="Name"
              name="name"
              value={editinp.name}
              style={{width:"350px"}}
             />
            <label for="imgurl" class="col-form-label">Image URL</label>
            <input type="url" 
            class="form-control"
            onChange={editEvent}
            id="imgurl"
            name="imgurl"
            value={editinp.imgurl}
             />
             <label for="company" class="col-form-label">Company name</label>
            <input type="text" 
            class="form-control"
            onChange={editEvent}
            id="company"
            name="companyname"
            value={editinp.companyname}
             />
             <label for="experience" class="col-form-label">Experience</label>
            <input type="text" 
            class="form-control"
            onChange={editEvent}
            id="experience"
            name="experience"
            value={editinp.experience}
             />
            
             
            </div>
            </form>
      </div>
      <div class="modal-footer">
        <button id="mf-btn"style={{float:"right", width:"20px"}} className="btn-success btn-lg" onClick={editSave} data-dismiss="modal">Save</button>
      </div>
      </div>
  </div>
</div>
   
</>
      );
}
export default Editintexp;