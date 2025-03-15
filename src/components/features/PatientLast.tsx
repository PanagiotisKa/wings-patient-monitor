import { useNavigate } from 'react-router'
import getPatientLastData from '../../services/getPatientLastData';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import {patientLastDataType} from "../../types/patientsTypes"

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
      <>
          <Card sx={{p:1, mb:1, background: 'pink'}}>
          Hart Rate: {patientData?.heart_rate}
          </Card>
          <Card sx={{p:1, mb:1, background: 'lightgreen'}}>
          z_accel: {patientData?.z_accel}
          </Card>
      </>
    )
  }
  
  export default PatientLast