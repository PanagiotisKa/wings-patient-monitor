

export default function LoginOutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id')
    return true
}
