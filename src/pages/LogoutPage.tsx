import LoginOutService from "../services/logOutService";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';


function LogoutPage() {
  
  const logout = LoginOutService()
  const navigate = useNavigate()
  console.log(logout)
  navigate('/login')

  useEffect(() => {
    if(logout){
      setTimeout(() => {
        navigate('/login')
      }, 1000); 
    }
  }, [])


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
        <Typography variant='h3' color={'#fc4503'}>Γίνεται Αποσύδεση Τώρα</Typography>
    </Box>
  )
}

export default LogoutPage