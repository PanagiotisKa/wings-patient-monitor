import {useFormik} from 'formik'
import { useNavigate } from 'react-router'
import { Button, TextField, InputLabel, Box, Typography, Select, MenuItem, CircularProgress, InputAdornment } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { patientType  } from '../types/patientsTypes'
import { useState, useEffect } from 'react'
import getFacilitiesData from '../services/getFacilities'
import { facilityType } from '../types/otherTypes'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import HomeIcon from '@mui/icons-material/Home'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { patientErrorType } from '../types/patientsTypes'
import createNewPatient from '../services/createNewPatient'


const validate = (values: patientType ) => {
    const errors: patientErrorType  = { };

    if (!values.firstname) {
        errors.firstname = 'Το πεδίο είναι υποχρεωτικό';
      }

    if (!values.lastname) {
    errors.lastname = 'Το πεδίο είναι υποχρεωτικό';
    }

    if (!values.email) {
    errors.email = 'Το πεδίο είναι υποχρεωτικό';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    }

      return errors;
}

function NewPatientPage() {
    const token = localStorage.getItem('token')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const [facilities, setFacilities] = useState<facilityType[] | null>(null)
    
    async function getData(token: string){
        if(token !== null){
            const response = await getFacilitiesData(token)
            if(response !== null && !(response instanceof Error)){
                setFacilities(response)
            }
        }
    }

    useEffect(() => {
        if(token !== null) {
            getData(token)
            } else {
            navigate('/login');
            }
    } , [])

    
  const navigate = useNavigate()
  
      const formik = useFormik({
          initialValues: {
              firstname: '',
              lastname: '',
              email: '',
              facility_id: 1,
              address_street: '',
              address_number: '',
              address_city: '',
              address_postalcode: '',
              phonenumber: '',
              sex: '',
              age: 0,
              amka: '',
              ext_patient: false

          },
          validate,
          onSubmit: async (values: patientType) => {
            if(token !== null) {
             const response =  await createNewPatient(token , values)
             if(response !== null && !(response instanceof Error)){
                navigate('/')
             } else {
              setErrorMessage("Υπήρξε κάποιο πρόβλημα")
             }

          } else {
            setErrorMessage("Συνδεθείτε ξανά")
          }
        }
    })
  

  return (
    <>
        <Typography variant='h3'>Προσθήκη Νέου Ασθενή</Typography>
        {facilities == null ? <CircularProgress/> :
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: '100%', fontSize: 20, marginTop:2}} htmlFor="firstname">Όνομα</InputLabel>
                    <TextField 
                        id="firstname"
                        name="firstname"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.firstname && formik.errors.firstname) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.firstname}
                        value={formik.values.firstname}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <BadgeOutlinedIcon/>
                                </InputAdornment>
                              ),
                            },
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200,  fontSize: 20, marginTop:2}} htmlFor="lastname">Επώνυμο</InputLabel>
                    <TextField
                        fullWidth
                        id="lastname"
                        name="lastname"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.lastname && formik.errors.lastname) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.lastname}
                        value={formik.values.lastname}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <BadgeOutlinedIcon/>
                                </InputAdornment>
                              ),
                            },
                        }}
                        />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, fontSize: 20, marginTop:2}} htmlFor="age">Ηλικία</InputLabel>
                    <TextField
                    fullWidth
                        id="age"
                        name="age"
                        type="number"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.age && formik.errors.age) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.age}
                        value={formik.values.age}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarTodayIcon/>
                                </InputAdornment>
                              ),
                            },
                        }} 
                        />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="sex">Φύλο</InputLabel>
                    <Select
                        id="sex"
                        name="sex"
                        variant="outlined"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        value={formik.values.sex}
                        margin="dense" 
                        onChange={formik.handleChange}
                    >
                        <MenuItem key={0} value={"Male"}>Άνδρας</MenuItem>
                        <MenuItem key={1} value={"Female"}>Γυναίκα</MenuItem>
                    </Select>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="facility_id">Ίδρυμα Υγείας</InputLabel>
                    <Select
                        id="facility_id"
                        name="facility_id"
                        variant="outlined"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        value={formik.values.facility_id}
                        margin="dense" 
                        onChange={formik.handleChange}  
                    > 
                    {facilities !== null &&
                        facilities.map((facility) => {
                            return <MenuItem key={facility.facility_id} value={facility.facility_id}>{facility.facility_name}</MenuItem>
                        })
                    }

                    </Select>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="amka">Α.Μ.Κ.Α.</InputLabel>
                    <TextField
                        id="amka"
                        name="amka"
                        sx={{minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.amka && formik.errors.amka) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.amka}
                        value={formik.values.amka}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LocalHospitalIcon/>
                                </InputAdornment>
                              ),
                            },
                        }} 
                        />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="email">Email</InputLabel>
                    <TextField
                        id="email"
                        name="email"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.email && formik.errors.email) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.email}
                        value={formik.values.email}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AlternateEmailOutlinedIcon/>
                                </InputAdornment>
                              ),
                            },
                        }} 
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="address_street">Οδός</InputLabel>
                    <TextField
                        id="address_street"
                        name="address_street"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.address_street && formik.errors.address_street) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.address_street}
                        value={formik.values.address_street}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HomeIcon/>
                                </InputAdornment>
                              ),
                            },
                        }} 
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="address_number">Αριθμός</InputLabel>
                    <TextField
                        id="address_number"
                        name="address_number"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.address_number && formik.errors.address_number) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.address_number}
                        value={formik.values.address_number}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HomeIcon/>
                                </InputAdornment>
                              ),
                            },
                        }} 
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="address_city">Πόλη</InputLabel>
                    <TextField
                        id="address_city"
                        name="address_city"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.address_city && formik.errors.address_city) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.address_city}
                        value={formik.values.address_city}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HomeIcon/>
                                </InputAdornment>
                              ),
                            },
                        }}  
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="address_postalcode">Ταχυδρομικός Κώδικας</InputLabel>
                    <TextField
                        id="address_postalcode"
                        name="address_postalcode"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.address_postalcode && formik.errors.address_postalcode) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.address_postalcode}
                        value={formik.values.address_postalcode}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HomeIcon/>
                                </InputAdornment>
                              ),
                            },
                        }}  
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <InputLabel sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2}} htmlFor="phonenumber">Τηλέφωνο</InputLabel>
                    <TextField
                        id="phonenumber"
                        name="phonenumber"
                        sx={{ minWidth: '100%', background:'#e8e5e3'}}
                        error={(formik.touched.phonenumber && formik.errors.phonenumber) ? true : false}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.phonenumber}
                        value={formik.values.phonenumber}
                        slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneAndroidOutlinedIcon />
                                </InputAdornment>
                              ),
                            },
                        }}  
                    />
                </Grid>
                <Grid size={12}>
                    <Button 
                    sx={{ minWidth: 200, width:'100%', fontSize: 20, marginTop:2, textTransform: 'none' }} 
                    type='submit'
                    variant='contained'
                    color='primary'
                    >Προσθήκη Νέου Ασθενή</Button>
                </Grid>
            </Grid>
        </form>
        }
         <Box sx={{ display: 'flex', justifyContent: 'center', p:3}} >
    {errorMessage.length > 0 && 
        <Typography variant='h3' color={'#fc4503'}>{errorMessage}</Typography>
    }
    </Box>
</>
  )
}

export default NewPatientPage