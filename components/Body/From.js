import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const From = () => {
    const [user , setUser] = useState([
        {
            name:"",
            email:"",
            address:""
            
        }
    ]);
   
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("USer", user)
        setUser(user)
       axios.post('https://jsonplaceholder.typicode.com/users',{user})
       .then(res=>{
           console.log(res);
           console.log(res.data);

       })
    
    }
    const handleChange=(e)=>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    console.log("User",user)
    return (
        <div>
            
               <Input type="text" name="name"  variant="outlined"  onChange={handleChange} placeholder="Input Your Name" />
               <Input type="text" name="email"  variant="outlined"  onChange={handleChange} placeholder="Input Your Name" />
               <Input type="text" name="address"  variant="outlined"  onChange={handleChange} placeholder="Input Your Name" />
               {/* <Input type="text" name="email" variant="outlined"  onChange={handleChange} placeholder="Input Your Email" />
               <Input type="passeord" name="passeord" variant="outlined"  onChange={handleChange} placeholder="Input Your passeord" />
               <Input type="text" name="phone" variant="outlined"  onChange={handleChange} placeholder="Input Your phone" /> */}
               <Button variant="contained"  onClick={handleSubmit}>Submit</Button>             
           
        </div>
    )
}

export default From
