import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"



// register API
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// login API
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

// ADD BLOG 
export const addBlogAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-blog`,reqBody,reqHeader)
}

// homeBlogs API
export const getHomeBlogAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-blogs`,"","")
}

// allBlogs API
export const getAllBlogAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-blogs`,"",reqHeader)
}

// userBlogs API
export const getUserBlogAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-blogs`,"",reqHeader)
}

// Get A Blog
export const getABlogAPI = async(bId)=>{
    return await commonAPI("GET",`${SERVER_URL}/getABlog/${bId}`,"","")
}
export const addCommentAPI = async(bId,reqBody)=>{
    return await commonAPI("PUT",`${SERVER_URL}/addComment/${bId}`,reqBody,"")
}

// edit Blog API
export const editBlogAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/blog/edit/${id}`,reqBody,reqHeader)
}

// Remove Blog API
export const deleteBlogAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/blog/remove/${id}`,{},reqHeader)
}

// user/edit

export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
 }
 