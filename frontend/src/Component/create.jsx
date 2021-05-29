import Axios from "axios";
import React, { useEffect, useState } from "react";
// import Cookies from "universal-cookie";
import getUserByToken from "../Lib/getUserByToken";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// import "@fire-ui/fire-ui/FireUI.min";
// import "@fire-ui/fire-ui/FireUI.min.css";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
         const token = localStorage.getItem("jwt")
        getUserByToken(token).then(result => {
            console.log(result);
            if(result) setUserInfo(result)
            else window.location = "/login"
            
        })
    }, [])

    const askQuestion = e => {
        e.preventDefault()

        const token = localStorage.getItem("jwt")
        Axios.post('http://localhost:2000/questions/create', {token, asker: userInfo.email, title, body})
        .then(res => window.location = `/question/${res.data.id}`)
    }

    return(
        <div>
            <Navbar/>
        <div className="container">
            <h1 style={{marginLeft:"100px",marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px'}}>Ask a your question</h1>
            <form className="box box-shdow theme-adjust" onSubmit = {askQuestion}>
                <div className="form-group">
                    <h5 className="form-label">Question Title</h5>
                    <p>Be specific and imagine you're asking a question to another person</p>
                    <hr style={{borderBottom:'3px solid #4C2965'}}/>
                    <input type="text" className="form-control" placeholder = "e.g. Is there an R function for finding the index of an element in a vector?"
                    value = {title} onChange = {({target: {value}}) => setTitle(value)} style={{border:'2px solid #7826CF'}} />
                </div>
                <div className="form-group my-2">
                    <p className="form-label">Body</p>
                    <p>Include all the information someone would need to answer your question (in markdown):</p>
                    <textarea style={{backgroundColor:"white",border:"3px inset #7826CF",borderRadius:"12px",paddingLeft:"5px",paddingRight:"5px",paddingTop:"20px",paddingBottom:'-20px',marginBottom:"40px"}}className="form-control" rows="10" value = {body} onChange = {({target: {value}}) => setBody(value)} placeholder="Enter Question">
                    <i className="fas fa-comments-alt" style={{backgroundColor:'red'}}></i>

                    </textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn submit-question-btn form-control" style={{backgroundColor:'green',color:'white'}}/>
                </div>
            </form>
        </div>
        <Footer/>
        </div>
    )
}

export default Create;