import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import LandingPage from './Components/LandingPage';
import Admin from './Components/Admin'
import Details from './Components/Details'
import Notification from './Components/Notification';
import Booking from './Components/Booking';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/admin' element={<Admin />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/notificationPayment' element={<Notification/>}></Route>
        <Route exact path='/insertBooking' element={<Booking/>}></Route>
        <Route exact path='/details/:propid' element={<Details />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
