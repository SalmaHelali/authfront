import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import HomePage from './Components/Navbar';
import Profile from './Components/Profile';
import Register from './Components/Auth/Register';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute';
import AdminRoute from './Components/Admin/AdminRoute';
import AdminProfile from './Components/Admin/AdminProfile'
import Listuser from './Components/ListOfuser';
import Animal from './Components/Home/Animal';
import UsersAdmin from './Components/Admin/UsersAdmin';
function App() {


  return (
    <div className="App" >
      
<HomePage/>

<Routes>
  <Route path='/Signin' element= {<Login/>} />
  <Route path='/Signup' element= {<Register/>} />
  <Route path='/' element={<Home/>} />
  <Route path='/users' element={<Listuser/>} />
  <Route path='/Animals' element ={<Animal/>}></Route>
  <Route  path='/UserAdmin' element={<UsersAdmin/> }  ></Route>

  <Route path="/Profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
   

  <Route
  path="/Admin"
  element={<AdminRoute> <AdminProfile/> </AdminRoute>}
  />



</Routes>

    </div>
  );
}

export default App;
