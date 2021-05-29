import React,{Component} from 'react';
import axios from "axios";

 export default class EditCom extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name:"",
        desc:"",
        image:"",
        nos:"",
        date:"",   
      };
    }
  
    componentDidMount() {
       const id=this.props.match.params.id;
      axios.get(`http://localhost:2000/company/${id}`)
        .then((res)=> {
          if(res.data.success){
          this.setState({
            name: res.data.post.name,
            desc: res.data.post.desc,
            image:res.data.post.image,
            nos:res.data.post.nos,
            date:res.data.post.date,
          });
        }
      });
    }
    handleInputChange=(e)=>{
      const{name,value}=e.target;
      this.setState({
        ...this.state,
        [name]:value,
      });
    };
    // validate =(name)=>{
    //   const errors=setErrors(name);
    //   this.setState({errors:errors});
    //   return Object.values(errors).every((err)=>err ==="")
    // };
  
  
    onSubmit=(e)=> {
      e.preventDefault()
      const id=this.props.match.params.id;
      const {name,desc,image,date,nos}=this.state;
        const companyObject={
          name:name,
          desc:desc,
          image:image,
          nos:nos,
          date:date,
        };
     
  
      axios.put(`http://localhost:2000/company/update/${id}` , companyObject)
        .then((res) => {
          if(res.data.success){
            alert("Company Details Updated!")
          }
        });
    }
    render() {
      return (
      <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                          <label>Company</label>
                          <input type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" />
                      </div>
                      <div className="form-group">
                          <label>Description</label>
                          <input as="textarea" row={3} value={this.state.desc} onChange={this.handleInputChange} className="form-control" />
                      </div>
                      <div className="form-group">
                          <label>Image URL</label>
                          <input type="textarea" row={3} value={this.state.image} onChange={this.handleInputChange} className="form-control" />
                      </div>
                      <div className="form-group">
                          <label>Tentative Dates</label>
                          <input type="text" value={this.state.date} onChange={this.handleInputChange} className="form-control" />
                      </div>
                      <div className="form-group">
                          <label>No. of Students Selected Per Year</label>
                          <input type="text" value={this.state.nos} onChange={this.handleInputChange} className="form-control" />
                      </div>
                      <div className="form-group">
                          <button type="submit" className="btn btn-success btn-block" onClick={this.onSubmit}> Save</button>
                      </div>
                  </form>
     
                  
        );
    }
  }

