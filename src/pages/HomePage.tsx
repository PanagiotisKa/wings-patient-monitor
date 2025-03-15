import { useNavigate } from 'react-router'
import { useEffect, useState} from 'react';
import getAllUsers from '../services/getAllPatients';

function HomePage() {
  const token = localStorage.getItem('token');
  const [data , setData] = useState([])

  async function getData(token:string) {  
        const results = await getAllUsers(token);
        setData(results);
  }


  const navigate = useNavigate();
      
  useEffect(() => {
      if(token !== null) {
        getData(token)
        console.log(data)
      } else {
        navigate('/login');
      }

  }, [])


  return (
    <div>Home</div>
  )
}

export default HomePage