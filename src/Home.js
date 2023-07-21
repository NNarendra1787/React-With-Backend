import React, { useEffect, useState } from "react";
import Latest from "./Latest";
import "./Home.css";
import ReTop from "./ReTop";
import LStory from "./LStory";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./responsive.css";
import axios from "axios";

function Home() {
  const params = useParams();

  const [data, setData] = useState([]);

  const [loaded1, setLoaded1] = useState(false);

  useEffect(() => {
    var url1 = "https://react-backend-data.onrender.com/api/category/categries2";

    // const req1 = new Request(url1);
    axios.get(url1).then((resp) => {
      setData(resp.data);
      console.log("inner", resp.data);
      setLoaded1(true);
      // console.log(data);
    });
  }, [params]);
  console.log("outer", data);

  if (loaded1) {
    return (
      <>
        <Navbar />
        <div id="SweetHome">
          {/* <h1>Home Page</h1> */}
          <div className="Topper">
            <section className="Topver">
              {data &&
                data
                  .filter((e) => {
                    return e.cat === "Hollywood" && e.id === 28;
                  })
                  .map((it, ind) => {
                    return (
                      <aside id="TopLeft" key={ind}>
                        <img
                          className="topImg"
                          src={it.urlToImage}
                          alt="load"
                          onError={() => {
                            console.log("Having Error");
                          }}
                        />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h3 className="letfull">{it.title} </h3>
                        </Link>
                      </aside>
                    );
                  })}
              <section className="RightSideSet">
                {data
                  .filter((e) => {
                    return e.cat === "Fitness";
                  })
                  .slice(29, 31)
                  .map((it, ind) => {
                    return (
                      <aside id="TopRight" key={ind}>
                        <img
                          className="sideTopImg"
                          src={it.urlToImage}
                          alt="load"
                        />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h5 className="topRight">{it.title} </h5>
                        </Link>
                      </aside>
                    );
                  })}
                {data
                  .filter((e) => {
                    return e.cat === "Techonlogy";
                  })
                  .slice(39, 41)
                  .map((it, ind) => {
                    return (
                      <aside id="BottomRight" key={ind}>
                        <img
                          className="sideImg"
                          src={it.urlToImage}
                          alt="load"
                        />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h5 className="bottomright">{it.title} </h5>
                        </Link>
                      </aside>
                    );
                  })}
              </section>
            </section>
          </div>

          {/* Latest wala */}
          <div className="UpSide">
            <h1>The Latest</h1>
            <div className="gasli">
              <div className="Top-let">
                {data
                  .filter((e) => {
                    return e.cat === "Technology" && e.id === 115;
                  })
                  .map((it, ind) => {
                    return (
                      <div className="sid-box" key={ind}>
                        <img src={it.urlToImage} alt="go" className="mg" />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h4 className="const">{it.title} </h4>
                        </Link>

                        <p className="const">{it.content}</p>
                      </div>
                    );
                  })}

                {data
                  .filter((e) => {
                    return e.cat === "Food" && e.id === 161;
                  })
                  .map((it, ind) => {
                    return (
                      <div className="sid-box" key={ind}>
                        <img src={it.urlToImage} alt="go" className="mg" />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h4 className="const">{it.title} </h4>
                        </Link>

                        <p className="const">{it.content}</p>
                      </div>
                    );
                  })}
                {data
                  .filter((e) => {
                    return e.cat === "Bollywood" && e.id === 89;
                  })
                  .map((it, ind) => {
                    return (
                      <div className="sid-box">
                        <img src={it.urlToImage} alt="go" className="mg" />
                        <Link to={`/ClickPage/${it.title}`} state={it}>
                          <h4 className="const">{it.title} </h4>
                        </Link>

                        <p className="const">{it.content}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="midpart">
            <Latest />
            <ReTop />
          </div>
          <section className="BigigImg">
            {data
              .filter((big) => {
                return big.cat === "Bollywood" && big.id === 81;
              })
              .map((it, ind) => {
                return (
                  <div className="Bimg" key={ind}>
                    <img src={it.urlToImage} alt="alt" id="bigImg" />
                  </div>
                );
              })}
          </section>

          <div>
            <LStory />
          </div> 
        </div>
      </>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading...</h1>;
      </div>
    );
  }
  
}

export default Home;
