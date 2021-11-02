import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
  const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(2),
    }
  }))
const Rightbar = () => {
    const classes =useStyles();
    return (
        <Container className={classes.container}>
           Rightbar 
        </Container>
    )
}

export default Rightbar
