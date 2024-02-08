import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Row} from 'react-bootstrap'
import './blog.css' 
import { Rating } from '@mui/material'

function Blog() {

  const [like,setLike] = useState(false)
  // handleLikes

  const handleLikes = ()=>{
    if(!like){
      setLike(true)
    }else{
      setLike(false)
    }
  }

  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePostsPage = ()=>{
      navigate('/posts')
  }
  return (
    <div className='blog mt-5 ms-3' style={{border:'none'}}>
    <Card style={{width:'28rem',borderRadius:'20px',border:'none',background:'transparent'}} className=' btn mb-5'>
      <Card.Img onClick={handleShow} className='mt-3' width={'100%'} variant="top" src="https://cdn.80.lv/api/upload/post/5392/images/5d2cf7f6876a8/widen_1220x0.jpg" />
      <Card.Body>
        <Card.Title onClick={handleShow} style={{height:'28px'}}>Blog Title</Card.Title>
        <div className='d-flex justify-content-between'><span>1 Hour Ago</span> {like?<i onClick={handleLikes} style={{fontSize:25,cursor:'pointer',height:'30px'}} class="fa-solid fa-heart text-danger"></i>:<i onClick={handleLikes} style={{fontSize:25}} class="fa-regular fa-heart"></i>}</div>
        <div  style={{height:'58px'}}>
        <Rating style={{height:'50px'}}/>
        </div>
      </Card.Body>
    </Card>
    <Modal size='lg'  show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{border:'none'}}>
        </Modal.Header>
        <Modal.Body>
          <Row>

              <img className='img' style={{height:'250px'}} src="https://cdn.80.lv/api/upload/post/5392/images/5d2cf7f6876a8/widen_1220x0.jpg" alt="" />
              <h2 className='fw-bolder text-dark text-center mt-2 fs-1'>Blog Title</h2>
              <p>Blog Review : <span className='fw-bolder fs-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo accusamus atque nam voluptates inventore praesentium ad labore nemo, quae magni a quisquam officiis, ipsa, iste eveniet distinctio quos iure!</span></p>
          </Row>
          <div>
            <a href="https://github.com/sanchu-git/Project-Fair" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-brands fa-instagram fa-2x"></i> </a>
            <a href="https://project-fair-vert.vercel.app/" target='_blank' className='btn me-3'><i style={{height:'40px'}} className="fa-brands fa-facebook fa-2x"></i> </a>
            <div className="text-center">
          <button onClick={handlePostsPage} className='btn btn-link'>view more Blogs </button>
        </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    
    
  )
}

export default Blog