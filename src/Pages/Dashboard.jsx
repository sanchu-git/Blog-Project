import React from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const Navigate = useNavigate()

  const handleEditPage =()=>{
    Navigate('/update')
  }

  return (
    <div style={{background:'url(https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <div style={{marginTop:'60px',height:'80vh'}} className='dashboard container'>
      <h1 className='fw-bolder sm-2' style={{marginLeft:'35%'}}>Welcome <span className='text-info'>userName</span></h1>
      <div className='card shadow p-3 mt-5' style={{background:'transparent'}}>
            <div className='mt-3' >
                <h2 style={{marginLeft:'45%'}}>MY Blogs</h2>
                <div className="border rounded d-flex justify-content-between align-items-center text-danger mb-3 p-2">
              <h5>Blog-Title</h5>
              <div className="d-flex icons align-items-center">
                <button className='btn' onClick={handleEditPage}><i style={{height:'35px'}} className="fa-solid fa-pen-to-square fa-2x"></i></button>
                <button className='btn'><i style={{height:'35px'}} className="fa-solid fa-trash fa-2x"></i></button>
              </div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard