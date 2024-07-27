import logo from './logo.svg';
import '../src/Component/Style.css';
import Login from './Component/Login';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
// import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";
// import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
// import RegistrationPage from './Component/Registration';
import LoginPage from './Component/Login';
import SignInPage from './Component/SigninPage';
import SignUpPage from './Component/SignUpPage';
import Home from './Component/Pages/Home';
import Event from './Component/Pages/Event';
import Contact from './Component/Pages/Contact';
import Navbar from './Component/Navbar';
import About from './Component/Pages/About';
import Footer from './Component/Footer';
import { ProtectedRoutes } from './Component/PrivateRoute'
import AllRoutes from './Component/Routes';
function App() {
  // const CustomThemeContext = createContext();

  // const CustomThemeProvider = props => {
  //   const [currentTheme, setCurrentTheme] = useState('light');

  //   const toggleTheme = () => {
  //     let newValue = currentTheme === 'light' ? 'dark' : 'light';
  //     setCurrentTheme(newValue);
  //   }

  //   const themeData = { currentTheme, toggleTheme };
  //   const useThemeContext = () => {
  
  const isLogin = JSON.parse(localStorage.getItem('isLogin'))
  console.log('isLogin', isLogin)
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Navbar
          isLogin={isLogin}
        />
        <AllRoutes />
        <Footer />
      </BrowserRouter></>
  );
};



export default App;
