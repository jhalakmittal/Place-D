import React, { useEffect, useState } from 'react';
// import Cookies from 'universal-cookie';
import getUserByToken from "../Lib/getUserByToken"
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "./doubtportal.css"
// import "@fire-ui/fire-ui/FireUI.min";
// import "@fire-ui/fire-ui/FireUI.min.css";

const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [firstRender, setFirstRender] = useState(true);
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt")
        getUserByToken(token).then(result => {
            if(result) setUserInfo(result)
            if(firstRender) setFirstRender(false)
        })
    }, [firstRender])

    useEffect(() =>{
        axios.get('http://localhost:2000/questions/get/all')
        .then(res => setQuestions(res.data))
    })

    useEffect(() => console.log(userInfo), [userInfo])

    return(
        <div>
            <Navbar/>
        <div className="container">
            {!userInfo && !firstRender?
            <div className="mt-5 intro-pg pt-5">
                <br/>
                <br/>
                <br/>
                
                {/* <Link to = "/login" className="btn btn-dark mr-2">Log in</Link> */}
                {/* <Link to = "/register" className="btn btn-light ml-2">Sign up</Link> */}
            </div>
            :<div>
                <h1 style={{marginLeft:"100px",marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px'}} className="index-title">Question and Answers Forum</h1> &nbsp;
                <h6 className="intro-title" style={{color:"grey", marginTop:'-50px'}}>We &lt;3 people who code</h6>
                <p className="mt-3 intro-text" style={{color:"grey"}}>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p>
                <hr style={{borderBottom:'3px solid #4C2965'}}/>
                <div>
                
                <table class="table float-sm-left"  style={{width:'250px',marginLeft:'-50px'}}>
  <thead>
    <tr>
      <th scope="col">Help?</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row"><a id="dpa" href="https://www.cplusplus.com/doc/tutorial/">C++</a></th>

    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://getbootstrap.com/">Bootstrap</a></th>
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://www.learn-c.org/">C</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://www.python.org/">Python</a></th>
    
      
    </tr>
    
    <tr>
      <th scope="row"><a id="dpa" href="https://www.php.net/">PHP</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://docs.oracle.com/javase/tutorial/">JAVA</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://html.com/">HTML</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://www.javascript.com/">JAVASCRIPT</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://www.mongodb.com/">MongoDB</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://reactjs.org/">ReactJS</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://nodejs.org/en/">NodeJS</a></th>
    
      
    </tr>
    <tr>
      <th scope="row"><a id="dpa" href="https://expressjs.com/">ExpressJS</a></th>
    
      
    </tr>
  </tbody>
</table>
<Link to = "/create" className="btn-success btn-block" type="success"  style={{width:'400px', padding:'9px', height:"60px", fontSize:'25px',marginBottom:"40px",textDecoration:'none',backgroundColor:"#EBE0F5",color:"#7826CF",fontWeight:"bolder",marginLeft:'450px',border:'3px inset #7826CF',borderRadius:'8px'}}> Ask question</Link>
                </div>
                {questions?.map(question => {
                    return(
                        <div className="container" style={{backgroundColor:"white",border:"3px inset #7826CF",borderRadius:"12px",marginLeft:"290px",width:"800px",paddingLeft:"5px",paddingRight:"5px",paddingTop:"20px",paddingBottom:'-20px',marginBottom:"40px"}}>
                        <div key = {question._id} className="box theme-reverse">
                            <div>
                        <h3>{question.title}</h3>
                                <p style={{fontSize:'18px'}}>{question.body}</p>&nbsp;
                                &nbsp;
                                <Link to = {`/question/${question._id}`} style={{textDecoration:"none"}}>
                                <button className="btn-success btn-sm">Answer</button>
                            </Link>
                            </div>
                                <p className="color-adjust"style={{color:"grey",fontSize:"13px",textAlign:"right"}}>Asked {moment(question?.createdAt).fromNow()} by {question?.asker?.username}</p>
                            
                        </div>
                        </div>
                    )
                })}
            </div>}
        </div>
        <Footer/>
        </div>
    )
}

export default Home;