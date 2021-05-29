import React, { Component } from "react";
import axios from "axios";
import "./Landing.css";
import Navbar from "../components/Navbar";

class Cquestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:2000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.posts,
        });
        console.log("post: ", this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:2000/posts/delete/${id}`).then((res) => {
      alert(this.state.Name + "is deleted successully");
      this.getPosts();
    });
  };

  filterContent(posts, SearchItem) {
    const result = posts.filter((posts) =>
      posts.Name.toLowerCase().includes(SearchItem)
    );
    this.setState({ posts: result });
  }

  handleTextSearch = (e) => {
    const SearchItem = e.currentTarget.value;
    axios.get("http://localhost:2000/posts").then((res) => {
      if (res.data.success) {
        this.filterContent(res.data.posts, SearchItem);
      }
    });
  };

  // useEffect()=>{
  //   getPosts()
  //   const interval = setInterval(()=>{
  //     getPosts()
  //   }, 10000);

  //   return()=> clearInterval(interval);
  // };

  render() {
    return (
      <div>
      <Navbar/>
      <div className="main">
      
        {/* <br />
        <br /> */}
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>Company Questions</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="SearchItem"
              onChange={this.handleTextSearch}
              style={{backgroundColor:"#FDECF3"}}
            ></input>
          </div>
        </div>
        <div className="container align-content-center" id="scrollable">
          <table id="cq-table" className="table" style={{width:"1000px",align:"center",backgroundColor:"#EBE0F5",marginRight:"80%"}}>
            <thead>
              <tr className="header" align="center">
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post, index) => (
                <tr align="center" className="row-click">
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a id="cname" href={`/posts/${post._id}`}>{post.Name}</a>
                  </td>
                  <td>
                    <a
                      className="btn btn-primary btn-sm"
                      href={`/edit/${post._id}`}
                      style={{backgroundColor:"#CBA9EF"}}
                    >
                      <i className="fas fa-edit"></i>&nbsp;
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-dark btn-sm"
                      href="#"
                      onClick={() => this.onDelete(post._id)}
                      style={{backgroundColor:"#DC5692"}}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-info btn-sm"
                      href={`/posts/${post._id}`}
                      style={{backgroundColor:"blueviolet"}}
                    >
                      <i className="far fa-eye"></i>&nbsp;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <button className="btn btn-success" style={{backgroundColor:"green"}}>
          <a href="/add">Add New Company</a>
        </button>
      </div>
      </div>
    );
  }
}

export default Cquestion;
