import React, { Component } from "react";
import axios from "axios";
import { setErrors } from '../conmmon/setErrors';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from "../components/Navbar";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
            Name: "",
            description: "",
            errors:{}
        }
  }

 handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (Name, description) => {
    const errors = setErrors(Name, description);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { Name, description } = this.state;
    if (this.validate(Name, description)) {
      const data = {
        Name: Name,
        description: description,
      };
      console.log(data);
      axios.post("http://localhost:2000/posts/", data).then((res) => {
        if (res.data.success) {
          alert("New Company added successfully");
          this.setState({ Name: "", description: "" });
        }
      });
    }
  };

  render(){
      
    return (
      <div>
        <Navbar/>
        <div className="col-md-10 mt-3 mmx-auto">
          <h1 className="h3 mb-3 font-weight-normal" style={{marginLeft:"100px",marginTop:"30px",backgroundColor:'#EBE0F5', border:'2px solid #4C2965', borderRadius:'12px',paddingBottom:'9px'}}>Add a New Company</h1>
          <hr style={{borderBottom:'3px solid #4C2965'}}/>
          <form className="needs-validaton" noValidate>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Amazon"
                value={this.state.Name}
                onChange={this.handleInputChange}
              />
              {this.state.errors.Name && (
                <div className="text-danger">{this.state.errors.Name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Question</label>
              <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.description}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({description: data});
                    } }
                    
                />
                {this.state.errors.description && (
                <div className="text-danger">{this.state.errors.description}</div>
              )}
            </div>
            
            
            <button
              className="btn btn-success"
              type="submit"
              onClick={this.onSubmit}
              style={{backgroundColor:"green"}}
            >
              <i className="far fa-check-square"></i>
              &nbsp;Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
