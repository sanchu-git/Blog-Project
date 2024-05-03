import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { deleteBlogAPI, getUserBlogAPI } from '../Services/allAPIs'
import UpdateBlog from '../Components/Updateblog/UpdateBlog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Dashboard() {

  const [allBlogs, setAllBlogs] = useState([])

  const getUserBlogs = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserBlogAPI(reqHeader)
      if (result.status === 200) {
        setAllBlogs(result.data)
      } else {
        console.log(result);
      }
    }


  }

  console.log(allBlogs);
  const Navigate = useNavigate()

  const handleEditPage = () => {
    Navigate('/update')
  }

  const [username, setUsername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setUsername(sessionStorage.getItem("username"))
    } else {
      setUsername("")
    }
    getUserBlogs()
  }, [])

  const handleDeleteBlog = async (pid)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "application/form-data",
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await deleteBlogAPI(pid,reqHeader)
        if(result.status===200){
          console.log(result);
          getUserBlogs()
        }else{
          toast.warning(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }

  }

  return (
    <div style={{ background: 'url(https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={{ marginTop: '60px', height: '80vh' }} className='dashboard container'>
        <h1 className='fw-bolder sm-2' style={{ marginLeft: '35%',height:'50px' }}>Welcome <span className='text-info'>{username}</span></h1>
        <div className='card shadow p-3 mt-5' style={{ background: 'transparent' }}>
          <div className='mt-3' >
            <h2 className='fw-bolder' style={{ marginLeft: '45%',height:'40px' }}>MY Blogs</h2>
            {allBlogs?.length>0? allBlogs.map((blog,index)=>(
              <div key={index} className="border rounded d-flex justify-content-between align-items-center  mb-3 p-2">
              <h5 style={{height:'20px',color:'yellow'}} >{blog.title}</h5>
              <div className="d-flex icons align-items-center" style={{height:'70px'}}>
                <UpdateBlog style={{height:'50px'}} blog={blog} />
                <button onClick={()=>handleDeleteBlog(blog?._id)} className='btn'><i style={{ height: '35px' }} className="fa-solid fa-trash fa-2x"></i></button>
              </div>
            </div>
            ))
            :
            <div className="text-danger fs-4 fw-bolder">No Blogs are Uploaded!!!</div>
            }
          </div>
        </div>
      </div>
      <Footer />

      <ToastContainer autoClose={3000} theme='colored' />

    </div>
  )
}

export default Dashboard

