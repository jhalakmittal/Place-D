import React,{Component} from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import ComAdd from "./com-add";
import Navbar from "../components/Navbar";
import Edit from "@material-ui/icons/Edit"
import "./company.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { Card } from "@material-ui/core";
export default class Company extends Component {
	constructor(props) {
		super(props);
		this.state = { company: [] };
		// this.deleteStudent = this.deleteStudent.bind(this)
	}
  
	componentDidMount() {
		axios.get('http://localhost:2000/company')
			.then(res => {
				this.setState({ company: res.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	onDelete = (id) => {
		fetch(`http://localhost:2000/company/delete/${id}`,{
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
		alert("Deleted!!")
		this.componentDidMount();
		
		// axios.delete(`http://localhost:2000/company/delete/${id}`).then((res) => {
		//   alert(this.state.name + "is deleted successully");
		  
		// });
	  };
  
		render() {
			return (
				<div>
				<Navbar/>
				<div className="wrapper-users bg-black">
					<div className="center justify-content-center">
            <div class="carousel-wrapper justify-content-center align-middle bg-aqua">
				<h2 style={{marginLeft:"5px",marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px',fontWeight:'bolder'}}>Company Details</h2>
				<hr style={{borderBottom:'3px solid #4C2965'}}/>
				<br/>
				<br/>
			<Card id="com" style={{borderColor:"deeppink",borderWidth:"7px"}}>
			<Carousel  id="carousel" activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} showThumbs={false} >
			{this.state.company.map((post, index) => (
            
				
			<div >
	
                <div className="image">
                <img src={post.img} alt="..."/>
                <div className="legend" style={{opacity:"0.8",width:"39%",marginLeft:"5%",height:"auto"}}>
                <h3 style={{color:"yellow",opacity:"1"}}>{post.Name}</h3>
                <p >{post.Desc}<br/>
                Tentative Date:{post.Date}<br/>
                No. of Students Selected:{post.nos} approx.
                <div className="float-inline">
                    <a href={`/user/company/edit/${post._id}`}>
                    <button className="btn-success">
                    <Edit/>
                    </button>
                    </a>
					&nbsp;
					&nbsp;
					&nbsp;
                	<button
                      onClick={() => this.onDelete(post._id)}
                      className="btn-danger"
                    >
						<DeleteIcon/>
                    </button>
                </div>
                </p>
                </div>
                </div>
		
            </div>
			
					
			))}
			</Carousel>
			</Card>
			<div>
				<br/>
			<a href={`/user/company/add`}>
					<button className="btn-success btn-lg">
						ADD NEW COMPANY
					</button>
			</a>
		
			</div>
				</div>		
				</div>
				</div>
				</div>
    )};
}