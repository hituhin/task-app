import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(1),
    }
}))
const Post = () => {
    const classes =useStyles();
    return (
        <Container className={classes.container}>
           Post
        </Container>
    )
}

export default Post
