import React, { useState } from "react";
import "./Dashboard.css";
import Dashboard2 from "./Dashboard2";
import Ancment from "./Ancment";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Dboard(){
  const history =useHistory();
  // const [islink,setlink]=useState(true);
  // if(!islink){
  //   return (
      
  //   )
  // } 
  return (
    <>
    <Navbar/>
    <div >
      <Ancment/>
      <nav>
        <div className="container float-left" style={{marginTop:"50px"}}>
             <button onClick={()=>history.push("/user/pdashboard")} id="btn--prime" style={{backgroundColor : " #f8b5d2",color:"black"}}>
                Placement Dashboard
               </button>
            <br/>
            <br/>
            <br/>
            
            <button onClick={()=>history.push("/home")} id="btn--prime" style={{backgroundColor : " #f8b5d2",color:"black",marginBottom:"120px"}}>
                Doubt Resolution
               </button>
               <br/>
               <br/>
               <br/>
        </div>
      </nav>
      </div>
    </>
  );
}
export default Dboard;