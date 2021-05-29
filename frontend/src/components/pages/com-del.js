import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./admn-add.css";
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    Button:{
        backgroundColor:"green"
    }
}));

export default class ComDel extends Component {
    constructor(props) {
        super(props);
        this.state = { company: [] };
        this.deleteCompany = this.deleteCompany.bind(this);
    }
    componentDidMount() {
		axios.get('http://localhost:8000/company')
			.then(res => {
				this.setState({ company: res.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}

    deleteCompany() {
        axios.delete(`http://localhost:8000/company/delete/`+this.props.obj._id)
            .then((res) => {
                console.log('Company successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
  render(){
    return (
        <div>
            <button onClick={this.deleteCompany} size="sm" className="btn-danger">
                <div>
               <DeleteIcon/>
                 </div>
            </button>
        </div>
    )};
}