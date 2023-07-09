import React, { Component } from 'react'

const NewsItem =(props)=> {


  
    let {title, description,imgUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3 '>
        <div className="card "  style={{width: "18rem", color:'black'}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text text-danger"><small className="text-danger">by {author} on {date}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-danger">readmore</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
