import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'
import Spinner from 'react-bootstrap/Spinner';
import { loginAPI } from '../../Services/allAPIs'
function Auth() {
    const [loginStatus,setLoginStatus] = useState(false)
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
            email:"",password:""
      })
    const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password} = userData
        if( !email || !password){
          toast.warning("please fill the form completely!!!")
        }else{
            try{
                const result = await loginAPI({email,password})
                console.log(result);
                if(result.status===200){
                    setLoginStatus(true)
                    sessionStorage.setItem("username",result.data.existingUser.username)
                    sessionStorage.setItem("token",result.data.token)
                    setTimeout(()=>{
                        setUserData({email:"",password:""})
                        navigate('/home')
                    },2000)
                }else{
                  toast.warning(result.response.data)
                }
              }catch(err){
                console.log(err);
              }
        }

    }

    return (
        <>
            <div style={{ height: 'auto', overflowX: 'hidden', background: 'url(https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='w-auto'>
                <div style={{ height: '100vh', width: 'auto' }} className=' d-flex  justify-content-center '>
                    <div style={{ width: '850px', height: '575px', boxShadow: 'rgba(280, 130, 265, 1) 0px 5px 15px' }} className='row d-flex bg-black mt-5 ms-5 rounded'>
                        <div style={{ height: '513px' }} className="col-lg-5 mt-5">
                            <div style={{ background: 'url(https://i.pinimg.com/564x/7f/ba/b5/7fbab587e6f2b92631f789f6c0cc1cd4.jpg)', height: '513px', backgroundRepeat: 'none',backgroundSize:'cover' }} className=' mt-0  rounded'>
                                <div className='me-5' >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 rounded" style={{width:480}}>
                            <form className="form  rounded bg-black  shadow ">
                                <div className="flex-column">
                                    <label className='text-light fw-normal '>Email </label>
                                </div>
                                <div className="inputForm" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}>
                                    
                                    <input type="text" className="input bg-black text-light" placeholder="Enter your Email" />
                                </div>

                                <div className="flex-column">
                                    <label className='text-light fw-normal '>Password </label>
                                </div>
                                <div className="inputForm" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}>
                                    <input type="password" className="input text-light bg-black" placeholder="Enter your Password" />
                                    <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                                    </svg>
                                </div>
                                <div className="flex-row">
                                    <div>
                                        <input className='text-light' type="checkbox" />
                                        <label className='text-light ms-2'>Remember me </label>
                                    </div>
                                </div>
                                <button onClick={handleLogin} style={{height:'70px',border:'none'}}  className="button-submit text-light btn btn-black pt-2 fw-semibold  text-center">Sign In {loginStatus&& <Spinner animation="border" variant="success" />} </button>
                                <p className="p text-light">
                                    Don't have an account? <Link to={'/register'} className="span text-light">Sign Up</Link>
                                </p>

                            </form>

                        </div>
                        <div className="col-lg-1"></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth