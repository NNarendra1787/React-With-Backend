import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LStory(props) {
  const [data, setData] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const nav = useNavigate();

  // const [count, setCount] = useState(3);

  // const date = new Date();
  // const dateString =
  //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  useEffect(() => {
    var url1 = "https://react-backend-data.onrender.com/api/category/top";
    axios.get(url1).then((resp) => {
      setData(resp.data);
      console.log("inner", resp.data);
      // setLoaded1(true);
      // console.log(data);
    });
  }, [params]);
  // if (loaded) {
  return (
    <div className="DownSide">
      <hr className="shiro" />
      <h1>Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          {data
            .filter((m) => {
              return m.cat === "Bollywood" && m.id === 5;
            })
            .map((it, ind) => {
              return (
                <div className="side-box" key={ind}>
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h3 className="heading">{it.title} </h3>
                  </Link>
                  <p className="cont">{it.content}</p>
                  <br />
                </div>
              );
            })}
        </div>
        <div className="kasama">
          {data.filter((j)=>{return j.cat === "Hollywood" && j.id === 8}).map((it, ind)=>{

            return (
              <div className="side-box" key={ind}>
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h3 className="heading">{it.title} </h3>
                  </Link>
                  <p className="cont">{it.content}</p>
                  <br />
                </div>
              );
            })}
        </div>
        <div className="kasama">
          {data
            .filter((j) => {
              return j.cat === "Technology" && j.id === 6;
            })
            .map((it, ind) => {
              return (
                <div className="side-box" key={ind}>
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h3 className="heading">{it.title} </h3>
                  </Link>
                  <p className="cont">{it.content}</p>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
      <hr className="shiro" />
      <p
        className="lM"
        onClick={() => {
          nav("/bollywood");
        }}
      >
        View More ➡️
      </p>
    </div>
  );
  // } else {
  //   return (
  //     <div className="lodwalpart">
  //       <h1 className="loading">Loading...</h1>;
  //     </div>
  //   );
  // }
}

export default LStory;
