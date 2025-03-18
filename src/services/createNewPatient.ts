import { patientType }from "../types/patientsTypes"

export default async function createNewPatient(token: string, patientData : patientType) {
    
    try {
        const response = await fetch('https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY': import.meta.env.VITE_API_KEY
            },
            body: JSON.stringify(patientData),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok. Status code: ' + response.status)
        } 
    
          const data: patientType = await response.json()
          return data
        
    } catch (error) {
        if (error instanceof Error) {
         throw new Error('Error fetching data: ' + error.message)
        } else {
            throw new Error('Error fetching data.')  
        }
    }
}