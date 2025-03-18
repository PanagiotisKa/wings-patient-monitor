import {userInfoType} from "../types/userTypes"


export default async function LoginService(username:string, password:string): Promise<userInfoType | Error> {
    try {    
      const response = await fetch('https://test-remote-health-monitoring.wings-ict-solutions.dev/healthmonitor/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API_KEY': import.meta.env.VITE_API_KEY,
          },
          body: JSON.stringify({username, password}),
        });
  
        const data = await response.json()
        const token = data.access_token
        const user_id = data.user_id

        localStorage.setItem('token', token)
        localStorage.setItem('user_id', user_id)

        return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Login Error: ' + error.message)
       } else {
           throw new Error('Login Error')  
       } 
    }
    }
