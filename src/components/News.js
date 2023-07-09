import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import  PropTypes  from "prop-types";

 
const News= (props)=>{
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1)
  const [totalResults,setTotal] = useState(0)
 
  
  useEffect( ()=>{
     document.title = `${capitalizefunc(props.category)}-News`;
    updateNew();



  },[])

 
    
  

  const updateNew = async () => {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=436c89326589452183f54e44be1cdda4&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    props.setProgress(50)
    var parsedData = await data.json();
    props.setProgress(70)
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotal(parsedData.totalResults)
    setLoading(false)
    
   
    props.setProgress(100)
  };

  const capitalizefunc = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };






  


  

  const fetchMoreData = async ()=>{
    setLoading(true)
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=436c89326589452183f54e44be1cdda4&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    
    let data = await fetch(url);
    var parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotal(parsedData.totalResults)
    setLoading(false)


  
  };

  


  return(
      <>
         
        
         
          
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            loading && <Spinner/>
          }
        >
          <div>
           
          </div>
          <h2 className="text-center margin"style={{color:"black"}}>
          Top {capitalizefunc(props.category)} headlines - NewsNow{" "}
        </h2>
          <div className="container  ">
          
         
          <div className="row ">
          
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6  col-sm-12 center  " key={element.url}>
                  {" "}
                  <NewsItem
                    author={element.author}
                    date={element.publishedAt}
                    title={
                      element.title ? element.title.slice(0, 40) + "..." : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 60) + ".."
                        : ""
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://tse1.mm.bing.net/th?id=OIP.gKA5pLQOuERfI69KW-jIOgHaE8&pid=Api&P=0&h=180"
                    }
                    newsUrl={element.url}
                  />
                </div>
                
              );
            })}
            </div>
          </div>
        </InfiniteScroll>
       
      </>
    
    );
   



}

News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
}
News.defaultProps = {
country:"us",
pageSize:10,
category:"general"
}



export default News;