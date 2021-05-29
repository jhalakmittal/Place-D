// import React, { Component } from 'react';
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./company.css";
// // import ComDel from "./com-del";
// // import ComEdit from "./com-edit";
// import { Link } from 'react-router-dom';
// import Edit from "@material-ui/icons/Edit"
// import { Button } from '@material-ui/core';
// class Cards extends Component {

//     render() {
//         return (
            
//                 <div >
//                 <div className="image">
//                 <img src={this.props.obj.image} alt="..."/>
//                 <div className="legend" style={{opacity:"0.8",width:"39%",marginLeft:"5%",height:"auto"}}>
//                 <h3 style={{color:"yellow",opacity:"1"}}>{this.props.obj.name}</h3>
//                 <p >{this.props.obj.Desc}<br/>
//                 Tentative Date:{this.props.obj.date}<br/>
//                 No. of Students Selected:{this.props.obj.nos} approx.
//                 {this.props.obj._id}
//                 <div className="float-inline">
//                     <a href={`/user/company/edit/${this.props.obj._id}`}>
//                     <Button>
//                     <Edit/>
//                     </Button>
//                     </a>
//                 {/* <Link className="edit-link" to={"" + this.props.obj._id}>
//                         <ComEdit/>
//                     </Link>
//                     <ComDel/> */}
//                 </div>
//                 </p>
//                 </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Cards;