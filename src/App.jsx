import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import AdminPage from './components/AdminPage'
import GuestPage from './components/GuestPage'
import Unauthorized from './components/Unauthorized'
import UserPage from './components/UserPage'
import ProtectedRoute from './context/ProtectedRoute'
function App() {
  

  return (
    <>
<Router>
  <Routes>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/admin' element={<ProtectedRoute roles={['admins']}>
  <AdminPage />
    </ProtectedRoute>} />
    <Route path='/guest' element={<GuestPage />} />
    <Route path='/unauther' element={<Unauthorized />} />
    <Route path='/user' element={<UserPage />} />
  </Routes>
</Router>
     
    </>
  )
}

export default App
