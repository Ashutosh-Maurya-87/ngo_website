import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from './SigninPage';
import SignUpPage from './SignUpPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Contact from './Pages/Contact';
import { PrivateRoute } from './PrivateRoute';
function AllRoutes() {

    const isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    console.log('isLogin', isLogin)
    return (
        <>
            <Routes>
                <Route index path='/' element={<SignInPage />} />

                <Route path='/login' element={<SignInPage />} />
                <Route path='/registration' element={<SignUpPage />} />

                <Route path='/home' element={<PrivateRoute Component={Home} isLogin={isLogin} />} />
                <Route path='/about' element={<PrivateRoute Component={About} isLogin={isLogin}/>} />
                <Route path='/event' element={<PrivateRoute Component={Event} isLogin={isLogin}/>} />
                <Route path='/contact' element={<PrivateRoute Component={Contact} isLogin={isLogin}/>} />
                <Route path='*' element={<SignInPage />} />


            </Routes>

        </>
    );
};



export default AllRoutes;
