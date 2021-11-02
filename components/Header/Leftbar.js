import { ClassNames } from '@emotion/react';
import { Home } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        height:"100vh",
        color:"white",
        paddingTop: theme.spacing(5),
        backgroundColor:theme.palette.primary.main,
        [theme.breakpoints.up("sm")]:{
            backgroundColor: "white",
            color:"#555",
            border:"1px solid #ece7e7",
        }
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
       marginRight:theme.spacing(1),
       [theme.breakpoints.up("sm")]:{
           fontSize: "18px",
       }
    },
    text:{
        fontWeight: 500,
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
