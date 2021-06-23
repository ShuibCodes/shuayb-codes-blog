import React, {useState,useEffect} from 'react'
import Article from './Article'
import Card from './Card'
function Blog() {


    const [blogs, setBlogs] = useState([])
    const [image, setImage] = useState()
    const [selectedBlog, setSelectedBlog] = useState(blogs)

    useEffect(() => {
        fetch("http://cdn.contentful.com/spaces/8olws3vbib1c/environments/master/entries?access_token=PH4N-wyv3OH119yARfYxx94GdGzKToEnooiMoQ0WqcY")
        .then(response => response.json())
        .then(data =>
          setBlogs(data.items)
       
        )
      }, []) 

      useEffect(() => {
        fetch("https://cdn.contentful.com/spaces/8olws3vbib1c/environments/master/assets/61apXfkwTDdY4cQvdA25Ju?access_token=PH4N-wyv3OH119yARfYxx94GdGzKToEnooiMoQ0WqcY")
        .then(response => response.json())
        .then(data =>
          setImage(data.fields.file.url)
       
        )
      }, []) 

      

      // blogs.map((d)=> console.log(d))
      console.log(blogs)
    return (
        <div>
        {selectedBlog !== null ? blogs.map((blog =>
          <div  className="grid"> 
          <Card title={blog.fields.title} introduction={blog.fields.introduction} mainBody1={blog.fields.mainBody1} mainBody2={blog.fields.mainBody2} setSelectedBlog={selectedBlog} />  
          </div>


      
        )): 
            <Article title={blogs.find(d => d.fields.title === selectedBlog)}   />
        }
        
       </div>

      
    ) 
}

export default Blog
