import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(2),
    }
}))
const Feed = () => {
    const classes =useStyles();
    return (
        <Container className={classes.container}>
           Feed
        </Container>
    )
}

export default Feed
