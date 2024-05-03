import React, { useEffect, useState} from 'react'
import { Collapse, Button } from 'react-bootstrap'
import ProfileImg from '../assets/Images/profile.png'
import { SERVER_URL } from '../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { updateUserProfileAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { tokenAuthenticationContext } from '../ContextAPI/TokenAuth';
function Profile() {

  const [userData, setUserData] = useState({
    username: "", email: "", phone: "",  profileImage: ""
  })
  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
      setUserData({ ...userData, username: userDetails.username,  email: userDetails.email, phone: userDetails.phone, })
      setExistingImage(userDetails.Profile)
    }
  }, [open])

  useEffect(() => {
    if (userData.profileImage) {
      setPreview(URL.createObjectURL(userData.profileImage))
    } else {
      setPreview(ProfileImg)
    }

  }, [userData.profileImage])
  console.log(userData);

  const handleProfileUpdate = async () => {
    const { username,  email, phone, profileImage } = userData
    if (!phone || !email) {
      toast.info("Please Fill The form Completely!!!")
    } else {
      // Proceed to apii call
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("phone", phone)
      preview ? reqBody.append("profileImage", profileImage) : reqBody.append("profileImage", existingImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        // api call
        try{
          const result = await updateUserProfileAPI(reqBody,reqHeader)
          if(result.status==200){
            sessionStorage.setItem("userDetails",JSON.stringify(result.data))
          }else{
            console.log(result);
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }
  const navigate = useNavigate()
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthenticationContext)
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <>
      <div style={{ height: '100vh', border: 'none', background: 'url(https://w.wallhaven.cc/full/md/wallhaven-mddk3m.jpg)', backgroundSize: 'cover' }} className='w-100 '>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={'/home'} class="nav-link fw-bolder" style={{ color: 'black' }} aria-current="page" href="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to={'/dashboard'} class="nav-link text-light " href="#">Dashboard</Link>
                </li>
                <li class="nav-item">

                </li>
              </ul>
              <div className='ms-3 mt-lg-0  mt-md-2  mt-sm-2'>
                <button onClick={handleLogout}  className='btn  btn-none text-light'>Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2"></i></button>
              </div>
            </div>
          </div>
        </nav>

        <div className="row ">

          <div className="col-lg-8 sm-2">
            <div style={{ height: '500px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCX4S5MNABGlO-4Jm__Lv206LLW41p793Zw&usqp=CAU)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='  mt-5 ms-5 rounded  shadow '>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-4 d-flex  justify-content-center  align-items-center ">
                <label className='text-center'>
            <input className='rounded' style={{ display: 'none' }} type="file" onChange={e => setUserData({ ...userData, profileImage: e.target.files[0] })} />
            {existingImage == " " ? <img width={'200px'} height={'200px'} src={preview ? preview : ProfileImg} alt="Uploaded image" />
              :
              <img width={'200px'} height={'200px'} src={preview ? preview : `${SERVER_URL}/uploads/${existingImage}`} alt="Uploaded image" />
            }
           <h6 style={{ height: '40px' }} className='text-center text-white mt-1'>Change Profile Photo</h6>

          </label>

                </div>
                <div className="col-lg-6 mt-3 rounded" style={{ background: 'transperant' }}>
                  <div style={{ height: '420px' }} className=' shadow rounded w-100 mt-5 me-5 text-light'>
                  <div>
                    <label cl style={{ color: 'black' }} className='ms-5 mt-4' htmlFor="username">Username
                    <span style={{marginLeft:'20px'}}>:</span>
                    </label>

                    <input type="text" style={{backgroundColor:'black'}} className='ms-5 rounded text-white' value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })}  />
                  </div>

                    <hr className='mt-3' style={{ color: 'white', width: '100%' }} />
                    <div>
                    <label cl style={{ color: 'black' }} className='ms-5 mt-4' htmlFor="phone">Phone 
                    <span style={{marginLeft:'50px'}}>:</span>
                    </label>

                    <input type="text" style={{backgroundColor:'black'}} className='ms-5 rounded text-white' value={userData.phone} onChange={e => setUserData({ ...userData, phone: e.target.value })} />
                  </div>
                    <hr className='mt-3' style={{ color: 'white', width: '100%' }} />

                    <div>
                    <label cl style={{ color: 'black' }} className='ms-5 mt-4' htmlFor="email">Email</label>
                    <span style={{marginLeft:'50px'}}>:</span>
                    <input type="text" style={{backgroundColor:'black'}} className='ms-5 rounded text-white' value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                  </div>
                  <div className='d-flex justify-content-end mt-4'>
                    <button onClick={handleProfileUpdate} className='btn btn-outline-danger rounded'>Submit</button>
                  </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bg-light">

            </div>
          </div>
        </div>

      </div>
      <Footer />
      <ToastContainer autoClose={3000} theme='colored' />

    </>
  )
}

export default Profile