import { useNavigate } from 'react-router'
import getPatientLastData from '../../services/getPatientLastData';
import { useEffect, useState } from 'react';
import {patientLastDataType} from "../../types/patientsTypes"
import ZAccel from '../common/ZAccel';
import HeartRate from '../common/HeartRate';
import Grid from '@mui/material/Grid2';

function PatientLast({patient_id}:{patient_id: string}) {
    const navigate = useNavigate()
    const [patientData, setPatientData] = useState<patientLastDataType | null>(null)
    const token = localStorage.getItem('token')
  
    async function getData(token: string, patient_id: string) {
        if(token !== null && patient_id !== undefined) {
          const responseLastData = await getPatientLastData(token, parseInt(patient_id));
          if(responseLastData !== null && !(responseLastData instanceof Error)){
            setPatientData(responseLastData)
          }
        }
      }
  
    useEffect(() => {
      if(token !== null && patient_id !== undefined) {
        getData(token, patient_id)
      } else {
        navigate('/login');
      }
  
  }, [])
    
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid size={6} >
          {patientData?.heart_rate &&
          <HeartRate heart_rate={patientData?.heart_rate}/>
          }
        </Grid>
        <Grid size={6} >
          {patientData?.z_accel &&
          <ZAccel z_accel={patientData?.z_accel}/>
          }
        </Grid>
      </Grid>
    )
  }
  
  export default PatientLast