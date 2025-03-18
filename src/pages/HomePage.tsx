import { useNavigate } from 'react-router'
import { useEffect, useState} from 'react';
import getAllPatients from '../services/getAllPatients';
import PatientCard from '../components/features/PatientCard';
import {patientType} from "../types/patientsTypes"
import Grid from '@mui/material/Grid2';
import { Typography, TextField } from '@mui/material';

function HomePage() {

  const token = localStorage.getItem('token');
  const user_id = localStorage.getItem('user_id');

  const [data , setData] = useState<patientType[] | null>(null)
  const [search, setSearch] = useState<string>('')

  // Get all patients data
  async function getData(token: string, user_id: string) {  
    if(token !== null && user_id !== null) {
      const response = await getAllPatients(token, user_id);
      if(response !== null && !(response instanceof Error)){
        setData(response);
      }
    }
  }


  const navigate = useNavigate();
      
  useEffect(() => {
      if(token !== null && user_id !== null) {
        getData(token, user_id)
      } else {
        navigate('/login');
      }

  }, [])


  return (
    <>
    <Grid container  sx={{ padding: 2 }} justifyContent="center">
      <Grid size={12}>
    <Typography variant='h3' align='center'>
      Τελευταίες Μετρήσεις Ασθενών
    </Typography>
    </Grid>
    <Grid size={6} alignContent="right">
    <TextField label="Αναζήτηση:"  value={search} variant="standard"  size="small" fullWidth
            onChange={(e) => {setSearch(e.target.value)}}
            />
    </Grid>
    </Grid>
    <Grid container spacing={3} sx={{ padding: 3 }} justifyContent="center">
      { data !== null && data.length > 0 && data
      .filter(
            patient => {
              return search === '' ? patient : 
              (patient.firstname.toString().toLocaleLowerCase().includes(search.toLowerCase()) 
                || patient.lastname?.toString().toLocaleLowerCase().includes(search.toLowerCase()))
        })
        .map( patient => {
        return(
          <Grid key={patient.patient_id} >
            <PatientCard patient={patient}/>
          </Grid>
        )
      })
      }
    </Grid>
    </>
  )
}

export default HomePage