import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactMarkdown from 'react-markdown';
import moment from "moment";
// import Cookies from "universal-cookie";
import getUserByToken from "../Lib/getUserByToken";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import "@fire-ui/fire-ui/FireUI.min";
// import "@fire-ui/fire-ui/FireUI.min.css";

const Question = (params) => {
    const [question, setQuestion] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [firstRender, setFirstRender] = useState(true);
    const [inputAnswer, setInputAnswer] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("jwt")
        getUserByToken(token).then(result => {
            if(result) setUserInfo(result)
            if(firstRender) setFirstRender(false)
        })
    }, [firstRender])

    useEffect(() => {
        Axios.get(`http://localhost:2000/questions/get/${params.match.params.questionId}`)        
        .then(res => {
            if(res.data) setQuestion(res.data)
        })
        .catch(() => window.location = "/")
    }, [params.match.params.questionId])

    const postAnswer = e => {
        e.preventDefault();
        const token = localStorage.getItem("jwt")
        Axios.post('http://localhost:2000/questions/answer', {token, answer: inputAnswer, answerer: userInfo.email, question: question._id})
        .then(res => {
            console.log(res.data)
            Axios.get(`http://localhost:2000/questions/get/${params.match.params.questionId}`)        
            .then(res => {
                if(res.data) setQuestion(res.data)
            })
            .catch(() => window.location = "/")
            setInputAnswer('')
        })
    }

    return(
        <div>
            <Navbar/>
        <div className="container">
            <h1 style={{marginLeft:"100px",marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px'}}>Answer the Question</h1>
            <h3 className="question-title">{question?.title}</h3>
            <p style={{color:"grey"}}>Asked {moment(question?.createdAt).fromNow()}</p>
            <hr/>
            <blockquote className="question-body">
                <ReactMarkdown>{question?.body}</ReactMarkdown>
            </blockquote>
            <hr style={{borderBottom:'3px solid #4C2965'}}/>
            <h4 className="question-title">Answers</h4>
            {question?.answers.map(answer => {
                return <div className="my-2" key = {answer.answer}>
                {/* <h1 className="question-title">{answer.answerer.name} Answers</h1> */}
                <blockquote style={{backgroundColor:'white',border:'1px solid #7826CF',height:'50px',marginBottom:'20px'}} className="question-body">
                    <ReactMarkdown>{answer.answer}</ReactMarkdown>
                </blockquote>
                </div>
            })}
           
            {userInfo && !firstRender?
            <form className="my-5" onSubmit = {postAnswer}>
                <h1 className="question-title float-left" style={{textDecoration:"underline",backgroundColor:'white'}}>Answer this Question</h1>
                <textarea  style={{backgroundColor:"white",border:"3px inset #7826CF",borderRadius:"12px",paddingLeft:"5px",paddingRight:"5px",paddingTop:"20px",paddingBottom:'-20px',marginBottom:"40px"}} rows="8" className="form-control" placeholder = "Your answer (in markdown)" value ={inputAnswer} 
                onChange = {({target: {value}}) => setInputAnswer(value)}></textarea>
                <input type="submit" value="Post Your Answer" className="btn submit-answer-btn my-2" style={{backgroundColor:'#FBDAE9',color:'red'}} />
            </form>
            :<p><Link to = "/login">Login</Link> to post your answer.</p>}
        </div>
        <Footer/>
        </div>
    )
}

export default Question;