import {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './updateblog.css'
import { SERVER_URL } from '../../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editBlogAPI } from '../../Services/allAPIs';



function UpdateBlog({ blog }) {
  console.log(blog);


  const [blogData, setBlogData] = useState({
    id: blog._id, title: blog.title, review: blog.review, blogImage: ""
  })

  const [preview, setPreview] = useState("")

  useEffect(() => {
    if (blogData.blogImage) {
      setPreview(URL.createObjectURL(blogData.blogImage))
    } else {
      setPreview("")
    }
  }, [blogData.blogImage])

  const [show, setShow] = useState(false);

  const handleClose = () => {
    {
      setShow(false)
      setBlogData({
        id: blog._id, title: blog.title, review: blog.review, blogImage:""
      })
      setPreview("")
    }
  }
  const handleShow = () => setShow(true)

  const handleUpdate = async ()=>{
    const { id,  title, review, blogImage } = blogData
    if (!title || !review ) {
      toast.info("Please fill the Datas Completely")
    } else{
      // api call reqBody
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("review", review)
      preview?reqBody.append("blogImage", blogImage):reqBody.append("blogImage", blogImage)

      // api call reqHeader

      const token = sessionStorage.getItem("token")
      console.log(token);
      if(token){
        const reqHeader = {
          "Content-Type": preview?"multipart/form-data":"application/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call
        try{
          const result = await editBlogAPI(id,reqBody,reqHeader)
          console.log(result);
          if(result.status===200){
            toast.success(`Blog "${result.data.title}" Updated Successfullt...`)
            handleClose()
          }else{
            toast.warning(result.response.data)
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }

  return (
    <>
      <button className='btn' onClick={handleShow}><i style={{ height: '35px' }} className="fa-solid fa-pen-to-square fa-2x"></i></button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body className='container'><div className='write' style={{ background: 'url(https://png.pngtree.com/background/20210717/original/pngtree-flat-style-watercolor-splash-company-profile-picture-image_1441172.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='container me-5' >
            <a style={{ color: 'black', direction: 'none' }} href="/home">backtoHome</a>
          </div>
          <div className='w-100'>
            <label>
              <input type="file" style={{ display: 'none' }} onChange={e => setBlogData({ ...blogData, blogImage: e.target.files[0] })} ></input>
              <img className='d-flex rounded' style={{ width: '100%', height: '100vh' }} src={preview ? preview : `${SERVER_URL}/uploads/${blog.blogImage}`} alt="Upload Blog Image" />
            </label>
          </div>
          <form className='writeForm'>
            <div className='writeFormGroup'>
              <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
              </label>
              <input type="file" id='fileInput' style={{ display: 'none' }} />
              <input value={blogData.title} onChange={e => setBlogData({ ...blogData, title: e.target.value })} type="text" placeholder='Title' className='writeInput text-align-left' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
              <textarea value={blogData.review} onChange={e => setBlogData({ ...blogData, review: e.target.value })} placeholder='Tell Your Story....' type="text" className='writeInput writeText'></textarea>
            </div>
            <div className='' style={{marginTop:'500px'}}>
              <button onClick={handleClose} className="cancel">cancel</button>
              <button onClick={handleUpdate} className="writeSubmit">Update</button>
            </div>
          </form>
        </div></Modal.Body>
      </Modal>

      <ToastContainer autoClose={3000} theme='colored' />


    </>

  )
}

export default UpdateBlog
