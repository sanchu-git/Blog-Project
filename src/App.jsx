
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer'
import Header from './Header/Header'
import Posts from './Pages/Posts'
import Profile from './Components/Profile'
import Write from './Pages/WRITE/Write'
import EditBlog from './Components/EditBlog'
import Dashboard from './Pages/Dashboard'
import { Rating } from '@mui/material'
import UpdateBlog from './Components/Updateblog/UpdateBlog'
import Register from './Pages/Register/Register'

function App() {

  return (
    <>

       <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Auth/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/write' element={<Write/>} />
          <Route path='/editblog' element={<EditBlog/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/update' element={<UpdateBlog/>}/>
          <Route path='/rating' element={<Rating/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/*' element={<Navigate to={'/ '}/>} />



       </Routes>
    </>
  )
}

export default App
