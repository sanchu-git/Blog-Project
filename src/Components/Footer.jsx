import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '350px',background:'url(https://a-static.besthdwallpaper.com/live-like-you-were-dying-wallpaper-1600x600-91764_84.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}  className='w-100 lg-6'>
      <div className="container footer-content d-flex justify-content-between">
        <div className="footerTitle w-25 mt-5">
          <a style={{textDecoration:'none'}} href='/home'>
            <h3 style={{color:'white',height:'50px'}}> <i class="fa-solid fa-blog fa-bounce"></i>
              Blogs</h3>
          </a>
          <span style={{color:'white'}}>
            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

          </span><br />
          <span style={{color:'white'}}>Code licensed MIT, docs CC BY 3.0</span><br />
          <span style={{color:'white'}}>Currently v5.3.2</span>
        </div>
        <div className="links d-flex flex-column mt-5">
          <h3 style={{color:'white',height:'50px'}}>Links</h3>
          <Link to={'/home'} className='text-white' style={{  textDecoration:'none' }}>Home</Link>
          <Link to={'/login'} className='text-white' style={{textDecoration:'none' }}>Login</Link>
          <Link to={'/register'} className='text-white' style={{ textDecoration:'none' }}>Register</Link>
        </div>

        <div className="guides d-flex flex-column mt-5">
          <h3 style={{color:'white',height:'50px'}}>Guides</h3>
          <a  className='text-decoration-none text-white' href="">React</a>
          <a  className='text-decoration-none text-white' href="">React Bootstrap</a>
          <a  className='text-decoration-none text-white' href="">React Routing</a>
        </div>
        <div className="contact d-flex flex-column mt-5">
          <h3 style={{color:'white',height:'50px'}}>Contact Us</h3>
          <div className='d-flex'> 
          <input type="text" placeholder='Enter your mail' className='form-control' />
          <button  className='btn btn-success  ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>          
          <div style={{ color: 'black' }} className="icons mt-3 d-flex justify-content-between">
            <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i>

          </div>


        </div>



      </div>
      <p style={{color:'green'}} className='text-center mt4'>Copyright &copy;2023 Media Player . Build with React.</p>
    </div>
  )
}

export default Footer