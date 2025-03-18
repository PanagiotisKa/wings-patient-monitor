import { Card, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

function HeartRate({heart_rate}: {heart_rate: string}) {
  return (
    <Card sx={{p:1, mb:1, background: '#e6e6e6'}}>
        <Typography variant="h1" color="#ad452d" align="center">
        <FavoriteIcon/> {heart_rate}
    </Typography>
    <Typography variant="h6" color="#ad452d" align="center">
        bpm
    </Typography>
    </Card>
  )
}

export default HeartRate