import { facilityType } from "../types/otherTypes";


export default async function getFacilitiesData(token: string): Promise<facilityType[] | Error> {
    try {
        const response = await fetch('https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/facilities', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY':'7mJ5Ckgu7duD5lTdLGFRkfcHreY86CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1'
            }},
            );
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }   
            const data = await response.json()
            return data
    } catch (error) {
        console.log(error)
        return error as Error
        
    }
}