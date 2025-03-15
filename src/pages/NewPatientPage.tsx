import {useFormik} from 'formik'
import { useNavigate } from 'react-router'
import { Button, TextField, InputLabel, Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { newUserType } from '../types/userTypes';


const validate = (values: newUserType) => {

}
function NewPatientPage() {

  const navigate = useNavigate()
  
      const formik = useFormik({
          initialValues: {
              firstname: '',
              lastname: '',
              email: '',
              facility_id: 0,
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
          onSubmit: async (values) => {
              alert(JSON.stringify(values, null, 2));
              // await LoginService(values.username, values.password)
              navigate('/')
          }
          })
  

  return (
    <Box>
      <Grid size={12}>
        <Typography variant='h4'>Add New Patient</Typography>
      </Grid>
      <Grid size={12}>
        <form onSubmit={formik.handleSubmit}>
        <Grid size={12}>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <TextField
              id="firstname"
              name="firstname"
              error={(formik.touched.firstname && formik.errors.firstname) ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.firstname}
              value={formik.values.firstname}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <TextField
              id="lastname"
              name="lastname"
              error={(formik.touched.lastname && formik.errors.lastname) ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.lastname}
              value={formik.values.lastname}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="age">Age</InputLabel>
          <TextField
              id="age"
              name="age"
              type="number"
              error={(formik.touched.age && formik.errors.age) ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.age}
              value={formik.values.age}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="amka">ΑΜΚΑ</InputLabel>
          <TextField
              id="amka"
              name="amka"
              error={(formik.touched.amka && formik.errors.amka) ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.amka}
              value={formik.values.amka}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                  id="email"
                  name="email"
                  error={(formik.touched.email && formik.errors.email) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.email}
                  value={formik.values.email}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="address_street">Address Street</InputLabel>
              <TextField
                  id="address_street"
                  name="address_street"
                  error={(formik.touched.address_street && formik.errors.address_street) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.address_street}
                  value={formik.values.address_street}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="address_number">Address Number</InputLabel>
              <TextField
                  id="address_number"
                  name="address_number"
                  error={(formik.touched.address_number && formik.errors.address_number) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.address_number}
                  value={formik.values.address_number}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="address_number">Address Number</InputLabel>
              <TextField
                  id="address_number"
                  name="address_number"
                  error={(formik.touched.address_number && formik.errors.address_number) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.address_number}
                  value={formik.values.address_number}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="address_city">City</InputLabel>
              <TextField
                  id="address_city"
                  name="address_city"
                  error={(formik.touched.address_city && formik.errors.address_city) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.address_city}
                  value={formik.values.address_city}  
              />
      </Grid>
      <Grid size={12}>
          <InputLabel htmlFor="address_postalcode">Postal Code</InputLabel>
              <TextField
                  id="address_postalcode"
                  name="address_postalcode"
                  error={(formik.touched.address_postalcode && formik.errors.address_postalcode) ? true : false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.address_postalcode}
                  value={formik.values.address_postalcode}  
              />
      </Grid>
      <Grid size={12}>
          <Button 
          type='submit'
          variant='contained'
          color='primary'
          >Add New Patient</Button>
      </Grid>

        </form>
      </Grid>


    </Box>
  )
}

export default NewPatientPage