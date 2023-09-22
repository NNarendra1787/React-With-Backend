import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import myAdd from './videos/'
// import './mainpart.css'
// import AD from './videos/notworkin.jpg'

function SinglePage() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  const para = params.category;
  const [count, setCount] = useState(4);
  const [cot, setCot] = useState(1);

  // const date = new Date();
  // const dateString =
  //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  useEffect(() => {

    axios.get("https://react-backend-data.onrender.com/api/category/top").then((res)=> setData(res.data), setLoaded(true))
    // axios.get("http://localhost:500/api/category/top").then((res)=> setData(res.data), setLoaded(true))

  }, [params]);

  if (loaded) {
    return (
      <div className="sideNews">
        <section className="Richu">
          <h1 id="Top-Post">Top Post</h1>
          {data.filter((e)=>{return e.cat === para}).map((sd, index) => {
            // console.log(count, index);
            if (index < cot) {
              return (
                <div key={index} className="first">
                  <img
                    src={sd.urlToImage}
                    alt={<img src="" alt="TheSiren" />}
                    className="mypic"
                  />
                  <Link to={`/ClickPage/${sd.title}`} state={sd}>
                    <h4 className="heading">{sd.title} </h4>
                  </Link>
                  <p className="St-cont">{sd.content}</p>
                </div>
              );
            }
            if (index < count) {
              return (
                <div className="pikachu" key={index}>
                  <img
                    className="repic"
                    src={sd.urlToImage}
                    alt={<img src="./videos/notworking.jpg" alt="TheSiren" />}
                  />
                  <div className="side-cont">
                    <Link to={`/ClickPage/${sd.title}`} state={sd}>
                      <h5 className="heading">{sd.title} </h5>
                    </Link>
                    <p className="sstcont">{sd.content}</p>
                    <br />
                  </div>
                  {/* <hr /> */}
                </div>
              );
            }
          })}
          <div className="AD">
          <h1 className="myad">Advertisement</h1>
          </div>
        </section>
      </div>
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

export default SinglePage;
