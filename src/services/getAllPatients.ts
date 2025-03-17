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

            const data = await response.json();
            return data.patients as patientType[];
    } catch (error) {
        console.log(error)
      return error as Error;
    }
}