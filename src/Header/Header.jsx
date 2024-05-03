import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useNavigate } from 'react-router-dom'
import LogoImg from '../assets/Images/logo.png'
import profileImg from '../assets/Images/profile.png'

function Header() {
    const navigate = useNavigate()

    const handleProfilePage = () =>{
        navigate('/profile')
    }

    const handleWritePage = ()=>{
        navigate('/write')
    }
    const handleEditPage = ()=>{
        navigate('/editblog')
    }
    const handleDashboard = ()=>{
      navigate('/dashboard')
    }
    const handleLogin = ()=>{
      navigate('/posts')
    }
    return (
        <>
    <Navbar expand="sm" className="" >
      <Container>
        <a href='/home'><img className='' src={LogoImg} alt="" style={{width:'100px',height:'100px'}} /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <button   className='btn'><Nav.Link href='/home'>Home</Nav.Link></button>
            <button onClick={handleDashboard}  className='btn'><Nav.Link href="#link">About</Nav.Link></button>
            <button onClick={handleWritePage} className='btn'><Nav.Link href="#link">Write</Nav.Link></button>
            {/* <button onClick={handleEditPage} className='btn'><Nav.Link href="#link">Edit Blog</Nav.Link></button> */}
            <button onClick={handleLogin} className='btn'><Nav.Link href="#link">Blogs</Nav.Link></button>

            <button onClick={handleProfilePage} className='btn btn-none' style={{backgroundPosition:'fixed'}}><img src={profileImg} alt="" style={{width:'40px',height:'40px', border:'rounded'}} /></button>
            <button  className='btn'><Nav.Link href="/">Log Out</Nav.Link></button>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Header