import { Block, Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import { AppBar,  Avatar,  Badge,  InputBase,  Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
  const useStyles = makeStyles((theme)=>({
    
      logoLg:{
          display:"none",
          [theme.breakpoints.up("sm")]:{
              display:"block",
          },
      } ,
      logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
          display:"none",
        },
      },
      toolbar:{
        display:"flex",
        justifyContent:"space-between",
      },
      search:{
        display:"flex",
        alignItems:"center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
       },
       width:"70%",
       [theme.breakpoints.down("sm")]:{
         display:(props)=> (props.open ? "flex" : "none"),
       },
         },
      input:{
         color:"white",
         marginLeft:theme.spacing(1),
      },
      icons:{
         alignItems:"center",
          display:(props)=> (props.open ? "none" : "flex"),
       },
      badge:{
        marginRight:theme.spacing(2),
      },
      searchButton:{
         marginRight:theme.spacing(2),
         [theme.breakpoints.up("sm")]:{
          display:"none",
        }, 
      },
      Cancel:{
        [theme.breakpoints.up("sm")]:{
          display:"none",
        }
      }
     
  }))
const Navbar = () => {
  const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
              Task-App
            </Typography>
            <Typography variant="h6"  className={classes.logoSm}>
              Task
            </Typography>
               <div className={classes.search}>
               <SearchIcon/>
               <InputBase placeholder="Search..." className={classes.input}/>
               <Cancel className={classes.Cancel} onClick={ ()=>setOpen(false) }/>
               </div>
               <div className={classes.icons}>
                 <Search className={classes.searchButton} onClick={ ()=> setOpen(true) } />
               <Badge badgeContent={0} color="secondary" className={classes.badge }>
                  <Mail/>
               </Badge>
               <Badge badgeContent={0} color="secondary" className={classes.badge }>
                  <Notifications/>
               </Badge>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               </div>
           </Toolbar> 
        </AppBar>
    )
}

export default Navbar
