import { useParams } from 'react-router';
import Patient24hChart from '../components/features/Patient24hChart';
import PatientDetails from '../components/features/PatientDetails';
import PatientLast from '../components/features/PatientLast';
import Grid from '@mui/material/Grid2';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router';

function PatientDetailsPage() {
  const { patient_id } = useParams()
  const navigate = useNavigate()

  return (
    <>
    {patient_id != undefined &&
      <Grid container spacing={2}>
        <Grid  size = {12}>
          <PatientDetails patient_id={patient_id}/>

          {/* HOME PAGE BUTTON */}
          <Box
        sx={{
          position: 'absolute',
          top: 160, 
          right: 30, 
        }}
        >
        <Button
        sx={{ fontSize: 12, marginTop:2, textTransform: 'none' }}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => { navigate('/')}}>
          Επιστροφή
        </Button>
        
      </Box>
        </Grid>
        <Grid  size = {12}>
          <Typography variant="h3" color='primary' padding={2}>
          Τελευταίες Μετρήσεις
          </Typography>
        </Grid>
        <Grid  size = {12}>
          <PatientLast patient_id={patient_id}/>
        </Grid>
        <Grid  size = {12}>
          <Patient24hChart patient_id={patient_id}/>
        </Grid>
      </Grid>
    }
    </>
  )
}

export default PatientDetailsPage