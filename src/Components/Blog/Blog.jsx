import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { Rating } from '@mui/material'
import { SERVER_URL } from '../../Services/serverUrl'

function Blog({ blog }) {

  const [like, setLike] = useState(false)
  // handleLikes

  const handleLikes = () => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false)
    }
  }

  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className='blog mt-5'>

          {blog &&<Card style={{ width: '22rem', borderRadius: '20px', border: 'none', background: 'transparent' }} className=' btn mb-5'>
            <Link to={`/single/${blog?._id}`}>
            <Card.Img  className='mt-5' width={'100%'} height={'200px'} variant="top" src={`${SERVER_URL}/uploads/${blog?.blogImage}`} />
            </Link>
            <Card.Body >
              <Card.Title onClick={handleShow} style={{ height: '40px' }}>{blog?.title}</Card.Title>
              <div className='d-flex justify-content-between'><span>{blog?.createdAt.split('T')[0]}</span> {like ? <i onClick={handleLikes} style={{ fontSize: 25, cursor: 'pointer', height: '30px' }} class="fa-solid fa-heart text-danger"></i> : <i onClick={handleLikes} style={{ fontSize: 25 }} class="fa-regular fa-heart"></i>}</div>
              <div style={{ height: '58px' }}>
                <Rating style={{ height: '50px' }} />
              </div>
            </Card.Body>
          </Card>}

    </div>



  )
}

export default Blog