import { useParams } from 'react-router';
import Patient24hChart from '../components/features/Patient24hChart';
import PatientDetails from '../components/features/PatientDetails';
import PatientLast from '../components/features/PatientLast';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';


function PatientDetailsPage() {
  const { patient_id } = useParams()

  return (
    <>
    {patient_id != undefined &&
      <Grid container spacing={2}>
        <Grid  size = {12}>
          <PatientDetails patient_id={patient_id}/>
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