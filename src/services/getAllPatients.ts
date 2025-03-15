import patientType from "../types/patientsTypes"

export default async function getAllPatients(token:string, user_id: string): Promise<patientType[] | Error> {
    try {
        const response = await fetch(`https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/patients?user_id=${user_id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'API_KEY':'7mJ5Ckgu7duD5lTdLGFRkfcHreY86CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1'
            }},
            );

            console.log(response)
            const data = await response.json();
            console.log(data)
            return data.patients as patientType[];
    } catch (error) {
        console.log(error)
      return error as Error;
    }
}