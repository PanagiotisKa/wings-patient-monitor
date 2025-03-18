import {patient24hDataType} from '../types/patientsTypes'
import mokeData from '../../data/mock24hData.json' assert { type: 'json' }



export default async function getPatient24hData(token:string, patient_id:string): Promise<patient24hDataType[] | Error> {
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/realmeasurements?patient_id=${patient_id}&detail=hour&interval=24+hours&lastvalues=24`,{
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
            const data: patient24hDataType[] = await response.json();

            // if PROBLEM with ENDPOINT returning empty object  I am getting mock data
            if(Object.keys(data).length === 0) {
               return mokeData as patient24hDataType[]
            }else {
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