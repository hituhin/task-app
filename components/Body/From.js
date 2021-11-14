import { Button, FormControl, FormGroup, FormHelperText, FormLabel, Input, InputLabel } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const From = () => {
    const { register, handleSubmit } = useForm();

    const handleRegistration = (data) => console.log(data);
    // const [user , setUser] = useState([
    //     {
    //         name:"",
    //         email:"",
    //         address:""
            
    //     }
    // ]);
   
    // const handleSubmit =(event)=>{
    //     event.preventDefault();
    //     console.log("USer", user)
    //     setUser(user)
    //    axios.post('https://jsonplaceholder.typicode.com/users',{user})
    //    .then(res=>{
    //        console.log(res);
    //        console.log(res.data);

    //    })
    
    // }
    // const handleChange=(e)=>{
    //     setUser({...user,[e.target.name] : e.target.value});
    // }

    // console.log("User",user)
     return (
        <div>
            
     <FormControl onSubmit={handleSubmit(handleRegistration)}>
      <FormGroup>
        <FormLabel>Name</FormLabel>
        <Input name="name" innerRef={register} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" innerRef={register} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" innerRef={register} />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </FormControl> 
           
         </div>
      
     )


}

export default From
