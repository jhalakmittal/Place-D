import React, { useState } from "react";
import "./Dashboard2.css";
// import Company from "./Company";
import Ancment from "./Ancment";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
const Dashboard2=()=>{   
 const history=useHistory();
    return(   
    <>  
    <Navbar/>
    <Ancment/>
     {/* <div className="container">{window.history.replaceState(null,"title","/dashboard/pdashboard")}</div> */}
     
     <div className="container" style={{marginBottom:"100px"}}></div>
     <div >
    <button onClick={()=>history.push("/user/pdashboard/questions")} id="btn--medium" style={{backgroundColor : " #f8b5d2",color:"black"}}>Company Questions</button>
    <button onClick={()=>history.push("/admin/getexperience")} id="btn--medium" style={{backgroundColor : " #f8b5d2",color:"black"}}>Interview Experience</button>
    <br/>
    </div>
    <div>
    <button onClick={()=>{history.push("/user/pdashboard/company")}} id="btn--medium" style={{backgroundColor : " #f8b5d2",color:"black"}}>Company Details</button>
    </div>
    </>
    )
};
export default Dashboard2;