import React from 'react'
import {useLocation} from 'react-router-dom'

function Article(props) {
// useLocation to access the route state from Blog.js 
const { state = {} } = useLocation();

console.log(state)


    return (
        <div className="main">   
            <h1 className="title">{state.title}</h1>
            <p className="intro">{state.introduction}</p>
             <p className="main1">{state.mainBody1}</p>
             <p className="main2">{state.mainBody2}</p>
        </div>
    )
}

export default Article