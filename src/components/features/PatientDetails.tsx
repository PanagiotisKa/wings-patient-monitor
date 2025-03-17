import { useNavigate } from 'react-router'
import getPatientDetailedData from '../../services/getPatientDetailedData';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Card} from '@mui/material';
import {patientDetailedType} from '../../types/patientsTypes';
import Grid from '@mui/material/Grid2';

function PatientDetails({patient_id}:{patient_id: string}) {
    const navigate = useNavigate()
    const [patientData, setPatientData] = useState<patientDetailedType | null>(null)
    const token = localStorage.getItem('token')
  
    async function getData(token: string, patient_id: string) {
        if(token !== null && patient_id !== undefined) {
          const responseExtraData = await getPatientDetailedData(token, patient_id);
          if(responseExtraData !== null && !(responseExtraData instanceof Error)){
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
      <Grid container spacing={2}>
        <Grid size={12} padding={4}>
          <Typography variant='h1'  align='center' color='primary'>
          {patientData?.firstname} {patientData?.lastname} {}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} >
        <Typography variant="h3" color='primary' padding={2}>Γενικά Στοιχεία </Typography>
          <Card sx={{p:1, mb:1, background: '#e6e6e6', minHeight: '200px'}}>
            <Table>
                <TableRow>
                  <TableCell> <Typography variant='h4'>Φύλο: <b> {patientData?.sex} </b></Typography></TableCell>
                </TableRow>
                <TableRow>
                <TableCell><Typography variant='h4'>Age: <b> {patientData?.age} </b></Typography></TableCell>
                </TableRow>
                <TableRow>
                <TableCell><Typography variant='h4'>ΑΜΚΑ: <b> {patientData?.amka} </b></Typography></TableCell>
                </TableRow>
            </Table>
            </Card>
        </Grid>

       
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h3" color='primary' padding={2}>Στοιχεία επικοινωνίας</Typography>
          <Card sx={{p:1, mb:1, background: '#e6e6e6', minHeight: '200px'}}>
            <Table>
              <TableBody>
                  <TableRow>
                    <TableCell> <Typography variant='h4'>Τηλεφωνο: <b> {patientData?.phonenumber} </b></Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> <Typography variant='h4'>Email: <b> {patientData?.email} </b></Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant='h4'>Διεύθυνση: <b> {patientData?.address_street} </b>
                        <b> {patientData?.address_number}</b> <b>{patientData?.address_city} </b>
                        <b>  {patientData?.address_postalcode}</b>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
        </Grid>

        <Grid size={{xs: 12, md: 4}}>
        <Typography variant="h3" color='primary' padding={2}>Ίδρυμα Υγείας</Typography>
        <Card sx={{p:1, mb:1, background: '#e6e6e6', minHeight: '200px' }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
              <Typography variant='h4'>{patientData?.facility?.facility_name}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              <Typography variant='h4'>{patientData?.facility?.facility_address}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
          </Card>
        </Grid>

        <Grid size={12}>
       <Typography variant="h3" color='primary' padding={2}>Παθήσεις</Typography>
       <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
          <Table>
            <TableHead sx={{ background: '#e0dede'}}>
              <TableRow>
                <TableCell><Typography variant='h4' color='primary'>Code</Typography></TableCell>
                <TableCell><Typography variant='h4' color='primary'>Name</Typography></TableCell>
                <TableCell><Typography variant='h4' color='primary'>Name (Ελληνικά)</Typography></TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                {patientData != null && 'conditions' in patientData && patientData?.conditions.map((condition) => { 
                  return (    
                      <TableRow key={condition.condition_id}>
                        <TableCell><Typography variant='h5'>{condition.code}</Typography></TableCell>
                        <TableCell><Typography variant='h5'>{condition.name}</Typography></TableCell>
                        <TableCell><Typography variant='h5'>{condition.name_el}</Typography></TableCell>
                      </TableRow>
                      )
                })}
              </TableBody>
          </Table>
          </Card>
        </Grid>

      </Grid>
    )
  }
  
  export default PatientDetails