import React, { useState , useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import axios from 'axios';
const Addintexp = () =>{
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
      }
      const editsave=  (event) =>{ 
        // console.log(props.id);
        console.log("in edit save");

      /*  const intexpobj = {
           editname,
           editimgurl,
           editcompany,
           editexperience
        }*/
        fetch('http://localhost:2000/admin/addexperience',{
          method: "post",
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
        // setTes(err.response.data.message)
        });
        editinp.name="";
        editinp.imgurl="";
        editinp.companyname="";
        editinp.experience="";
        
       
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
           <button type="button" style={{  backgroundColor:"#A06EC4"}} class="btn  pull-right " data-toggle="modal" data-target="#exampleModal">
           <LibraryAddIcon style={{  color :"white" , fontSize: 40 }}/>
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
          <div class="form-group float-left " style={{marginLeft:"-100px"}}>
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
        <button type="button"  style={{ width:"200px", color : "white" , backgroundColor:"#A06EC4"}} onClick={editsave} data-dismiss="modal"  >Save</button>

      </div>
      </div>
  </div>
</div>
   
</>
      );
}
export default Addintexp;