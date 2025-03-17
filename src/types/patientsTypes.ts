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

  export type patientDetailedType = {
    address_city?: string
    address_number?: string
    address_postalcode?: string
    address_street?: string
    age?: number
    birth_date?: string
    email?: string
    enabled?: boolean
    ethnicity?: string
    facility?: {
      facility_id?: number, 
      facility_name?: string, 
      facility_address?: string}
    firstname?: string
    height : number
     lastname?: string
    num_of_activities?: number
    patient_id?: number
    phonenumber?: string
    sex: string
    weight: number
    conditions :{
      code?: string,
      condition_id?: number,
      name?: string,
      name_el?: string
    }[]
  }




  export type patientLastDataType = {
    timestamp: string
    heart_rate: number
    z_accel: number

}


export type patient24hDataType = {
  timestamp: string
  patient_id: number
  heart_rate: string
  dia_blood_pressure: string
  sys_blood_pressure: string

}


export type newPatientType = {
  firstname: string
  lastname: string
  address_street: string
  facility_id: number
  address_number: string
  address_city: string
  address_postalcode: string
  phonenumber: string
  sex: string
  age: number
  email: string
  amka: string
  ext_patient: boolean
}


export type newPatientErrorType = {
  firstname?: string,
  lastname?: string,
  email?: string,
  facility_id?: number,
  address_street?: string,
  address_number?: string,
  address_city?: string,
  address_postalcode?: string,
  phonenumber?: string,
  sex?: string,
  age?: number,
  amka?: string,
  ext_patient?: boolean
}