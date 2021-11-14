import { Grid, TableRow } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Header/Navbar'
import Leftbar from '../components/Header/Leftbar'
import Rightbar from '../components/Header/Rightbar'
import Feed from '../components/Header/Feed'
import { makeStyles } from '@mui/styles'
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
    right:{
        [theme.breakpoints.down("sm")]:{
            display:"none",
        }
    }
}))

const Dashboard = () => {
    const classes = useStyles();  
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
            <Grid item sm={3} className={classes.right} >
            <Rightbar/> 
            </Grid>
        </Grid>
       </div>
    )
}

export default Dashboard
