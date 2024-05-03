import React, { useContext, useEffect, useState } from 'react'
import uploadImg from '../assets/Images/upload.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBlogAPI } from '../Services/allAPIs';



function Write() {
  const [preview, setPreview] = useState("")
  const [fileStatus, setFileStatus] = useState(false)
  const [show, setShow] = useState(false)
  const [blogData, setBlogData] = useState({
    title: "", review: "", blogImage: ""

  })
  // console.log(blogData);

  useEffect(() => {
    console.log(blogData.blogImage.type);
    if (blogData.blogImage.type == "image/png" || blogData.blogImage.type == "image/jpg" || blogData.blogImage.type == "image/jpeg") {
      console.log("generate image URL");
      setFileStatus(false)
      setPreview(URL.createObjectURL(blogData.blogImage))
    } else {
      console.log("please upload following extensions only");
      setFileStatus(true)
      setBlogData({ ...blogData, blogImage: "" })
    }
  }, [blogData.blogImage])

  const handleClose = () => {
    setShow(false)
    setBlogData({
      title: "", review: "", blogImage: ""
    })
    setPreview("")
  }

  const handlePublishBlog = async () => {
    const { title, review, blogImage } = blogData
    if (!title || !review || !blogImage) {
      toast.info("Please fill the Datas Completely")
    } else {
      // api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("review", review)
      reqBody.append("blogImage", blogImage)

      // api call - reqHeader
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call
        try {
          const result = await addBlogAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status === 200) {
            console.log(result.data);
            handleClose()

          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(result);
        }
      }


    }
  }

  return (
    <div className='write lg-6' style={{ background: 'url(https://png.pngtree.com/background/20210717/original/pngtree-flat-style-watercolor-splash-company-profile-picture-image_1441172.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='container me-5'>
        <a style={{ color: 'black', direction: 'none' }} href="/home">backtoHome</a>
      </div>
      <div className='container'>
        <label>
          <input type="file" style={{ display: 'none' }} onChange={e => setBlogData({ ...blogData, blogImage: e.target.files[0] })}></input>
          <img className='d-flex rounded' style={{ width: '100%', height: '100vh' }} src={preview ? preview : uploadImg} alt="Upload Blog Image" />
        </label>
      </div>
      <div className='mt-2' style={{ width: 1000, marginLeft: 200 }}>
        {/* <ReactQuill/>   */}
      </div>
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor="fileInput">
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type="file" id='fileInput' style={{ display: 'none' }} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true} value={blogData.title}
            onChange={e => setBlogData({ ...blogData, title: e.target.value })} />
          <div className='d-flex justify-content-end ms-auto'>
            <button onClick={handleClose} className='btn btn-danger rounded'>Clear</button>
            <button onClick={handlePublishBlog} className="ms-2 btn btn-success  rounded ">Publish</button>
          </div>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell Your Story....' type="text" className='writeInput writeText' value={blogData.review} onChange={e => setBlogData({ ...blogData, review: e.target.value })}></textarea>
        </div>


      </form>
      <ToastContainer autoClose={3000} theme='colored' />

    </div>
  )
}

export default Write