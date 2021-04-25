import React from 'react';
import {Container} from '../components/styledComponents/NavbarElements'
import {useStaticQuery, graphql} from 'gatsby'
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
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </li>
                      
                    )
                })}
            </ol>

        </Container>


      </>

    );
}

export default Blog;
