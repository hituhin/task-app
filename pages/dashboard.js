import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import Navbar from '../components/Header/Navbar'
import Leftbar from '../components/Header/Leftbar'
import Rightbar from '../components/Header/Rightbar'
import Feed from '../components/Header/Feed'
import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles((theme)=>({

 }))
const Dashboard = () => {
    const classes = useStyles({});
    return (
       <div>
           <Navbar/>
        <Grid container>
            <Grid item sm={2} xs={2}>
               <Leftbar/> 
            </Grid>
            <Grid item sm={7} xs={10}>
                
                <Feed/>
            </Grid>
            <Grid item sm={3} className={classes.Rightbar}>
            <Rightbar/> 
            </Grid>
        </Grid>
       </div>
    )
}

export default Dashboard
