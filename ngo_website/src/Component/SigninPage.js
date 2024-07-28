import React, { useState } from "react";

import "./Style.css";
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import NgoBackgroundImage from '../Assets/ngo_background_image.jpg'
const SignInPage = () => {
  // React States
  const [showPassword, setShowPassword] = React.useState(false);
  const [validData, setValidData] = useState(false)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userFormData = localStorage.getItem(('registrationFormData'))
  const formData = JSON.parse(userFormData)
  // User Login info
  const database = [
    {
      username: formData?.email || formData?.mobileNumber,
      password: formData?.password
    },
  ];

  const errors = {
    uname: "invalid username or password",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    // Find user login info
    const userData = database.find((user) => {
      return user.username === (formData?.email || formData?.mobileNumber)
    });
    // Compare user info
    if ((userData?.username === userName)) {
      if (userData?.password === password) {
        setIsSubmitted(true)
        navigate('/home')
        sessionStorage.setItem('isLogin', Boolean(true))
      } else {
        setErrorMessages({ name: 'pass', message: errors.pass })

      }
    } else {
      setErrorMessages({ name: "uname", message: errors?.uname });
    }
    // if (userData) {
    //   if (userData.password !== formData?.password) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors?.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors?.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Box className="error">{errorMessages.message}</Box>
    );

  // JSX code for login form
  const renderForm = (
    <Box className="form">
      <Box component='form' onSubmit={(e) => handleSubmit(e)}>
        {/* <Box className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </Box> */}

        <Box >
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              borderRadius: '10px'
            }}
            variant="outlined"
            required
          // error={nameError}
          >
            <InputLabel htmlFor="outlined-adornment-email">Enter email/mobile number</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={'text'}
              label="Enter email/mobile nunber"
              value={userName}
              onChange={(e) => setUserName(e?.target?.value)}
            />
          </FormControl>

          {/* <Typography sx={{ color: 'red', fontSize: '16px', px: 2 }}>{error?.name}</Typography> */}
        </Box>
        <Box>
          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            required
          // error={passwordError}
          >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              value={password}

              onChange={(e) => setPassword(e?.target?.value)}

              label="Password"
            />
            {renderErrorMessage("pass")}

          </FormControl>

        </Box>
        {renderErrorMessage("uname")}

        {/* <Box className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </Box> */}
        <Box
          className="button-container"
        >
          <Button
            type="submit"
            sx={{ 
              width: 'auto', 
              p: 1.5, m: 1, 
              fontSize: '16px',
               fontWeight: 600 
              }}

            variant="contained">Submit</Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      className="backImage"
      sx={{ height: { lg: '0', md: '100vh', sm: '100vh', xs: '100vh' } }}
    >
      <Grid container
        spacing={3}
        sx={{
          height: { lg: '100vh', xs: '0' }
        }}
      >
        <Grid item
          sx={{ 
            margin: {lg:'auto',md:'10% auto',sm:'15% auto',xs:'5% auto'} 
          }}

          xs={12} sm={6} lg={4} md={6}>
          <Box
            sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              backgroundColor: 'white',
              padding: '2rem',
              margin: { lg: '0px', md: '16px', sm: '16px', xs: '16px' }
            }}
            className="login-form">
            <Box className="title">Sign In</Box>
            {isSubmitted ?
              navigate('/home')
              // <Box>User is successfully logged in</Box>
              :
              renderForm}

            <Box>
              <Typography>
                if not registered! <Link underline="none" href='/registration'>Register here</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
}

export default SignInPage;
