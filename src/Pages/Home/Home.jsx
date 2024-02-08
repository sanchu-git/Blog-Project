import React from 'react'
import './home.css'
import Blog from '../../Components/Blog/Blog'
import Sidebar from '../sidebar/Sidebar'
import Header from '../../Header/Header'
import Footer from '../../Components/Footer'
function Home() {
  return (

    <div className='home' style={{background:'url(https://images.unsplash.com/photo-1611659934318-06fd70ced53c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <Header/>
        <div className='homeTitle'>
            <span className='titleLg'>Adventure</span>
            <span className='titleSm'>BLOG</span>
        </div>
        <img className='homeImg lg-6 sm-2' src="https://wallpapercave.com/wp/wp7852893.png" alt="" />
        <h1 className='our' style={{color:"black"}}>OUR BLOGS</h1>

      
    <div className='d-flex lg-6'><Blog/></div>

    <Footer/>
    </div>

  )
}

export default Home