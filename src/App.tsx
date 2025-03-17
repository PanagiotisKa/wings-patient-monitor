import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/layouts/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import NewPatientPage from './pages/NewPatientPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import LogoutPage from './pages/LogoutPage'
import PatientDetailsPage from './pages/PatientDetailsPage'
import ErrorBoundary from './components/common/ErrorBoundary'
import TokenContext from './services/tokenContext'
import { useState } from 'react'


function App() {
 const token = localStorage.getItem('token') || ''
const [memoryToken, setMemoryToken] = useState<string>(token)

  return (
    <>
    <TokenContext.Provider value={{memoryToken, setMemoryToken}}>
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
    </TokenContext.Provider>
</>
  )
}

export default App
