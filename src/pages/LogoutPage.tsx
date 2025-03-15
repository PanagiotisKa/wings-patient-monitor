

function LogoutPage() {
  localStorage.removeItem('token');
  return (
    <div>Logout</div>
  )
}

export default LogoutPage