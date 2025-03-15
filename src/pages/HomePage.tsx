import { useNavigate } from 'react-router'
import { useEffect, useState} from 'react';
import getAllPatients from '../services/getAllPatients';
import PatientCard from '../components/features/PatientCard';
import {patientType} from "../types/patientsTypes"

function HomePage() {
  const token = localStorage.getItem('token');
  const user_id = localStorage.getItem('user_id');
  const [data , setData] = useState<patientType[] | null>(null)

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
    <div>Home</div>
    { data !== null && data.length > 0 && data.map( patient => {
      return(
        <div key={patient.patient_id}>
          <PatientCard patient={patient}/>
        </div>
      )
    })
    }
    </>
  )
}

export default HomePage