import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import axios from "axios";
function Latest(props) {
  const [data, setData] = useState([]);
  // const [loaded1, setLoaded1] = useState(false);
  const params = useParams();
  // console.log(params.category);
  const navi = useNavigate()
  const [cot, setCot] = useState(4);

  useEffect(() => {
    var url1 = "https://react-backend-data.onrender.com/api/category/categries2";
    axios.get(url1).then((resp) => {
      setData(resp.data);
      console.log("inner", resp.data);
      // setLoaded1(true);
      // console.log(data);
    });
  }, [params]);
  // console.log("Props", props.props);

  // const {data} = props.props
  // if (loaded) {
  return (
    <div className="LatArticle">
      <div>
        <h1>Latest Articles</h1>
        <hr className="myhr" />
        {data
          .filter((e) => {
            return e.cat === "Hollywood" && e.id === 23;
          })
          .map((it, ind) => {
            return (
              <div className="mainFirst" key={ind}>
                <img className="mmypic" src={it.urlToImage} alt="lod.." />
                <div className="sistum">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h4 className="heading">{it.title} </h4>
                  </Link>
                  <p className="lp">{it.content}</p>
                </div>
              </div>
            );
          })}
        {data
          .filter((ell) => {
            return ell.cat === "Bollywood" && ell.id === 95;
          })
          .map((it, ind) => {
            return (
              <div className="mainFirst" key={ind}>
                <img className="mmypic" src={it.urlToImage} alt="lod.." />
                <div className="sistum">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h4 className="heading">{it.title} </h4>
                  </Link>
                  <p className="lp">{it.content}</p>
                </div>
              </div>
            );
          })}
        {data
          .filter((e) => {
            return e.cat === "Technology" && e.id === 119;
          })
          .map((it, ind) => {
            return (
              <div className="mainFirst" key={ind}>
                <img className="mmypic" src={it.urlToImage} alt="lod.." />
                <div className="sistum">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h4 className="heading">{it.title} </h4>
                  </Link>
                  <p className="lp">{it.content}</p>
                </div>
              </div>
            );
          })}

        {data
          .filter((e) => {
            return e.cat === "Food" && e.id === 173;
          })
          .map((it, ind) => {
            return (
              <div className="mainFirst" key={ind}>
                <img className="mmypic" src={it.urlToImage} alt="lod.." />
                <div className="sistum">
                  <Link to={`/ClickPage/${it.title}`} state={it}>
                    <h4 className="heading">{it.title} </h4>
                  </Link>
                  <p className="llp">{it.content}</p>
                </div>
              </div>
            );
          })}
      </div>
      <p 
        onClick={() => {
          navi("/Hollywood")
        }}
    
        className="lM"
      >
        Load More ⬇️
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

export default Latest;
