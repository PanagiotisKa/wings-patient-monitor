export type patientType = {
    address_city: string
    address_number: string
    address_postalcode: string
    address_street: string
    birth_date: string
    cognifit_user: boolean
    email: string
    enabled: boolean
    ethnicity: string
    firstname: string
    height: number
    lastname: string,
    patient_id: number,
    phonenumber: string,
    sex: string,
    weight: number
  }


  export type patientLastDataType = {
    timestamp: string
    heart_rate: number
    z_accel: number

}