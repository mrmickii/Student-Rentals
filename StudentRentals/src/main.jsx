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
import StudentAccount from './Components/StudentAccount';
import PaymentPage from './Components/PaymentPage';
import ConfirmationPage from './Components/ConfirmationPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/addproperty' element={<AddProperty />} />
        <Route exact path='/updateproperty' element={<UpdateProperty />} />
        <Route exact path='/deleteproperty' element={<DeleteProperty />} />
        <Route exact path='/deletestudent' element={<DeleteStudent />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='/details/:propId' element={<Details />} />
        <Route exact path='/studentaccount' element={<StudentAccount />} /> 
        <Route exact path='/editprofile' element={<EditProfile />} /> 
        <Route exact path='/notifications' element={<Notification />} /> 
        <Route exact path='/booking/:propId' element={<Booking />} /> 
        <Route exact path='/payment/:propId' element={<PaymentPage />} />
        <Route exact path='/confirmation' element={<ConfirmationPage />} />
        
      
        <Route exact path='/insertBooking' element={<Booking />}> </Route>
      </Routes>
    </Router>
  </AuthProvider>,
)
