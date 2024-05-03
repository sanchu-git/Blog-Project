import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <div className='sidebarItems sm-2'>
            <span className='title sm-2'>ABOUT ME</span>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyAAydpu7aahNweAH8Xp_DdVuTp8a7VCCn5vy3PFybOHSyh8ayPtfcCZxEci6qSE3Zbo&usqp=CAU" alt="" />
            <p>
                Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. <br /> Quibusdam repudiandae tempora <br /> neque quos fuga? Perferendis recusandae <br />
            </p>
        </div>
        <div className="sidebarItems sm-2">
        <span className='title'>CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Style</li>

        </ul>
        </div>
        <div className="sidebarItems sm-2">
          <span className='title'>FOLLOW</span>
          <div className='sidebarSocial'>
            <i className='sideIcon fab fa-facebook-square'></i>
            <i className='sideIcon fab fa-instagram-square'></i>
            <i className='sideIcon fab fa-twitter-square'></i>
            <i className='sideIcon fab fa-pinterest-square'></i>



          </div>
        </div>
    </div>
  )
}

export default Sidebar