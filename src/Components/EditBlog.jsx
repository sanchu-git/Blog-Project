import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Row} from 'react-bootstrap'
import Footer from './Footer'
import { Rating } from '@mui/material'
function EditBlog({blog}) {
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

      <Footer/>
    </div>
  )
}

export default EditBlog