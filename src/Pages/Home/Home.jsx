import React, { useEffect, useState } from 'react'
import './home.css'
import Blog from '../../Components/Blog/Blog'
import Header from '../../Header/Header'
import Footer from '../../Components/Footer'
import { getHomeBlogAPI } from '../../Services/allAPIs'
import { Col, Row } from 'react-bootstrap'
import 'animate.css';

function Home() {
  const [allBlogs, setAllBlogs] = useState([])
  console.log(allBlogs);

  const getHomeBlog = async () => {
    const result = await getHomeBlogAPI()
    if (result.status === 200) {
      setAllBlogs(result.data)
    } else {
      console.log(result);
    }
  }

  useEffect(() => {
    getHomeBlog()
  }, [])


  return (

    <div className='home'>
      <Header />
      <div className='homeTitle'>
        <span className='titleLg' data-aos="fade-up" data-aos-duration="2000">Adventure</span>
        <span className='titleSm' data-aos="fade-up" data-aos-duration="2000">BLOG</span>
      </div>
      <img className='homeImg lg-6 sm-2' src="https://wallpapercave.com/wp/wp7852893.png" alt="" />
      <h1  className='our animate__animated animate__backInLeft animate__delay-4s' style={{ color: "black" }}>OUR BLOGS</h1>
      <div className='mt-5 container'>

          <div className='row container mb-5'>
            <hr />
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="3000">
              <img className='rounded' src="https://img.freepik.com/premium-vector/blogging-concept-writing-story-book-blog-articles-writer-journalist-copywriter-type-laptop-vector-banner_53562-9759.jpg" alt="" />
            </div>
            <div className="Letters col-lg-6" style={{ marginTop: '100px' }} >
              "Adventurous souls will know that adventure doesn’t need to be extravagant or big. Life itself has enough adventure for most of us and the quotes below celebrate just that.
              “Adventure is the bridge between dreams and reality. When we walk across that bridge, we can explore the unknown and uncover hidden wonders. With every step, we move closer to our ambitions, passions, and goals. Adventure gives us the courage to take risks and make bold decisions – decisions that help shape our destiny.”
              It’s about living each day to the fullest and trusting in ourselves, no matter what comes our way.”
              <hr />

            <div className="row container">
              <div data-aos="fade-left" data-aos-duration="2000" className="col-lg-12 " >
                <img className='w-100 ms-3 rounded mt-5' src="https://credible-content.com/wp-content/uploads/2020/08/My-blog-writing-services.jpg" alt="" />
              
              </div>
              <div className="Letters col-lg-12 mt-3 ms-5">
                “An adventure is only an inconvenience rightly considered. An inconvenience is an adventure wrongly considered.” – Gilbert K. Chesterton.
                It is only in adventure that some people succeed in knowing themselves — in finding themselves.
                The great difference between voyages rests not with the ships, but with the people you meet on them.
                The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className='container d-flex' sm={12} md={6} lg={4}>
        {allBlogs.length > 0 ? allBlogs.map((blog, index) => (
          <Col key={index} className='me-4 d-flex' sm={12} md={6} lg={4}>
            <Blog blog={blog} />
          </Col>

        )) : null}
      </div>
      <Footer />
    </div>

  )
}

export default Home