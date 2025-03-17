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
            throw new Error('Network response was not ok')
        } 
    
          const data = await response.json();
          console.log(data)
          return data
        
    } catch (error) {
        return error as Error;
    }
}