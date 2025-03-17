import { Card, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';


function HeartRate({heart_rate}: {heart_rate: number}) {
  return (
    <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
    <Typography variant="h1" color="#ad452d" align="center">
    <FavoriteIcon/> {heart_rate}
    </Typography>
    </Card>
  )
}

export default HeartRate