import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReTop(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    var url1 = "https://react-backend-data.onrender.com/api/category/categries2";
    axios.get(url1).then((resp) => {
      setData(resp.data);
      console.log("inner", resp.data);
      // setLoaded1(true);
      // console.log(data);
    });
  }, []);

  return (
    <div className="rightSide">
      <div className="hunter">
        <div className="ADD">
          <h1 className="myad">Advertisement</h1>
        </div>
        <h1>Top Post</h1>
        {data
          .filter((N) => {
            return N.cat === "Bollywood" && N.id === 80;
          })
          .map((it, ind) => {
            return (
              <div className="firstPage" key={ind}>
                <img
                  src={it.urlToImage}
                  alt={<img src="" alt="TheSiren" />}
                  className="mypic"
                />
                <Link to={`/ClickPage/${it.title}`} state={it}>
                  <h4 className="heading">{it.title} </h4>
                </Link>
                <p className="side-diff">{it.content}</p>
              </div>
            );
          })}

        {/* Down Tree */}
        {data
          .filter((p) => {
            return p.cat === "Technology" && p.id === 138;
          })
          .map((it, ind) => {
            return (
              <div className="pikachu" key={ind}>
                <img className="repic" src={it.urlToImage} alt="loding...." />
                <div className="side-cont">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h5 className="heading">{it.title} </h5>
                  </Link>
                  <p className="HoDec">{it.content}</p>
                  <br />
                </div>
                {/* <hr /> */}
              </div>
            );
          })}

        {data
          .filter((e) => {
            return e.cat === "Hollywood" && e.id === 40;
          })
          .map((it, ind) => {
            return (
              <div className="pikachu" key={ind}>
                <img className="repic" src={it.urlToImage} alt="loding...." />
                <div className="side-cont">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h5 className="heading">{it.title} </h5>
                  </Link>
                  <p className="HoDec">{it.content}</p>
                  <br />
                </div>
                {/* <hr /> */}
              </div>
            );
          })}

        {data
          .filter((r) => {
            return r.cat === "Hollywood" && r.id === 36;
          })
          .map((it, ind) => {
            return (
              <div className="pikachu" key={ind}>
                <img className="repic" src={it.urlToImage} alt="loding...." />
                <div className="side-cont">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h5 className="heading">{it.title} </h5>
                  </Link>
                  <p className="HoDec">{it.content}</p>
                  <br />
                </div>
                {/* <hr /> */}
              </div>
            );
          })}
      </div>
      {/* <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Lode More
            </button> */}
    </div>
  );
}

export default ReTop;
