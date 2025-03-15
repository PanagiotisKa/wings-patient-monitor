import mockData from '../../../mockDetailPatientData.json'

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
            let data = await response.json();
            // if PROBLEM with ENDPOINT returning empty object  I am getting mock data
            if(Object.keys(data).length === 0) {
                mockData.forEach(item => {
                    if(item.patient_id === patient_id) {
                        data = item
                    }
                })

                
            }
            return data
    } catch (error) {
        console.log(error)
      return error as Error;
    }
}