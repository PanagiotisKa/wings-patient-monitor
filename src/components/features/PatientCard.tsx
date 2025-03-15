
import {patientType, patientLastDataType} from "../../types/patientsTypes"
import { Card} from "@mui/material"
import getPatientLastData from "../../services/getPatientLastData"
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <Card sx={{ maxWidth: 345, minHeight: 200, background: 'lightgray', p:1, m:1 }}>
      <Card sx={{p:1, mb:1, background: 'lightblue'}}>
      Name: {patient.firstname} {patient.lastname}
      </Card>
      <Card sx={{p:1, mb:1, background: 'pink'}}>
      Hart Rate: {patientLastData?.heart_rate}
      </Card>
      <Card sx={{p:1, mb:1, background: 'lightgreen'}}>
      z_accel: {patientLastData?.z_accel}
      </Card>
      <Link to={`/patient/${patient.patient_id}`}>Details</Link>
    </Card>
  )
}

export default PatientCard