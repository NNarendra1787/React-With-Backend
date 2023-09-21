import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SinglePage from "./SinglePage";
import Navbar from "./Navbar";
import './responsive.css'

// import notloading from "./videos/cached_FILL0_wght400_GRAD0_opsz48.svg";
import axios from "axios";

function OpenPage() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  console.log("uppars", params);
  // console.log({});

  var stringTitle = params.category;
  stringTitle = stringTitle.toUpperCase();

  const para = params.category

  const [count, setCount] = useState(7);

  // const date = new Date();
  // const dateString = "2022-05-31";
  
  useEffect(() => {

    axios.get("https://react-backend-data.onrender.com/api/category/categries2").then(res=> setData(res.data), setLoaded(true))
    
    
  }, [params]);
  console.log("this is data commming", data);

  if (loaded) {
    return (
      <>
        <Navbar />
        <div className="Main">
          <div className="NewsPage">
            <h1>{stringTitle}</h1>
            {data.filter((e)=>{ return e.cat === para}).map((article, index) => {
              console.log("params",params);
              console.log("articles",article);
              console.log("fitness",data.fitness);

              if (index < count) {
                return (
                  <div className="articuno" key={index}>
                    <img className="pic" src={article.urlToImage} alt="Load" />

                    <div className="text-content">
                      <Link to={`/CLickPage/${article.title} `} state={article}>
                        <h4 className="heading">{article.title}</h4>
                      </Link>

                      <p className="content">{article.content}</p>

                      <p className="published">{article.publishedAt}</p>
                    </div>
                  </div>
                );
              }
            })}
            <p
              className="lM"
              onClick={() => {
                setCount(count + 7);
              }}
            >
              Load More ⬇️
            </p>
          </div>
          <SinglePage />
        </div>
      </>
    );
  } else {
    return (
      <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
    );
  }
}

export default OpenPage;
