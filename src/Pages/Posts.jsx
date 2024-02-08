import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Blog from '../Components/Blog/Blog'
import Header from '../Header/Header'
import Sidebar from './sidebar/Sidebar'
function Posts() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'100px'}} className='project-page-design'>
      <div className="d-flex justify-content-between m-5">
        <h1 className='ms-5'>Explore Our Blogs</h1>
        <input style={{width:'300px'}} className='form-control' type="text" placeholder='Search Blogs'/>
      </div>
      <Row className='mt-5 container-fluid'>
        <Col className='col-lg-9' sm={12} md={6} lg={4}>
          <Blog/>
        </Col>
        <Col className='col-lg-3'>
        <Sidebar/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Posts