import mockData from '../../../mockDetailPatientData.json' assert { type: 'json' }
import { patientLastDataType } from '../types/patientsTypes'


export default async function getPatientLastData(token:string, patient_id: number): Promise< patientLastDataType | Error> {
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/realmeasurements?patient_id=${patient_id}&detail=second&interval=10+seconds&lastvalues=1`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY': import.meta.env.VITE_API_KEY,
            }},
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }   
            const data: patientLastDataType = await response.json();
            
            // if PROBLEM with ENDPOINT returning empty object  I am getting mock data
            if(Object.keys(data).length === 0) {
                let patient: number | undefined;
                mockData.forEach((item, index) => {
                    if(item.patient_id === patient_id) {
                        patient = index 
                    }
                })
                if (patient !== undefined) return mockData[patient] as patientLastDataType;
                else throw new Error(`No mock data found for patient_id: ${patient_id}`);
            } else {
                return data
            }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching data: ' + error.message)
            } else {
                throw new Error('Error fetching data.')  
            }
    }
}
