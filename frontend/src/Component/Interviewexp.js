import React, { useState , useEffect } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Card from '../Component/Card';
import Addintexp from '../Component/Addintexp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Interviewexp = ()=>{
    const [intexp,setIntexp]=useState([]);
    //useEffect to render changes automatically
  useEffect(()=>{
    getintexp();
  } );
  // getintexp();
  //fuction called to get all interview exp
  const getintexp = ()=>{  
    axios.get('http://localhost:2000/admin/getexperience').then((res)=>{
        setIntexp(res);
        // console.log(res._id);
        // console.log(intexp);
 
    }).catch((err)=>{
       console.error(err.response);
     })
  }
  // getintexp();
    return(
      <div>
      <Navbar />
        <div className="container my-3 py-5 text-center">
        <div className="row mb-5">
        <div className="col">
        <h1>Interview Experience</h1>
        <hr style={{borderBottom:'3px solid #4C2965'}}/>
        <div className="row">
        {
        intexp.data && intexp.data.map((singleintexp,index)=>{
          const idd=singleintexp.role;
          {/* console.log(idd); */}
          return (
        <div className="col">
        {/* <div className="col"> */}
    
        <Card  index={index} id={singleintexp._id} name={singleintexp.name} imgurl={singleintexp.imgurl} companyname={singleintexp.companyname} experience={singleintexp.experience}  />
        </div>
          );
    })
      }
      </div>
        </div>
        </div>
        <div className="row">
          <Addintexp/>
        </div>
        </div>
        <Footer/>
        </div>

    )
}
export default Interviewexp;