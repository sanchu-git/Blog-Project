import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

function Profile() {
  const  navigate = useNavigate()
  const handleLogOut= ()=>{
      navigate('/')
  }
  return (
    <>
    <div style={{height:'100vh',border:'none',background:'url(https://w.wallhaven.cc/full/md/wallhaven-mddk3m.jpg)',backgroundSize:'cover'}} className='w-100 '>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/home'} class="nav-link fw-bolder" style={{color:'black'}} aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/dashboard'} class="nav-link text-light " href="#">Dashboard</Link>
        </li>
        <li class="nav-item">
          
        </li>
      </ul>
      <div className='ms-3 mt-lg-0  mt-md-2  mt-sm-2'>
        <button onClick={handleLogOut} className='btn  btn-none text-light'>Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2"></i></button>
        </div>
    </div>
  </div>
</nav>
      <div className="row ">

        <div className="col-lg-8 sm-2">
          <div  style={{height:'500px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCX4S5MNABGlO-4Jm__Lv206LLW41p793Zw&usqp=CAU)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}  className='  mt-5 ms-5 rounded  shadow '>
             <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex  justify-content-center  align-items-center ">
              <label className='text-center me-5'> 
         <input style={{display:'none'}} type='file' />
         <img className='rounded-circle ms-5' width={'150px'} height={'150px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEREOeAyd9qMRK9mzA_EO4F_a5imMNm7p3wg1UUwQmWg&s' alt="upload image" />
         <h6 className='text-center text-white mt-1'>Change Profile Photo</h6>
         </label>
              </div>
              <div className="col-lg-6 mt-3 rounded" style={{background:'transperant'}}>
                <div style={{height:'420px'}} className=' shadow rounded w-100 mt-5 me-5 text-light'>
                 <div style={{height:'50px'}} className=' rounded'>
                    <label style={{color:'black'}} className='ms-5 mt-2 ' htmlFor="username">
                     Username<span className='ms-5'> :</span>
                    </label>
                    <input style={{pointerEvents:'none',height:'30px'}} className=' ms-3  rounded bg-black border-success  border-0  text-light fw-bold ' type="text"  placeholder='Vimal Kumar' />
                    <button className='btn btn-light ms-3'><i class="fa-solid fa-pen-to-square"></i></button>
              
                 </div>
                 
                 <hr className='mt-3' style={{color:'white',width:'100%'}}/>
                  <div className='mt-3  mt-4 rounded' style={{height:'50px'}}>
                    <label style={{color:'black'}} className='ms-5 mt-2' htmlFor="phone">
                     Phone   <span className='ms-5'>  :</span>
                    </label>
                    <input style={{pointerEvents:'none'}} className='ms-4  rounded bg-black border-black  border-0  text-light fw-bold  ' type="text"  placeholder='+91 7483946555' />
                    <button className='btn btn-light ms-4'><i class="fa-solid fa-pen-to-square"></i></button>
                  </div>
                  <hr className='mt-3' style={{color:'white',width:'100%'}}/>

                  <div className='mt-3 mt-5'>
                    <label className='ms-5 mt-2' style={{color:'black'}} htmlFor="Address">
                     Address   <span className='ms-5'> :</span>
                    </label>
                    <input style={{pointerEvents:'none'}} className='ms-4  rounded bg-black border-black  border-0  text-light fw-bold  ' type="text"  placeholder='Lisa House Mankunn PO Kochi Kerala' />
                    <button className='btn btn-light ms-4'><i class="fa-solid fa-pen-to-square"></i></button>
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
    <Footer/>
    </>
  )
}

export default Profile