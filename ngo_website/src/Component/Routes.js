import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './SigninPage';
import SignUpPage from './SignUpPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Contact from './Pages/Contact';
import { ProtectedRoutes } from './PrivateRoute';
function AllRoutes() {
  
  const isLogin = JSON.parse(localStorage.getItem('isLogin'))
  console.log('isLogin', isLogin)
  return (
    <>
      <Routes>
        <Route exact path='/' element={<SignInPage />} />
        <Route exact path='/registration' element={<SignUpPage />} />


        <Route path='/home' element={<ProtectedRoutes Component={Home} />} />
        <Route path='/about' element={<ProtectedRoutes Component={About} />} />
        <Route path='/event' element={<ProtectedRoutes Component={Event} />} />
        <Route path='/contact' element={<ProtectedRoutes Component={Contact} />} />
        <Route exact path='/*' element={<SignInPage />} />


      </Routes>
      
    </>
  );
};



export default AllRoutes;
