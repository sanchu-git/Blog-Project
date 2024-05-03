import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addCommentAPI, getABlogAPI } from '../Services/allAPIs';
import { SERVER_URL } from '../Services/serverUrl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Single({ blog }) {

    const [comment, setComment] = useState("")


    const { bId } = useParams()
    console.log(bId);

    const [blogDetails, setBlogDetails] = useState()
    const getABlog = async () => {
        try {
            const result = await getABlogAPI(bId)
            if (result.status == 200) {
                setBlogDetails(result.data)
            } else {
                console.log(result.response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getABlog()
    }, [bId])
    console.log(comment);
    console.log(blogDetails);

    const navigate = useNavigate()
    const handleUpdate = () => {
        navigate('/dashboard')
    }
    const handleComment = async () => {
        console.log(bId);
        const result = await addCommentAPI(bId, comment)
        if (result.status == 200) {
            console.log(result.data);
        } else {
            console.log(result.response.data);
        }
    }
    return (
        <>
            {blogDetails?.map((blog, index) => (
                <div key={index} className='container w-100' style={{ marginTop: '100px', height: '1500px' }}>
                    <div className='img-fluid'>
                        <img className='rounded' style={{ height: '450px', width: '100%' }} src={`${SERVER_URL}/uploads/${blog?.blogImage}`} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 style={{height:'50px'}} className='mt-3'>{blog?.title}</h1>
                        
                        <div className='d-flex justify-content-end'>
                            <div className='align-items-center mt-3'>
                            <Link to={'/posts'}>View All Blogs</Link>
                            </div>
                            <button onClick={handleUpdate} className='btn btn-none'><i style={{ height: '33px' }} className="fa-solid fa-pen-to-square fa-2x "></i></button>
                            
                        </div>
                        
                    </div>
                    <div className='container mt-5'>
                        <h4 style={{height:'400px'}}>{blog?.review}</h4>
                    </div>
                    <div>
                       
                            <TextField  onChange={e => setComment(e.target.value)} className='w-100 mt-5'
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="comment here..."
    
                            />
                       
                        <div className='d-flex justify-content-end mt-2'><button onClick={handleComment} className='btn btn-info'>ADD</button></div>
                    </div>
                </div>
            ))}



            <Footer />
        </>
    )
}

export default Single