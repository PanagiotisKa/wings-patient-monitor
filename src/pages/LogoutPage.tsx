

function LogoutPage() {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');


  return (
    <div>Logout</div>
  )
}

export default LogoutPage