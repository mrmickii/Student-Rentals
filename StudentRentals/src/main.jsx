import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Login from './Components/Login'
import Signup from './Components/Signup'
import LandingPage from './Components/LandingPage';
import AddProperty from './Components/AddProperty'
import Details from './Components/Details'
<<<<<<< HEAD
import Logout from './Components/Logout';
import Admin from './Components/Admin';
import UpdateProperty from './Components/UpdateProperty'
import DeleteProperty from './Components/DeleteProperty';
import DeleteStudent from './Components/DeleteStudent';
import EditProfile from './Components/EditProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/addproperty' element={<AddProperty />}></Route>
          <Route exact path='/updateproperty' element={<UpdateProperty />}></Route>
          <Route exact path='/deleteproperty' element={<DeleteProperty />}></Route>
          <Route exact path='/deletestudent' element={<DeleteStudent />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/logout' element={<Logout />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/admin' element={<Admin />}></Route>
          <Route exact path='/details/:propid' element={<Details />} />
          <Route exact path='/editprofile' element={<EditProfile />} />
        </Routes>
      </Router>
    </AuthProvider>

=======
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
>>>>>>> 77b1d2172b9d74f570c8df238b9d73e49fbc4fe2
  </React.StrictMode>,
)
