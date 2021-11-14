import { Grid, InputBase, TableCell, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import ListCart from '../components/ListandSrarch/ListCart'
import SearchIcon from '@mui/icons-material/Search'


const useStyles = makeStyles((theme)=>({
    container:{
        display:"flex",
        [theme.breakpoints.up("sm")]:{
            display:"flex",
            
        }
    
    }
}))

const Profile = () => {

    const classes = useStyles();
    const [user , setUser] = useState([]);
    const [sProfile , setSprofile] = useState("");
    
       
    useEffect((id)=>{
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(res=>setUser(res.data))
         .catch(err=>console.log(err))
        
    },[]);
      
    return (
        <Fragment className={classes.container}>
            <Grid container direction="column" >
                <Grid item >
                <div >
               < SearchIcon/>
               <InputBase placeholder="Search..." 
                  onChange={(event)=>{
                    setSprofile(event.target.value); 
                  }}
               />
               </div>
                </Grid>
                <Grid item >
                   {
                       user.filter((data)=>{
                          if( sProfile == ""){
                             return data;
                          }else if(data.name.toLowerCase().includes(sProfile.toLowerCase()) || data.email.includes(sProfile)){
                              return data;
                          }
                       }).map((data,ind)=>{
                    
                        return( <div key={data.id}>
                            <ListCart key={data.id} val={data} />
                        </div> )      

                       })
                   }
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Profile
