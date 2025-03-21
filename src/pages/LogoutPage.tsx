import LoginOutService from "../services/logOutService";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';


function LogoutPage() {
  
  const logout = LoginOutService()
  const navigate = useNavigate()

  useEffect(() => {
    if(logout){
      setTimeout(() => {
        // redirect to login page after 2 seconds
        navigate('/login')
      }, 2000); 
    }
  }, [])


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
        <Typography variant='h3' color={'#fc4503'}>Γίνεται Αποσύδεση Τώρα</Typography>
    </Box>
  )
}

export default LogoutPage