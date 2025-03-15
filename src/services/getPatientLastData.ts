type patientLastData = {
    timestamp: string
    heart_rate: number
    z_accel: number

}

export default async function getPatientLastData(token:string, patient_id: number): Promise< patientLastData | Error> {
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/realmeasurements?patient_id=${patient_id}&detail=second&interval=10+seconds&lastvalues=1`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY':'7mJ5Ckgu7duD5lTdLGFRkfcHreY86CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1'
            }},
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }   
            const data = await response.json();
            console.log(data)
            return data
    } catch (error) {
        console.log(error)
      return error as Error;
    }
}