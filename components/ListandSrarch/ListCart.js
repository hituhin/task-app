import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { display } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'

const ListCart = (props) => {
     
     const { id,name, email, phone, website } = props.val;
    return (
        <>
          <Grid container xs="3">
              <Grid item >
              <Card sx={{ minWidth: 275 }}>
              <CardContent>
             <Typography variant="h5" color="text.secondary" >
                 {name}
            </Typography>
            <Typography  component="div">
                  {email}
            </Typography>
            <Typography  color="text.secondary">
                  {phone}
               </Typography>
                <Typography variant="body2">
             {website}
            </Typography>
             </CardContent>
           </Card>
              </Grid>
          </Grid>
        </>
    )
}

export default ListCart
