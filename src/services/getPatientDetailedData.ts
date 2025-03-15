


export default async function getPatientDetailedData(token:string, patient_id:string){
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/patients?patient_id=${patient_id}&details=true`,{
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
            return data[0]
    } catch (error) {
        console.log(error)
        return error as Error
        
    }
}