import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/layouts/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import NewPatientPage from './pages/NewPatientPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import LogoutPage from './pages/LogoutPage'
import PatientDetailsPage from './pages/PatientdetailsPage'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
      <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/logout' element={<LogoutPage/>}/>
        <Route path='/patient/:patient_id' element={<PatientDetailsPage/>}/>
        <Route path='/new_patient' element={<NewPatientPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </div>
      </ErrorBoundary>
    </BrowserRouter>
</>
  )
}

export default App
