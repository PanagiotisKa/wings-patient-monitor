import { useParams } from 'react-router';
import Patient24hChart from '../components/features/Patient24hChart';
import PatientDetails from '../components/features/PatientDetails';
import PatientLast from '../components/features/PatientLast';


function PatientDetailsPage() {
  const { patient_id } = useParams()

  return (
    <>
    {patient_id != undefined &&
      <>
        <PatientDetails patient_id={patient_id}/>
        <PatientLast patient_id={patient_id}/>
        <Patient24hChart patient_id={patient_id}/>
      </>
    }
    </>
  )
}

export default PatientDetailsPage