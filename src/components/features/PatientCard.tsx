
import {patientType, patientLastDataType} from "../../types/patientsTypes"
import { Card, Typography, CircularProgress} from "@mui/material"
import getPatientLastData from "../../services/getPatientLastData"
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Grid from '@mui/material/Grid2';
import PersonIcon from '@mui/icons-material/Person';
import CallMadeIcon from '@mui/icons-material/CallMade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PatientCard({patient}: {patient: patientType}) {
  const token = localStorage.getItem('token');
  const [patientLastData, setPatientLastData] = useState<patientLastDataType | null>(null)

  async function getData(token: string, patient_id: number) {
    const response = await getPatientLastData( token, patient_id)
    // console.log(response)
    if(response !== null && !(response instanceof Error)){
      setPatientLastData(response)
    }
  }



  useEffect(() => {
    if(token !== null && patient.patient_id !== null){
      const fetchData = async () => await getData(token, patient.patient_id)
      fetchData()
    }
    
    },[]
  )
  return (
    <Card sx={{ maxWidth: 300, minWidth: 250, minHeight: 200, background: '#cccbc6', p:1, m:1 }}>
      <Grid container spacing={2} sx={{ padding: 1 }} justifyContent="center">
        <Grid size={12}>
          <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
            <Grid container spacing={1} sx={{ padding: 1 }}>
              <Grid size={3}>
              <PersonIcon/>
              </Grid>
              <Grid size={9}>
            <Typography variant="h4">
            {patient.firstname} {patient.lastname}
            </Typography>
            </Grid>
          </Grid>
          </Card>
        </Grid>
        {patientLastData == null ?
        <Grid size={12} justifyContent="center">
        <CircularProgress color="primary"/> 
        </Grid>
        :
          <>
        <Grid size={6}>
          <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
            <Typography variant="h1" color="#ad452d" align="center">
            <FavoriteIcon/> {patientLastData?.heart_rate}
            </Typography>

          </Card>
        </Grid>
        <Grid size={6}>
          <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
          <Typography variant="h1" color="#465380" align="center">
          <MonitorHeartIcon/> {patientLastData?.z_accel}
          </Typography>
          </Card>
          </Grid>
          <Grid size={12}>
          <Link to={`/patient/${patient.patient_id}`}>
          <Typography variant="h5" color="#465380" align="right">
          Περισσότερα <CallMadeIcon/>
          </Typography>
          </Link>
        </Grid>
        </>
          }
      </Grid>
    </Card>
  )
}

export default PatientCard