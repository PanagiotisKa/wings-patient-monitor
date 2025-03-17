import {useFormik} from 'formik'
import { useNavigate } from 'react-router'
import { Button, TextField, InputLabel, Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LoginService from '../services/login';
import { LoginFormErrorTypes, LoginFormValuesTypes } from '../types/userTypes';


const validate = (values: LoginFormValuesTypes) => {
    const errors:LoginFormErrorTypes = {};

    if (!values.username) {
      errors.username = 'Required'};

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors
}

function LoginPage() {
    
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
            await LoginService(values.username, values.password)
            navigate('/')
        }
        })


  return (
    <Box
  sx={{
    display: 'flex',
    justifyContent: 'center', // Centers content horizontally
  }}
>
        <Grid container spacing={2}>
            <Grid size={12}>
                <Typography variant='h2' color={'primary'}>Login</Typography>
            </Grid>
            <Grid size={12}>    
                <form onSubmit={formik.handleSubmit}>
                    <Grid size={12}>
                        <InputLabel sx={{ minWidth: '100%', fontSize: 20, marginTop:2}} htmlFor="username">User Name</InputLabel>
                        <TextField
                            id="username"
                            name="username"
                            sx={{ minWidth: '100%', background:'#e8e5e3'}}
                            error={(formik.touched.username && formik.errors.username) ? true : false}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.username}
                            value={formik.values.username}  
                            />
                    </Grid>
                    <Grid size={12}>
                        <InputLabel sx={{ minWidth: '100%', fontSize: 20, marginTop:2}} htmlFor="password">Password</InputLabel>
                            <TextField
                                id="password"
                                name="password"
                                sx={{ minWidth: '100%', background:'#e8e5e3'}}
                                error={(formik.touched.password && formik.errors.password) ? true : false}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.password}
                                value={formik.values.password}  
                            />
                    </Grid>
                    <Grid size={12}>
                        <Button 
                        sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2, textTransform: 'none' }}
                        type='submit'
                        variant='contained'
                        color='primary'
                        >Login</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        </Box>
  )
}

export default LoginPage