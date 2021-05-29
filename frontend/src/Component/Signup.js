import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { Avatar, Grid, Paper, TextField,  Button, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Formik , Field , Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const styles = ({
    main: { background: '#333' }})

const Signup = (props) => {
    var [tes,setTes]=useState('');
    const paperStyle = { padding: 20,border:"2px solid #7826cf", height: '90vh', width: 300, margin: "20px auto", fontSize: '25px' }
    const avatarStyle = { backgroundColor: '#A06EC4', margin: "10px" }
    const headerStyle = { margin: "5px" }
    const btnstyle = { margin: "8px 0" }
    
    const initialValues={
        Username : '',
        Course : '',
        year : '' ,
        Email : '',
        password : '' ,
        ConfirmPassword : '',
    
    }
    const validationSchema = Yup.object().shape({
        Username:Yup.string().min(3,"its too Short").required("Required"),
        Email:Yup.string().email("Enter valid email"),
        password:Yup.string().min(8,"password minimum length should be 8"),
        ConfirmPassword : Yup.string().oneOf([Yup.ref('password')],"password not matched").required("Required")

    })
    // console.log(initialValues);
    const history=useHistory();
    const onSubmit=(values,props)=>{
       
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
          
    

        },2000)
        console.log(values);
        axios.post('http://localhost:2000/user/signup',values)
        .then(()=>{console.log('User created')
        alert("signup successfully")
        history.push("/login")
        //redirect to other page as signup
        // return <Redirect to='/admin/getexperience'/>
    }
        )
        .catch(err => {console.error(err)
            // setTes(err.response)
            }
            );
        

    }
  return(
        <Grid  >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon></Avatar>
                    <div>
                     
                    { tes!==''?(
                    <div className="alert alert-danger" role="alert" style={{backgroundColor : '#F08080',color:'red'}}>{tes}</div>):(<div></div>)}
                    </div>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">Please fill this form to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}>{(props)=>(
                    <Form >
                    <Field as={TextField} label='Username' name="Username" type="text" placeholder='Enter user name' helperText={<ErrorMessage name="Username"/>} fullWidth required />
                <Field as={TextField}  label='Course' name="Course" type="text" placeholder='Enter course' fullWidth required />
                <Field as={TextField} label='year' name="year" type="text" placeholder='Enter year of course' fullWidth required />
                <Field as={TextField} label='Email' name="Email" type="email" placeholder='Enter email' helperText={<ErrorMessage name="Email"/>}  fullWidth required />
                <Field as={TextField} label='password'  name="password" type="password" placeholder='Enter password'  helperText={<ErrorMessage name="password"/>} fullWidth required />
                <Field as={TextField} label='ConfirmPassword'  name="ConfirmPassword" type="password" placeholder='confirm password' helperText={<ErrorMessage name="ConfirmPassword"/>} fullWidth required />
                <Button type="submit" variant="contained" disabled={props.isSubmitting} color="primary" fullWidth style={btnstyle}>Sign up</Button>
                </Form>
                )}</Formik>
                
               

            </Paper>
        </Grid>       
   )

 }

export default Signup;