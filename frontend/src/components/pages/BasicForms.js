import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './BasicForms.css';
import { useState, useEffect, Component } from 'react';
import axios from 'axios';
// import { setErrors } from '../../Common/setError';
import { Button,Modal,Form} from 'react-bootstrap';




export default class BasicForms extends Component {
  
  constructor(props) {
    super(props)
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeBatch = this.onChangeBatch.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangehedu=this.onChangehedu.bind(this);
    this.onChangesedu=this.onChangesedu.bind(this);
    this.onChangecurrYear=this.onChangecurrYear.bind(this);
    this.onChangesgpa=this.onChangesgpa.bind(this);
    this.onChangecgpa=this.onChangecgpa.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      file:"",
      imgurl:"",
      email: "",
      fname: "",
      lname: "",
      course: "",
      batch: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      hedu:"",
      sedu:"",
      currYear:"",
      sgpa:"",
      cgpa:"",
      selectedFile: "",
      errors: {}
    };
  }
  onChangeImg(e) {
    this.setState({imgurl: e.target.value })
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeFname(e) {
    this.setState({ fname: e.target.value })
  }
  onChangeLname(e) {
    this.setState({ lname: e.target.value })
  }
  onChangeCourse(e) {
    this.setState({ course: e.target.value })
  }
  onChangeBatch(e) {
    this.setState({ batch: e.target.value })
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value })
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value })
  }
  onChangeState(e) {
    this.setState({ state: e.target.value })
  }
  onChangeZip(e) {
    this.setState({ zip: e.target.value })
  }
  onChangehedu(e) {
    this.setState({ hedu: e.target.value })
  }
  onChangesedu(e) {
    this.setState({ sedu: e.target.value })
  }
  onChangecurrYear(e) {
    this.setState({ currYear: e.target.value })
  }
  onChangesgpa(e) {
    this.setState({ sgpa: e.target.value })
  }
  onChangecgpa(e) {
    this.setState({ cgpa: e.target.value })
  }
  onChangeImage(e) {
    this.setState({ imgurl: e.target.value })
  }

 
  
 
  
    

  onSubmit(e) {
    console.log('user saved');
    e.preventDefault();

    const registered = {
      imgurl:this.state.imgurl,
      email: this.state.email,
      password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname,
      course: this.state.course,
      batch: this.state.batch,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      hedu:this.state.hedu,
      sedu:this.state.sedu,
      currYear:this.state.currYear,
      sgpa:this.state.sgpa,
      cgpa:this.state.cgpa
      
    }
    axios.post('http://localhost:2000/admin/addprofile/signup', registered)
      .then(res => {console.log(res.data);
      alert("Profile created");})



  }
  // componentDidMount(){
  //   const id=this.props.match.params.id;
  //   axios.get(`http://localhost:2000/admin/updateprofile/${id}`).then((res)=>{
  //     if(res.data.success){
  //       this.setState({
  //         fname:res.data.post.fname,
  //         lname:res.data.post.lname,
  //         course:res.data.post.course,
  //         batch:res.data.post.batch,
  //         address:res.data.post.address,
  //         city:res.data.post.city,
  //         state:res.data.post.state,
  //         zip:res.data.post.zip
  //       });
  //     }
  //   });
  // }

  // handleInputChange(e) {
  //   const {name,value}=e.target;

  //   this.setState({
  //     ...this.state,
  //     [name]: value
  //   });
  // }
  // validate=(email,fname,course,batch,address,city,state,zip)=>{
  //   const errors=setErrors(email,fname,course,batch,address,city,state,zip);
  //   this.setState({errors:errors});
  //   return Object.values(errors).every((err)=>err==="");
  // };
  onChange(e){
    let files=e.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
  }

  onUpdate(e) {
    console.log('user updated');
    e.preventDefault();
    const email1=this.props.match.params.email;
    const {imgurl,email,fname,lname,course,batch,address,city,state,zip,hedu,sedu,currYear,sgpa,cgpa}=this.state;
    if(this.validate(imgurl,email,fname,lname,course,batch,address,city,state,zip,hedu,sedu,currYear,sgpa,cgpa)){
      const userUpdated={
        imgurl:imgurl,
        email:email1,
        fname:fname,
        lname:lname,
        course:course,
        batch:batch,
        address:address,
        city:city,
        state:state,
        zip:zip,
        hedu:hedu,
        sedu:sedu,
        currYear:currYear,
        sgpa:sgpa,
        cgpa:cgpa
      };
      console.log('user updated');
      axios.put(`http://localhost:2000/admin/updateprofile/${email1}`,userUpdated).then((res)=>{
        if(res.data.success){
          alert('updated');
        }
      });
    }
  }

  render() {
    return (
      <>


        <Navbar />

        <br />
        <div className="card mb-3 mx-auto my-auto" style={{ width: '90%' }}>
        <h1 className="card-title mb-3" style={{ color: '#7529b3',backgroundColor:'#d5c4e4',height:"70px",width:"100%",paddingTop:"5px"}}>Student Profile</h1>
          <div className="row no-gutters">
            <div id="bf-img" className="col-md-4 ">
              <img id="bf-img" src={this.state.imgurl} className="card-img" alt="student's image" style={{width:"300px",height:"300px"}}/>
              <label style={{marginLeft:"10px"}} htmlFor="inputEmail4">Image url</label>
                      <input type="url"
                        onChange={this.onChangeImage} value={this.state.imgurl}
                        className="form-control" name='email' id="inputEmail4" style={{width:'300px'}} />
             
                    
                   
              <div className="card-body">
                <h1 id="basicheading" style={{ color: '#7529b3'}} className='text-capitalize'>{this.state.fname} {this.state.lname}</h1>
                <p className="title text-uppercase" style={{fontWeight:'bolder',marginTop:'-40px'}}>{this.state.course},{this.state.batch}<br/>
                {this.state.cgpa}
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
             

                <form onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label style={{marginLeft:"210px"}} htmlFor="inputEmail4">Email</label>
                      <input type="email"
                        onChange={this.onChangeEmail} value={this.state.email}
                        className="form-control" name='email' id="inputEmail4" style={{width:'700px'}} />
                    </div>
                
                  </div>
                  <div>
                  <div className="form-row">
                    <div className="form-group col-md-6" >
                      <label htmlFor="inputName">First Name</label>
                      <input type="text" className="form-control" id="inputName" name="fname" placeholder=""
                        onChange={this.onChangeFname} value={this.state.fname}
                        required={true} />
                    </div>&nbsp;&nbsp;
                    <div className="form-group col-md-5">
                      <label htmlFor="inputName">Last Name</label>
                      <input type="text" className="form-control" id="inputName" name="lname" placeholder=""
                        onChange={this.onChangeLname} value={this.state.lname}
                        required={true} />
                    </div>
                  </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCourse">Course</label>
                      <input type="text" className="form-control" id="inputCourse" name="course"
                        onChange={this.onChangeCourse} value={this.state.course}

                        required={true} />
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="inputBatch">Batch</label>
                      <input type="text" className="form-control" id="inputBatch" name="batch" placeholder=""
                        onChange={this.onChangeBatch} value={this.state.batch}

                        required={true} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">Home Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        onChange={this.onChangeCity} value={this.state.city}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="inputState">State</label>
                      <input type="text" className="form-control" name='state' id="inputState"
                        onChange={this.onChangeState} value={this.state.state}

                      />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input type="text" className="form-control" name='zip' id="inputZip"
                        onChange={this.onChangeZip} value={this.state.zip}

                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCourse">Higher Education</label>
                      <input type="text" className="form-control" id="inputCourse" name="course" 
                        onChange={this.onChangehedu} value={this.state.hedu}

                        required={true} />
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="inputBatch">Secondary Education</label>
                      <input type="text" className="form-control" id="inputBatch" name="batch" placeholder=""
                        onChange={this.onChangesedu} value={this.state.sedu}

                        required={true} />
                        </div>
                        </div>
                        <div className="form-row">
                    <div className="form-group col-md-5">
                      <label htmlFor="inputCourse">Current Year</label>
                      <input type="text" className="form-control" id="inputCourse" name="course" 
                        onChange={this.onChangecurrYear} value={this.state.currYear}

                        required={true} />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="inputBatch">SGPA</label>
                      <input type="number" className="form-control" id="inputBatch" name="batch" placeholder=""
                        onChange={this.onChangesgpa} value={this.state.sgpa}

                        required={true} />
                        </div>
                        <div className="form-group col-md-3">
                      <label htmlFor="inputBatch">CGPA</label>
                      <input type="number" className="form-control" id="inputBatch" name="batch" placeholder=""
                        onChange={this.onChangecgpa} value={this.state.cgpa}

                        required={true} />
                    </div>
                  </div>
                  
                  <div className='btns'>
                    <div className='btn col-md-8 mx-auto'>
                      <button id="bf-btn" type="submit" value='Submit' onSubmit={this.onSubmit} style={{ marginLeft: '-300px' }}>Save</button>
                    </div>
                    <div className='btn col-md-6'>

                      <input type="file" name="file" onChange={(e)=>this.onChange(e)} style={{width:"750px"}}/>
                    </div>
                    {/* <div className='btn col-md-6'>
                      <button id="bf-btn" type="submit"  onSubmit={this.onUpdate} style={{ marginLeft: '-150px',width: '200px' }}>Add Resume</button>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />

      </>
    )
  };
}