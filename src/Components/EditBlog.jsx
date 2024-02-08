import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Row} from 'react-bootstrap'
import Footer from './Footer'
import { Rating } from '@mui/material'
function EditBlog() {
const Navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditPage = ()=>{
    Navigate('/update')
  }

  return (
    <div className='blog' style={{background:'url(https://rare-gallery.com/uploads/posts/122438-mountains-gradient-foggy-hd.jpg)',backgroundSize:'cover'}}>
    <Card style={{width:'28rem',borderRadius:'20px',border:'none',background:'transparent'}} className=' btn mb-5'>
      <Card.Img onClick={handleShow} className='mt-3' width={'100%'} variant="top" src="https://cdn.80.lv/api/upload/post/5392/images/5d2cf7f6876a8/widen_1220x0.jpg" />
      <Card.Body style={{background:'transparent'}}>
        <Card.Title style={{height:'28px'}}>Blog Title</Card.Title>
        <span className=''>1 Hour Ago</span>
        <div>
          <Rating style={{height:'50px'}}/>
        </div>
      </Card.Body>
    </Card>
    <Modal  size='lg' show={show} onHide={handleClose}>
        <Modal.Header style={{border:'none'}} closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
              <img className='img' style={{height:'250px'}} src="https://cdn.80.lv/api/upload/post/5392/images/5d2cf7f6876a8/widen_1220x0.jpg" alt="" />
              <h2 className='fw-bolder text-dark text-center mt-3'>Blog Title</h2>
              <div className='mt-2'>
            <button className='btn btn-none' onClick={handleEditPage}><i style={{height:'33px',marginLeft:'600px'}} class="fa-solid fa-pen-to-square fa-2x "></i></button>
            <button className='btn btn-none'><i style={{height:'33px',marginLeft:'40px'}} class="fa-solid fa-trash fa-2x text-danger"></i></button>
          </div>
              <p>Blog Review : <span className='fw-bolder fs-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo accusamus atque nam voluptates inventore praesentium ad labore nemo, quae magni a quisquam officiis, ipsa, iste eveniet distinctio quos iure!</span></p>
          </Row>

        </Modal.Body>
      </Modal>
      <Footer/>
    </div>
  )
}

export default EditBlog