import React from 'react';
import '../src/Component/Style.css';
import { BrowserRouter } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AllRoutes from './Component/Routes';
import { Box } from '@mui/material';
function App() {

  const isLogged = sessionStorage.getItem('isLogin')
  const isLogin = isLogged ? JSON.parse(isLogged) : false
  return (
    <>
      <React.Suspense fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }>
        <BrowserRouter 
        >
          {
            isLogin && <Navbar
              isLogin={isLogin}
            />
          }

          <AllRoutes />
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </>
  );
};



export default App;
