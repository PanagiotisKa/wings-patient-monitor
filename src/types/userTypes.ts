export type userInfoType = {
    user_id: string
    username: string
    password: string
    email: string
    created_at: string
    status: string
    role : {
        role_id: string,
        role_name: string,
        role_description: string,
        permission: {
            "permission_id": string,
            "permission_name": string,
            "read": boolean,
            "write": boolean,
            "delete": boolean,
            "self_entity": boolean
            "group_entity": boolean
            "all_entities": boolean
        },
    }
    "locale": string
    "sub": string
    "userRole": string
    "cognifit_user": boolean
    "access_token" : string
    "refresh_token" : string
}


export type newUserType = {
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