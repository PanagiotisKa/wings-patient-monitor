import {patientDetailedType} from '../types/patientsTypes'

export default async function getPatientDetailedData(token:string, patient_id:string):Promise<patientDetailedType | Error>{
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/patients?patient_id=${patient_id}&details=true`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY': import.meta.env.VITE_API_KEY,
            }},
            );
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }   
            const data:patientDetailedType[] = await response.json()

            return data[0]

    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching data: ' + error.message)
           } else {
               throw new Error('Error fetching data.')  
           }      
    }
}