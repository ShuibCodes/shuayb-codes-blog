import React from 'react';
import {Logo} from '../components/styledComponents/NavbarElements'
import {useStaticQuery, graphql} from 'gatsby'
const Navbar = () => {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    
    
    
    `)



    return (
        <>
        <Logo>
            {data.site.siteMetadata.title}
        </Logo>

        
        </>
    );
}

export default Navbar;
