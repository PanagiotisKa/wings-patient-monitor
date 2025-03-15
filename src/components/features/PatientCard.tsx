
import {patientType, patientLastDataType} from "../../types/patientsTypes"
import { Card } from "@mui/material"
import getPatientLastData from "../../services/getPatientLastData"
import { useEffect, useState } from "react";

function PatientCard({patient}: {patient: patientType}) {
  const token = localStorage.getItem('token');
  const [patientLastData, setPatientLastData] = useState<patientLastDataType | null>(null)

  async function getData(token: string, patient_id: number) {
    const response = await getPatientLastData( token, patient_id)
    if(response !== null && !(response instanceof Error)){
      setPatientLastData(response);
    }
  }



  useEffect(() => {
    if(token !== null && patient.patient_id !== null){
      getData(token, patient.patient_id)
    }
    }
  )
  return (
    <Card>
      Name: {patient.firstname} {patient.lastname}
      Hart Rate: {patientLastData?.heart_rate}
      {patientLastData?.z_accel}
    </Card>
  )
}

export default PatientCard