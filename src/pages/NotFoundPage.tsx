import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
        <Typography variant='h3' color={'#fc4503'}>404 | Η Σελίδα δεν βρέθηκε</Typography>

      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
        <Button sx={{ minWidth: 200, width:'20%', fontSize: 20, marginTop:2, textTransform: 'none' }}
          type='submit'
          variant='contained'
          color='primary'
          onClick={() => {navigate('/')}}>
          Αρχική Σελίδα
        </Button>
    </Box>
  </>
  )
}

export default NotFound