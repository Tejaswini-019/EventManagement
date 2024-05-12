import React, { useState } from "react";
import "./Login.css"
import img from '../../assets/employee.jpg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [values, setValues]= useState({
        email:'',
        password:''
    });
    const [error, setError]=useState(null)
    const navigate =useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit =(event)=>{
        event.preventDefault()
        debugger
        axios.post('http://localhost:3000/auth/adminlogin',values)
        .then(result=> {
            console.log(result)
            if(result.data.loginStatus == true){
                navigate('/dashboard');
            }
           else{
            setError(result.data.Error)
           }
        })

        .catch(err=>console.log(err)
        )
    }
  return (
    <div className="container">
        <img src={img}></img>
    <div className='loginPage'>
        <div className='loginForm'>
            <div className="error" style={{color:"red"}}>
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                    onChange={(e)=> setValues({...values, email:e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                      onChange={(e)=> setValues({...values, password:e.target.value})} className='form-control rounded-0'/>
                </div>
                <button  className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                <div className='mb-1'> 
                    <input type="checkbox" name="tick" id="tick" className='me-2'/> <span className="condition">You are Agree with terms & conditions</span>
                    
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login