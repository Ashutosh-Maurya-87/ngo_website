
// import React from "react";
// import { BrowserRouter, Route, Routes,Navigate, useNavigate } from 'react-router-dom';
// import * as reactIconsFa from "https://cdn.skypack.dev/react-icons@4.2.0/fa";
// import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
// import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";
// import Alert from "./Alert";
// import { Button, Divider, Input, Typography } from "@mui/material";
// const { useState, createContext, useContext } = React;
// const { ThemeProvider, withStyles } = reactJss;
// // const { BrowserRouter, Switch, Route, useHistory } = ReactRouterDOM;
// const { FaChessBishop, FaPlusCircle, FaArrowLeft } = reactIconsFa;
// const { RiMoonClearLine, RiSunLine } = reactIconsRi;

// const mainTheme = {
//     sizes: {
//         container: '850px'
//     },
//     colors: {
//         primary: '#4299e1',
//         primaryLight: '#fff',
//         secondary: '#818CF8',
//         secondaryLight: '#fff',
//         green: '#10B981'
//     }
// }

// const lightTheme = {
//     ...mainTheme,
//     type: 'light',
//     background: {
//         default: '#f7fafc',
//         paper: '#fff',
//         linkHover: '#edf2f7',
//         input: '#fff',
//     },
//     alert: {
//         error: '#fff0f3',
//         success: '#a7f3d0'
//     },
//     border: {
//         primary: '#e2e2e2',
//         input: '#e2e8f0'
//     },
//     progress: {
//         linear: '#e6fffa',
//         linearBar: '#bde8e0'
//     },
//     text: {
//         primary: '#000',
//         link: '#718096',
//         activeLink: '#2b3044',
//         outlinedButton: '#4c4f52',
//         input: '#4a5568',
//     },
//     snackbar: {
//         background: '#323232',
//         text: '#fff'
//     },
//     blob: 'C7D2FE'
// }

// const darkTheme = {
//     ...mainTheme,
//     type: 'dark',
//     background: {
//         default: '#161a23',
//         paper: '#252836',
//         linkHover: '#1c2633',
//         input: '#2d303e',
//     },
//     alert: {
//         error: '#a54a5c',
//         success: '#359a6c'
//     },
//     border: {
//         primary: '#43454e',
//         input: '#505261'
//     },
//     progress: {
//         linear: '#588e83',
//         linearBar: '#32695f'
//     },
//     text: {
//         primary: '#fff',
//         link: '#8493a9',
//         activeLink: '#9b9fb1',
//         outlinedButton: '#fff',
//         input: '#cccede',
//     },
//     snackbar: {
//         background: '#fff',
//         text: '#000'
//     },
//     blob: '6373b3'
// }

// const loginLayoutStyles = theme => ({
//     loginLayout: {
//         maxWidth: '100vw',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: `${theme.background.default} url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve" height="800px" width="800px"><g><path fill="%23${theme.blob}" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" fill-rule="nonzero"/></g></svg>') 50% no-repeat`,
//     },
//     rightAngleAction: {
//         position: 'absolute',
//         top: '10px',
//         right: '20px'
//     }
// });

// const loginPageStyles = theme => ({
//     '@keyframes slideLeft': {
//         from: {
//             opacity: 0,
//             transform: 'translateX(30px) scale(0.98)'
//         },
//         to: {
//             opacity: 1,
//             transform: 'translateX(0px) scale(1)'
//         }
//     },
//     loginCard: {
//         animation: '$slideLeft ease-in 0.3s',
//         boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
//         background: theme.background.paper,
//         color: theme.text.primary,
//         width: '410px',
//         padding: '2rem',
//         position: 'relative'
//     },
//     forgotPassLink: {
//         color: theme.text.activeLink,
//         textDecoration: 'none',
//         fontSize: '0.9em',
//         '&:hover': {
//             textDecoration: 'underline'
//         }
//     },
//     cardHeader: {
//         color: theme.text.activeLink,
//         fontWeight: 600,
//         fontSize: '1.6em'
//     }
// });

// const buttonStyles = theme => ({
//     buttonMain: {
//         width: (props) => props.fullWidth ? '100%' : 'auto',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingLeft: '1.5rem',
//         paddingRight: '1.5rem',
//         paddingTop: '.75rem',
//         paddingBottom: '.75rem',
//         background: (props) => {
//             if (props.color) return theme.colors[props.color];
//             return theme.colors.primary;
//         },
//         borderRadius: '.25rem',
//         border: 'none',
//         color: '#fff',
//         fontFamily: 'inherit',
//         outline: 'none',
//         cursor: 'pointer',
//         '&:hover': {
//             filter: 'brightness(90%)'
//         },
//         '&:focus': {
//             boxShadow: (props) => {
//                 if (props.color) return `0 0 0 3px ${theme.colors[props.color] + '42'}`;
//                 return `0 0 0 3px ${theme.colors.primary + '42'}`;
//             },
//             outlineColor: 'rgba(0,0,0,0)',
//             outlineOffset: '2px',
//             outlineStyle: 'solid',
//             borderColor: theme.colors.primary
//         }
//     },
//     iconLeft: {
//         marginRight: '.5rem',
//         display: 'flex',
//         alignItems: 'center'
//     }
// });

// const toggleThemeButtonStyles = theme => ({
//     button: {
//         border: 'none',
//         padding: '5px',
//         cursor: 'pointer',
//         marginLeft: '15px',
//         fontSize: (props) => props.size ? props.size : '1.5em',
//         display: 'flex',
//         borderRadius: '25px',
//         color: theme.text.outlinedButton,
//         background: (props) => {
//             if (props.transparent) return 'transparent';
//             return theme.type === 'light' ? '#4d515d' : '#f2f3f5'
//         },
//         color: (props) => {
//             if (props.transparent) return theme.text.activeLink;
//             return theme.type === 'light' ? '#fff' : '#000'
//         },
//         outline: 'none',
//         '&:hover': {
//             transition: 'transform 0.2s',
//             transform: 'scale(1) rotate(0.1turn)',
//         },
//     },
//     '@keyframes roundIn': {
//         from: {
//             opacity: 0,
//             transform: 'rotate(0.5turn)',
//         },
//         to: {
//             opacity: 1,
//             transform: 'rotate(0)'
//         }
//     },
//     themeIcon: {
//         animation: '$roundIn ease-in 0.4s',
//     }
// });

// /*============================ STYLES END ==============================*/

// function LoginPage(props) {
//     const classes = props.classes;
//     // const history = useHistory();
//     const navigate = useNavigate()

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [formErrors, setFormErrors] = useState([]);
//     const [isSuccessed, setSuccess] = useState(false);

//     const redirectToRegistration = () => {
        
//         navigate('/registration');
//     }

//     const emailValidate = (value) => {
//         const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//         if (!emailRegex.test(value)) return 'Wrong email';
//         return undefined;
//     }

//     const passwordValidate = (value) => {
//         if (!value || value.length < 6) return 'Password must be more than 6 characters';
//         return undefined;
//     }


//     const loginSubmitHandler = async (e) => {
//         e.preventDefault();

//         let errors = [];
//         let emailCheck = emailValidate(email);
//         if (emailCheck) errors.push(emailCheck);

//         let passwordCheck = passwordValidate(password);
//         if (passwordCheck) errors.push(passwordCheck);

//         setFormErrors(errors);
//         if (!errors.length) setSuccess(true);
//     }

//     return <div className={classes.loginCard}>

//         <div style={{ display: 'flex', alignItems: 'center', fontWeight: 100, marginBottom: '25px' }}>
//             <FaChessBishop style={{ marginRight: '10px', fontSize: '1.3em', color: '#83afe0' }} />
//             <span>Amazing service</span>
//         </div>

//         <h1 className={classes.cardHeader}>Log in</h1>

//         <div className="form">

//             <form onSubmit={loginSubmitHandler}>

//                 {formErrors.length ? <Alert title="Failed to login">
//                     {formErrors.map(err => <div>{err}</div>)}
//                 </Alert> : ''}

//                 {isSuccessed ? <Alert type="success">Welcome!</Alert> : ''}

//                 <div name="email" validate={emailValidate}>
//                     <Typography>
//                         <span>Email</span>
//                         <Input value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </Typography>
//                 </div>

//                 <div name="password" validate={passwordValidate}>
//                     <Typography>
//                         <span>Password</span>
//                         <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </Typography>
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                     <Button type="submit" fullWidth>Log in</Button>
//                 </div>

//             </form>

//         </div>

//         <Divider />
//         <Button fullWidth onClick={redirectToRegistration} color="green" iconLeft={<FaPlusCircle />}>Create account</Button>

//     </div>
// }
// LoginPage = withStyles(loginPageStyles)(LoginPage);


// export default LoginPage