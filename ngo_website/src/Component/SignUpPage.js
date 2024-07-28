import React, { useState } from "react";

import "./Style.css";
import {
  Box, Button, FormControl, Grid, IconButton,
  InputAdornment, InputLabel, OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
  // React States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [mobileNumberError, setMobileNumberError] = useState(false)
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState('')
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate()
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    console.log('name value', event?.target?.value, name, email, password, mobileNumber)

    if (name === '') {
      setError('All * field is required')
      setNameError(true)
    } else {
      setError('')

      setNameError(false)
    }
    if (email === '') {
      setError('All * field is required')

      setEmailError(true)
    } else {
      setError('')
      setEmailError(false)
    }
    if (mobileNumber === '') {
      setError('All * field is required')

      setMobileNumberError(true)
    } else {
      setError('')
      setMobileNumberError(false)
    }
    if (password === '') {
      setError('All * field is required')

      setPasswordError(true)
    } else {
      setError('')
      setPasswordError(false)
      // alert("successfully registered")
      localStorage.setItem('registrationFormData', JSON.stringify({
        'name': name,
        'email': email,
        'mobileNumber': mobileNumber,
        'password': password
      }))
      alert('Registered Successfully, Please login with your credentials')
      navigate('/')

    }

  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit}
      >

        <Box >
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              borderRadius: '10px'
            }}
            variant="outlined"
            required
            error={nameError}
          >
            <InputLabel htmlFor="outlined-adornment-email">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={'text'}
              label="Name"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
            />
          </FormControl>
          <Typography sx={{ color: 'red', fontSize: '16px', px: 2 }}>{error?.name}</Typography>
        </Box>
        <Box>
          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            required
            error={emailError}
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={'email'}
              label="Email"
              value={email}

              onChange={(e) => setEmail(e?.target?.value)}

            />
          </FormControl>
          <Typography sx={{ color: 'red', fontSize: '16px', px: 2 }}>{error?.email}</Typography>

        </Box>
        <Box>
          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            required
            error={mobileNumberError}
          >
            <InputLabel htmlFor="outlined-adornment-email">Mobile Number</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={'number'}
              label="Mobile Number"
              value={mobileNumber}

              onChange={(e) => setMobileNumber(e?.target?.value)}

            />

          </FormControl>
          <Typography sx={{ color: 'red', fontSize: '16px', px: 2 }}>{error?.mobileNumber}</Typography>

        </Box>
        <Box>
          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            required
            error={passwordError}
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
          </FormControl>

        </Box>
        <Typography sx={{ color: 'red', fontSize: '16px', px: 2 }}>{error}</Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', }}
        >
          <Button
            type="submit"
            sx={{ width: '35%', fontWeight: 600, p: 2, mt: 2, ml: 1 }}
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
          <Button
            sx={{ width: '25%', fontWeight: 600, p: 2, mt: 2, mr: 0 }}

            variant="contained"
            onClick={() => navigate('/')}
          >Back</Button>
        </Box>
      </Box>
    </>
    
  );

  return (
    <Box
      className="backImage"

    >
      <Grid container
        spacing={3}
        sx={{ height: '100vh' }}
      >
        <Grid
          xs={12} md={12} sm={12} lg={4}
          item
          sx={{ margin: 'auto' }}

        >

          <Box
            sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              backgroundColor: 'white',
              padding: '2rem',
            }}>
            <Box className="title">Registation Form</Box>
            {isSubmitted ?
              <Box>User is successfully logged in</Box> :
              renderForm}

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUpPage;
