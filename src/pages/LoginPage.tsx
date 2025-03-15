import {useFormik} from 'formik'
import { useNavigate } from 'react-router'
import { Button, TextField, InputLabel, Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LoginService from '../services/login';


type values = {
    username: string,
    password: string
}

type errors = {
    username?: string,
    password?: string
}



const validate = (values: values) => {
    const errors:errors = {};

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
    <Box>
        <Grid container spacing={2}>
            <Grid size={12}>
                <Typography variant='h4'>Login</Typography>
            </Grid>
                <Grid size={12}>    
                    <form onSubmit={formik.handleSubmit}>
                        <Grid size={12}>
                            <InputLabel htmlFor="username">User Name</InputLabel>
                            <TextField
                                id="username"
                                name="username"
                                error={(formik.touched.username && formik.errors.username) ? true : false}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.username}
                                value={formik.values.username}  
                                />
                        </Grid>
                        <Grid size={12}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                                <TextField
                                    id="password"
                                    name="password"
                                    error={(formik.touched.password && formik.errors.password) ? true : false}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={formik.errors.password}
                                    value={formik.values.password}  
                                />
                        </Grid>
                        <Grid size={12}>
                            <Button 
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