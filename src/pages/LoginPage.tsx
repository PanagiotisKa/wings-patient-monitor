import {ErrorMessage, useFormik} from 'formik'
import { useNavigate } from 'react-router'
import { Button, TextField, InputLabel, Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LoginService from '../services/login';
import { LoginFormErrorTypes, LoginFormValuesTypes } from '../types/userTypes';
import { useContext, useState } from 'react';
import TokenContext from '../services/tokenContext';


const validate = (values: LoginFormValuesTypes) => {
    const errors:LoginFormErrorTypes = {};

    if (!values.username) {
      errors.username = 'Το πεδίο είναι υποχρεωτικό'};

    if (!values.password) {
      errors.password = 'Το πεδίο είναι υποχρεωτικό';
    }

    return errors
}

function LoginPage() {

    const memoryToken = useContext(TokenContext)
    const [errorMessage, setErrorMessage] = useState<string>('')
    
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: async (values) => {

          const response =  await LoginService(values.username, values.password)
          if ('access_token' in response && response.access_token !== undefined) {
            memoryToken.setMemoryToken(response.access_token)
              navigate('/')
          } else {
            setErrorMessage("Υπήρξε κάποιο πρόβλημα στην σύνδεση σας. Παρακαλώ προσπαθήστε ξανά.")
          }
        }
        })


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center'}} >
        <Grid container spacing={2}>
            <Grid size={12}>
                <Typography variant='h2' color={'primary'}>Σύνδεση</Typography>
            </Grid>
            <Grid size={12}>    
                <form onSubmit={formik.handleSubmit}>
                    <Grid size={12}>
                        <InputLabel sx={{ minWidth: '90%', fontSize: 20, marginTop:2}} htmlFor="username">Όνομα Χρήστη*</InputLabel>
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
                        <InputLabel sx={{ minWidth: '100%', fontSize: 20, marginTop:2}} htmlFor="password">Κωδικός*</InputLabel>
                            <TextField
                                id="password"
                                name="password"
                                sx={{ minWidth: '100%', background:'#e8e5e3'}}
                                error={(formik.touched.password && formik.errors.password) ? true : false}
                                onChange={formik.handleChange}
                                type='password'
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
                        >Σύνδεση</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
    {ErrorMessage.length > 0 && 
        <Typography variant='h3' color={'#fc4503'}>{errorMessage}</Typography>
    }
    </Box>
    </>
  )
}

export default LoginPage