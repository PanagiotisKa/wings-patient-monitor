import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import getPatient24hData from '../../services/getPatient24hData';
import {patient24hDataType} from '../../types/patientsTypes'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Patient24hChart({patient_id}:{patient_id: string}) {
    const navigate = useNavigate()
    const [patient24hData, setPatient24hData] = useState<patient24hDataType[] | null>(null)
    const token = localStorage.getItem('token')


    async function get24hData(token: string, patient_id: string) {
        if(token !== null && patient_id !== undefined) {
            const response24hData = await getPatient24hData(token, patient_id);
            if(response24hData !== null && !(response24hData instanceof Error)){
                console.log(response24hData)
            setPatient24hData(response24hData)
            }
        }
        }
    
    useEffect(() => {
        if(token !== null && patient_id !== undefined) {
        get24hData(token, patient_id)
        } else {
        navigate('/login');
        }
    
    }, [])

  return (
    <>
    <div>Patient24hChart</div>
    {patient24hData !== null && 
            <LineChart
            width={1000}
            height={500}
            data={patient24hData}
            margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="1 5" />
            <XAxis dataKey="timestamp" />
            <YAxis yAxisId="heart_rate" />
            <YAxis yAxisId="dia_blood_pressure"/>
            <YAxis yAxisId="sys_blood_pressure"/>
            <Tooltip />
            <Legend />
            <Line yAxisId="heart_rate" type="monotone" dataKey="heart_rate" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="dia_blood_pressure" type="monotone" dataKey="dia_blood_pressure" stroke="#82ca9d" />
            <Line yAxisId="sys_blood_pressure" type="monotone" dataKey="sys_blood_pressure" stroke="#1f5dc2" />
            </LineChart>
        }
    </>
  )
}

export default Patient24hChart