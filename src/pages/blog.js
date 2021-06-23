import React from 'react';
import {Container} from '../components/styledComponents/NavbarElements'
import {Link, useStaticQuery, graphql} from 'gatsby'


const Blog = () => {




    const data = useStaticQuery(graphql`
            query{
                allMarkdownRemark{
                edges{
                    node{
                    frontmatter{
                        title
                        date
                    }
                    fields{
                            slug
                    }
                    
                    }
                }
                }
            }
    
    
    
    `)

                console.log(data)

    return (
      <>
        <Container>
            <h1>Posts</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) =>{
                    return(
                        <li>
                        <Link to={`/blog/${edge.node.fields.slug}`} >
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </Link>

                        </li>
                      
                    )
                })}
            </ol>

        </Container>


      </>

    );
}

export default Blog;
