import { ClassNames } from '@emotion/react';
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayArrowOutlined, Settings, Storefront, TabletMac } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        height:"100vh",
        color:"white",
        paddingTop: theme.spacing(2),
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
           <Person className={classes.icon } />
           <Typography className={classes.text} >Friends</Typography>
           </div>
           <div className={classes.items}>
           <List className={classes.icon } />
           <Typography className={classes.text} >List</Typography>
           </div>
           <div className={classes.items}>
           <PhotoCamera className={classes.icon } />
           <Typography className={classes.text} >Camera</Typography>
           </div>
           <div className={classes.items}>
           <PlayArrowOutlined className={classes.icon } />
           <Typography className={classes.text} >Videos</Typography>
           </div>
           <div className={classes.items}>
           <TabletMac className={classes.icon } />
           <Typography className={classes.text} >Apps</Typography>
           </div>
           <div className={classes.items}>
           <Bookmark className={classes.icon } />
           <Typography className={classes.text} >Collections</Typography>
           </div>
           <div className={classes.items}>
           <Storefront className={classes.icon } />
           <Typography className={classes.text} >Market Place</Typography>
           </div>
           <div className={classes.items}>
           <Settings className={classes.icon } />
           <Typography className={classes.text} >Settings</Typography>
           </div>
           <div className={classes.items}>
           <ExitToApp className={classes.icon } />
           <Typography className={classes.text} >Log Out</Typography>
           </div>
        </Container>
    )
}

export default Leftbar
