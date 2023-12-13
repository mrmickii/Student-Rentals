import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Login from './Components/Login'
import Signup from './Components/Signup'
import LandingPage from './Components/LandingPage';
import AddProperty from './Components/AddProperty'
import Details from './Components/Details'
import Logout from './Components/Logout';
import Admin from './Components/Admin';
import UpdateProperty from './Components/UpdateProperty'
import DeleteProperty from './Components/DeleteProperty';
import DeleteStudent from './Components/DeleteStudent';
import EditProfile from './Components/EditProfile';
import Notification from './Components/Notification';
import Booking from './Components/Booking';
<<<<<<< HEAD
import { ConfirmPage } from './Components/ConfirmPage';
=======
import StudentAccount from './Components/StudentAccount';
>>>>>>> b823faeac739f7361b5c112595e71dc3db35a7a5

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
          <Route exact path='/details/:propid' element={<Details />}></Route>
          <Route exact path='/studentaccount' element={<StudentAccount />}> </Route>
          <Route exact path='/editprofile' element={<EditProfile />}> </Route>
          <Route exact path='/notifications' element={<Notification />}> </Route>
<<<<<<< HEAD
          <Route exact path='/insertBooking' element={<Booking />}> </Route>
          <Route exact path='/confirm' element={<ConfirmPage />}> </Route>
=======
          <Route exact path='/booking' element={<Booking />}> </Route>
>>>>>>> b823faeac739f7361b5c112595e71dc3db35a7a5
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)
