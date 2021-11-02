import { ClassNames } from '@emotion/react';
import { Home } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        height:"100hv",
        color:"white",
        paddingTop: theme.spacing(2),
        backgroundColor:theme.palette.primary.main,
    },
    items:{
       display:"flex",
       alignItems:"center",
       marginBottom:theme.spacing(4),
       [theme.breakpoints.up("sm")]:{
           marginBottom: theme.spacing(3),
           cursor: "pointer",
       }
    },
    icon:{

    },
    text:{
        [theme.breakpoints.down("sm")]:{
           display:"none", 
        }
    },
}))

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
           <div className={classes.items}>
           <Home className={classes.icon } />
           <Typography className={classes.text} >Home</Typography>
           </div>
           <div className={classes.items}>
           <Home className={classes.icon } />
           <Typography className={classes.text} >Home</Typography>
           </div>
           <div className={classes.items}>
           <Home className={classes.icon } />
           <Typography className={classes.text} >Home</Typography>
           </div>
           <div className={classes.items}>
           <Home className={classes.icon } />
           <Typography className={classes.text} >Home</Typography>
           </div>
        </Container>
    )
}

export default Leftbar
