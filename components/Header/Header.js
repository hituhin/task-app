import { Person } from '@mui/icons-material'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { theme } from '../Theme'


const useStyle = makeStyles(theme => ({
    button:{
        color:"while",
        backgroundColor: theme.palette.primary.main
    }
}))
    
    

const Header = () => {
    const classes=useStyle();
    return (
        <div>
           <Button variant="contained" className={classes.button} size="large" startIcon={<Person/>} >Material Ui</Button>
        </div>
    )
}

export default Header