import {patientType }from "../types/patientsTypes"


export default async function getAllPatients(token:string, user_id: string): Promise<patientType[] | Error> {
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/patients?user_id=${user_id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY': import.meta.env.VITE_API_KEY,
            }},
            );

            const fetchedData = await response.json()
            const data:patientType[] = fetchedData.patients
            return data

    } catch (error) {
        if (error instanceof Error) {
         throw new Error('Error fetching data: ' + error.message)
        } else {
            throw new Error('Error fetching data.')  
        }
    }
}