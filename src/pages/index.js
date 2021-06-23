import * as React from "react"
import '../App.css'
import Navbar from '../components/Navbar'
import {Container} from '../components/styledComponents/NavbarElements'
import {Title} from '../components/styledComponents/NavbarElements'
import {Bio} from '../components/styledComponents/NavbarElements'
import Blog from '../pages/blog'
import BlogPage from "../templates/blog"
const IndexPage = () => {
  return (
    <Container>
        <Navbar />
        <Title>
            Hi, I'm Shauyb
        </Title>
        <Bio>
            I'm a self-taught Developer currrently working for a Sports Nutrion Company in the UK .
            My Journey into tech started 8 Months ago and I'd love to have you along for the ride
        </Bio>
        <Bio>
              I'm currrently working on Data visulation and Web Development using D3.js, React, GraphQL and Gatsby.
        </Bio>
        <Bio>
              My personal projects include this Blog and various up-comming projects including photography and my tech instagram
        </Bio>

    
        <BlogPage/>
    </Container>
    

  )
}

export default IndexPage
