import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Blog from '../Components/Blog/Blog'
import Header from '../Header/Header'
import Sidebar from './sidebar/Sidebar'
import { getAllBlogAPI } from '../Services/allAPIs'

function Posts() {

  const [allBlogs, setAllBlogs] = useState([])

  const getAllBlogs = async () => {
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllBlogAPI(reqHeader)
      if (result.status === 200) {
        setAllBlogs(result.data)
      } else {
        console.log(result);
      }
    }

    
  }

  console.log(allBlogs);
  useEffect(() => {
    getAllBlogs()
  }, [])


  return (
    <>
      <Header />
      <div style={{ marginTop: 'mt-5', background: 'url(https://images.unsplash.com/photo-1470596914251-afb0b4510279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} className='project-page-design rounded'>
        <div className="d-flex justify-content-between m-5">
          <h1 className='ms-5' style={{height:'50px'}} >Explore Our Blogs</h1>
          <input style={{ width: '300px', border: 'none', background: 'transparent' }} className='form-control' type="text" placeholder='Search Blogs' />
        </div>
        <Row className='mt-5 container-fluid'>
          { allBlogs?.length>0? allBlogs.map((blog,index)=>(
            <Col key={index} className='row-lg-9' sm={12} md={6} lg={4}>
            <Blog blog={blog}/>
          </Col>
          )) :
          <div className="text-danger fs-4 fw-bolder">No Blogs Availbale!!!</div>
          }
          {/* <Col className='col-lg-3'>
            <Sidebar />
          </Col> */}
        </Row>
      </div>
    </>
  )
}

export default Posts