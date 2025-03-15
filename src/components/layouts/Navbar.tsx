import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router'
import { useEffect, useState } from 'react';

function Navbar() {
   

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
            <Link to='/'>
                <Typography variant='h4'>Home Page</Typography>
            </Link>
            <Link to='/new_patient'>
                <Typography variant='h4'>Add New Patient</Typography>
            </Link>
            
            <Link to='/login'>
                <Typography variant='h4'>Login</Typography>
            </Link>
           
            <Link to='/logout'>
                <Typography variant='h4'>Logout</Typography>
            </Link>
           
            </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar