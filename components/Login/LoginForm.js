import { Grid, Button, Input,Box,TextField, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Joi from 'joi'
import Navbar from "../Header/Navbar"
import { makeStyles } from '@mui/styles'
import Leftbar from '../Header/Leftbar'




const useStyles =makeStyles((theme)=>({
  textField:{ 
      marginTop:theme.spacing(5),
     
    
  }, 
  btn:{
    marginTop:theme.spacing(2),
  }
}))

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  phone:Joi.string().length(11).pattern(/^[0-9]+$/),  
  city:Joi.string().max(15),
  access_token: [
    Joi.string(),
    Joi.number()
  ],

  hireDate: Joi.number()
    .integer()
    .min(1900)
    .max(2013),
  
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repassword: Joi.ref('password'),

})


const LoginForm = () => {
  const classes = useStyles();
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    hireDate: "",
    password: "",
    repassword: "",
  });
  console.log(userForm);
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    try {
      const val = await schema.validateAsync(userForm);
      console.log(val);
    }
    catch (ex) {
      console.log(ex);
    }
  }
  return (
     <>
      <Navbar/>
      <Grid container justifyContent="center" className={classes.textField}>
  <Grid item >
    <ListItem>
    <TextField
          style ={{width: '100%'}}
          id="outlined-password-input"
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Input Your Name"   
        />
    </ListItem>
    <ListItem>
        <TextField
          style ={{width: '100%'}}
          id="outlined-password-input"
          label="email"
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Input Your email"    
        />
    </ListItem>
    <ListItem>
         <TextField
          style ={{width: '100%'}}
          id="outlined-password-input"
          label="phone"
          type="text"
          name="phone"
          onChange={handleChange}
          placeholder="Input Your phone number"       
        />  
    </ListItem>
  </Grid>
 <Grid item >
    <ListItem>
    <TextField
          style ={{width: '100%'}}
          id="outlined-password-input"
          label="Hire-Date"
          type="text"
          name="hireDate"
          onChange={handleChange}
          placeholder="Input Your Hire-Date!"
          
        />  
        </ListItem>
        <ListItem>
         <TextField
          id="outlined-password-input"
          label="password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Input Your password"
          autoComplete="current-password"
        />  
        </ListItem>
        <ListItem>
         <TextField
          id="outlined-password-input"
          label="Re-Type Password"
          type="password"
          name="repassword"
          onChange={handleChange}
          placeholder="Re-type Your Password!"
          autoComplete="current-password"
        />  
    </ListItem>
    </Grid>
  </Grid>

    
    <Grid container justifyContent="center"> 
      <Grid item className={classes.btn}>
        <Button variant="outlined" onClick={handleClick}>Submit</Button>
      </Grid>
      </Grid>
    </>

  )
}

export default LoginForm
