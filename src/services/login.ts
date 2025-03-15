import {userInfoType} from "../types/userTypes";


export default async function LoginService(username:string, password:string): Promise<userInfoType | Error> {
    try {    
      const response = await fetch('https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API_KEY':'7mJ5Ckgu7duD5lTdLGFRkfcHreY86CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1'
          },
          body: JSON.stringify({username, password}),
        });
  
        const data = await response.json();
        const token = data.access_token;
        const user_id = data.user_id;

        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id);

        return data
    } catch (error) {
        console.log(error)
      return error as Error;
    }
    }
