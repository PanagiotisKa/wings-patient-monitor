import { facilityType } from "../types/otherTypes";


export default async function getFacilitiesData(token: string): Promise<facilityType[] | Error> {
    try {
        const response = await fetch('https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/facilities', {
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
            const data: facilityType[] = await response.json()
            return data
            
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching data: ' + error.message)
           } else {
               throw new Error('Error fetching data.') 
           }
    }
}