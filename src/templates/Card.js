import React from 'react'
import {Link} from 'react-router-dom'
import Article from './Article'

function Card(props) {

  const trimIntro = (intro) =>{
      
    const length = 200;
    const trimmedString = intro.substring(0,length);
    return trimmedString
  }
  
  console.log(props)
    return (
            
            <div className="container">
  <div className="row">
    <div className="col-12">
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div className="card__background--main" style={{backgroundImage: "url('https://i.pinimg.com/564x/7f/bb/97/7fbb9793b574c32f5d28cae0ea5c557f.jpg')"}}/>
              <div className="card__background--layer"></div>
            </div>
          </div>

        <div className="blog-card__head">
        </div>
        <div className="blog-card__info">
          <h5>{props.title}</h5>
          <p>{trimIntro(props.introduction) + "..."}</p>
          
        <Link to={{ pathname: '/article',
              state: {
              title: props.title,
              introduction:props.introduction,
              mainBody1: props.mainBody1,
              mainBody2:props.mainBody2
              }
              }}>
     <a href="#" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
        </Link>
        </div>
      </article>
    </div>
  </div>
   
    
  
</div>

    )   
}

export default Card
