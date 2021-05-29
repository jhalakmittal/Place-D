import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:2000/posts/detail/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post,
                });
                console.log("post : ", this.state.post);
            }
        });
    }
    render() {
        const { Name, description  } = this.state.post;
        return (
            <div>
                <Navbar/>
                <h2 align="center" style={{marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px'}}>{Name}</h2>
                <hr style={{borderBottom:'3px solid #4C2965'}}/>
                <dl className="row">
                    <dt className="col-sm-3">Question list : </dt>
                    <div className="container" style={{backgroundColor:"white",border:"3px inset #7826CF",borderRadius:"12px",paddingLeft:"25px",paddingTop:"20px",paddingBottom:'-20px',marginBottom:"40px",width:"890px"}}><dd className="col-sm-12" dangerouslySetInnerHTML= {{__html:description}}></dd></div>
                </dl>
                <Footer/>
            </div>
        );
    }
}

export default DetailPage;
