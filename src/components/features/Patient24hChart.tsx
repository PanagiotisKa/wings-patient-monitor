import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import getPatient24hData from '../../services/getPatient24hData';
import {patient24hDataType} from '../../types/patientsTypes'
import { LineChart, Line, Area, AreaChart, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Patient24hChart({patient_id}:{patient_id: string}) {
    const navigate = useNavigate()
    const [patient24hData, setPatient24hData] = useState<patient24hDataType[] | null>(null)
    const token = localStorage.getItem('token')


    async function get24hData(token: string, patient_id: string):Promise<void> {
        if(token !== null && patient_id !== undefined) {
            const response24hData = await getPatient24hData(token, patient_id);
            if(response24hData !== null && !(response24hData instanceof Error)){
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
    {console.log(patient24hData)}
        <Typography variant="h3" color='primary' padding={2}>
            Μετρήσεις 24 Ωρών
        </Typography>
        {patient24hData !== null &&
            <Grid container>
                <Grid size={{ xs: 12, md: 6 }}>
                <ResponsiveContainer width="100%"  height={500}>
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
                    <CartesianGrid strokeDasharray="3 3" strokeWidth={2}/>
                    <XAxis dataKey="timestamp" />
                    <YAxis yAxisId="heart_rate" type="number" domain={[40, 120]}/>
                    <Tooltip />
                    <Legend
                        wrapperStyle={{
                            fontSize: '18px', 
                            fontWeight: 'bold',
                            paddingTop: '20px', 
                        }}
                    />
                    <Line name='Καρδιακοί Παλμοί' yAxisId="heart_rate" type="linear" dataKey="heart_rate" stroke="#ad452d" strokeWidth={3} activeDot={{ r: 8 }} >
                    <LabelList
                        dataKey="heart_rate"
                        position="top"
                        fill="#000"
                        fontSize={14}
                        offset={10}
                        formatter={(value:string) => `${value}`} 
                        />
                    </Line>

                </LineChart>
                </ResponsiveContainer>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                <ResponsiveContainer width="100%"  height={500}>
                <AreaChart
                    width={500}
                    height={400}
                    data={patient24hData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" strokeWidth={2}/>
                    <XAxis dataKey="timestamp" />
                    <YAxis type="number" domain={[50, 150]}/>
                    <Tooltip />
                    <Legend
                        wrapperStyle={{
                            fontSize: '18px', 
                            fontWeight: 'bold',
                            paddingTop: '20px', 
                        }}
                    />
                    <Area name='Συστολική Πίεση'  type="linear" dataKey="sys_blood_pressure" stroke="#ad452d" fill="#ad452d" 
                    strokeWidth={3} fillOpacity={1} dot={{ r: 3, fill: '#fff'}} activeDot={{ r: 3 }}>
                    <LabelList
                        dataKey="sys_blood_pressure"
                        position="top"
                        fill="#000"
                        fontSize={14}
                        offset={10}
                        formatter={(value:string) => `${value}`} 
                        />
                    </Area>
                    <Area name='Διαστολική Πίεση' type="linear" dataKey="dia_blood_pressure" stroke="#60a162" fill="#60a162"
                     strokeWidth={3} fillOpacity={1} dot={{ r: 3, fill: '#fff'}} activeDot={{ r: 8 }}>
                                            <LabelList
                        dataKey="dia_blood_pressure"
                        position="top"
                        fill="#000"
                        fontSize={14}
                        offset={10}
                        formatter={(value:string) => `${value}`} 
                        />
                    </Area>
                </AreaChart>
                </ResponsiveContainer>
                </Grid>
            </Grid>
        }
    </>
  )
}

export default Patient24hChart