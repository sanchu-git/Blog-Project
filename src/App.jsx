
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer'
import Header from './Header/Header'
import Posts from './Pages/Posts'
import Profile from './Components/Profile'
import Write from './Pages/Write'
import EditBlog from './Components/EditBlog'
import Dashboard from './Pages/Dashboard'
import { Rating } from '@mui/material'
import UpdateBlog from './Components/Updateblog/UpdateBlog'
import Register from './Pages/Register/Register'
import Single from './Pages/Single'
import { tokenAuthenticationContext } from './ContextAPI/TokenAuth'
import { useContext } from 'react'

function App() {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthenticationContext)

  return (
    <>

       <Routes>
          <Route path='/home' element={ isAuthorised? <Home/>:<Auth/>} />
          <Route path='/' element={<Auth/>} />
          <Route path='/dashboard' element={ isAuthorised? <Dashboard/>:<Auth/>} />
          <Route path='/write' element={ isAuthorised? <Write/>:<Auth/>} />
          <Route path='/editblog' element={ isAuthorised? <EditBlog/>:<Auth/>} />
          <Route path='/profile' element={ isAuthorised? <Profile/>:<Auth/>} />
          <Route path='/posts' element={ isAuthorised? <Posts/>:<Auth/>} />
          <Route path='/single/:bId' element={ isAuthorised? <Single/>:<Auth/>} />
          <Route path='/blog' element={ isAuthorised? <Blog/>:<Auth/>} />
          <Route path='/update' element={ isAuthorised? <UpdateBlog/>:<Auth/>}/>
          <Route path='/rating' element={ isAuthorised? <Rating/>:<Auth/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/*' element={<Navigate to={'/ '}/>} />



       </Routes>
    </>
  )
}

export default App
