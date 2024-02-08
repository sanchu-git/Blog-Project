import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
function ReactQuills() {
    const [value,setValue] = useState('')
    return <ReactQuill theme="snow" value={value} onChange={setValue}/>
    

}

export default ReactQuills