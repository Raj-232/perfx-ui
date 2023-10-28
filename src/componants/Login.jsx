import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Login = () => {
    const [msg,setMsg]=useState('');
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        navigate('/');
      };
      const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen1(false);
       
      };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email and password
        if (!validator.isEmail(email)) {
            setEmailError('Invalid email');
            return;
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,14}$/;

        if (!password.match(passwordRegex)) {
            setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, and one symbol (!@#$%^&*)');
            return;
        }

        // If validation is successful, you can proceed with further actions.
        const data = {
            email: email,
            password: password,
        };
        // If validation is successful, you can proceed with further actions.
        // Make the POST request
        axios.post('http://localhost:3002/api/login', data)
            .then((response) => {

                console.log('Login successful!', response.data);
              
                setMsg("Login successful!")
                setOpen(true);
               
           
            })
            .catch((error) => {
                const message=error.response.data;
                console.log(message.error)
               
                setMsg(message.error)
                setOpen1(true);
                
                
            });
    };

    return (
        <div className="flex sm:w-[560px] w-screen p-4  ">
            <form onSubmit={handleSubmit} noValidate className="w-full">
                <div className="sm:hidden flex  justify-center items-center mb-6 group space-x-2">
                    <img src="/Images/logo.svg" alt='logo' />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <h1 className="text-3xl font-bold text-primary">Log In</h1>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="block py-2.5 px-0 w-full text-white  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email" className="text-white peer-focus:font-medium absolute text-sm duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                    </label>
                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
                </div>

                <div className="relative z-0 w-full mb-6 group flex">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="block py-2.5 px-0 w-full text-white  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                        placeholder=" "
                        required
                    />

                    <label htmlFor="password" className="text-white peer-focus:font-medium absolute text-sm duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>


                    <svg
                        className="w-6 cursor-pointer text-white border-0 border-b-2 border-gray-300 appearance-none "
                        onClick={togglePasswordVisibility}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 14"
                    >
                        {passwordVisible ? (
                            <path
                                d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                            />
                        ) : (
                            <>
                                <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                                <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                                <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                            </>
                        )}
                    </svg>
                </div>
                {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
                <div className="relative z-0  mb-6 group flex justify-between">
                <div className="relative z-0  mb-6 group flex items-center space-x-2">
                        <input type="checkbox" id="terms" name="terms" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" /><label htmlFor="terms" className="text-white"> I accept the Per-fx <Link to='/' className="text-primary hover:underline"> Terms and Conditions</Link></label>
                    </div>
                    <Link className="text-primary ">Forgot Password</Link>
                </div>


                <button className="bg-primary rounded text-center w-full p-2 text-white mb-6" type="submit">
                    Log In
                </button>



                <Link to='/register'>  <button className="bg-primary rounded text-center w-full p-2 text-white">Sign Up</button>
                </Link>
            </form>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}   >
        <Alert  severity="success" sx={{ width: '100%' }} onClose={handleClose} >
        {msg}
        </Alert>
      </Snackbar>
      <Snackbar open={open1} autoHideDuration={2000} onClose={handleClose1}   >
        <Alert  severity="error" sx={{ width: '100%' }} onClose={handleClose1} >
        {msg}
        </Alert>
    
      </Snackbar>
        </div>
    );
};

export default Login;
