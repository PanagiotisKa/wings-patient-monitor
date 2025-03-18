import { Card, Typography } from "@mui/material"
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

function ZAccel({z_accel}: {z_accel: string}) {
  return (
    <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
    <Typography variant="h1" color="#465380" align="center">
    <MonitorHeartIcon/> {z_accel}
    </Typography>
    <Typography variant="h6" color="#465380" align="center">
        m/s<sup style={{ fontSize: '0.5rem', verticalAlign: 'top' }}>2</sup>
    </Typography>
    </Card>
  )
}

export default ZAccel