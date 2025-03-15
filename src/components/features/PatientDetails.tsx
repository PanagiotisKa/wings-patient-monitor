import { useNavigate } from 'react-router'
import getPatientDetailedData from '../../services/getPatientDetailedData';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import {patientDetailedType} from '../../types/patientsTypes';



function PatientDetails({patient_id}:{patient_id: string}) {
    const navigate = useNavigate()
    const [patientData, setPatientData] = useState<patientDetailedType | null>(null)
    const token = localStorage.getItem('token')
  
    async function getData(token: string, patient_id: string) {
        if(token !== null && patient_id !== undefined) {
          const responseExtraData = await getPatientDetailedData(token, patient_id);
          if(responseExtraData !== null && !(responseExtraData instanceof Error)){
            console.log(responseExtraData)
            setPatientData(responseExtraData)
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
      <div>
        Patient {patient_id}
        <h1>{patientData?.firstname} {patientData?.lastname} {}</h1>
        <h2> Email: {patientData?.email}</h2>
        <h2> Age: {patientData?.age}</h2>
        <h2> Φύλο: {patientData?.sex}</h2>
        <h4>Εθνικότητα: {patientData?.ethnicity}</h4>
      </div>
      <h2>Conditions</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><h3>Code</h3></TableCell>
            <TableCell><h3>Name</h3></TableCell>
            <TableCell><h3>Name (Ελληνικά)</h3></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {patientData != null && patientData.hasOwnProperty('conditions') && patientData?.conditions.map((condition) => { 
              return (    
                  <TableRow key={condition.condition_id}>
                    <TableCell><h4>{condition.code}</h4></TableCell>
                    <TableCell><h4>{condition.name}</h4></TableCell>
                    <TableCell><h4>{condition.name_el}</h4></TableCell>
                  </TableRow>
                  )
            })}
          </TableBody>
        
      </Table>
      </>
    )
  }
  
  export default PatientDetails