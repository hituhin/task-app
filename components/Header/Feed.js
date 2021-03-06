import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import Post from '../Body/Post';
import Leftbar from './Leftbar';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(2),
    }
}))
const Feed = () => {
    const classes =useStyles();
    return (
        <Container className={classes.container}>
          <Post/>
        </Container>
    )
}

export default Feed
