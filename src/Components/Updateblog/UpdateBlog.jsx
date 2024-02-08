import React from 'react'
import './updateblog.css'
function UpdateBlog() {
  return (
    <div className='write' style={{background:'url(https://png.pngtree.com/background/20210717/original/pngtree-flat-style-watercolor-splash-company-profile-picture-image_1441172.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className='container me-5' >
      <a style={{color:'black',direction:'none'}} href="/home">backtoHome</a>
      </div>
      <img className='writeImg' src="https://cdn.80.lv/api/upload/post/5392/images/5d2cf7f6876a8/widen_1220x0.jpg" alt="" />
        <form className='writeForm'>
            <div className='writeFormGroup'>
              <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
              </label>
              <input type="file" id='fileInput' style={{display:'none'}}/>
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
              <textarea placeholder='Tell Your Story....' type="text" className='writeInput writeText'></textarea>
            </div>
          <button className="writeSubmit">Update</button>
        </form>
    </div>
  )
}

export default UpdateBlog