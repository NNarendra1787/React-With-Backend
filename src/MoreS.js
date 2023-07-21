import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './responsive.css'
import axios from "axios";

function MoreS() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  const [count, setCount] = useState(3);
  

  useEffect(() => {
    var url1 = "https://react-backend-data.onrender.com/api/category/top";
    axios.get(url1).then((resp) => {
      setData(resp.data);
      console.log("inner", resp.data);
      setLoaded(true);
      // console.log(data);
    });
  }, [params]);

  if (loaded) {
    return (
      <div className="ReDown">
        <h3>More From The Siren</h3>
        <hr />
        <div className="homi">
          {data.filter((g)=>{return g.cat === "Hollywood" && g.id === 7}).map((it, ind)=>{
            return(

              <div className="Boxxer" key={ind}>
            <img src={it.urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${it.title}`} state={it}>
              <h3 className="text-wid">{it.title} </h3>
            </Link>
          </div>
              )
          })}
          {data.filter((g)=>{return g.cat === "Technology" && g.id === 7}).map((it, ind)=>{
            return(

              <div className="Boxxer" key={ind}>
            <img src={it.urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${it.title}`} state={it}>
              <h3 className="text-wid">{it.title} </h3>
            </Link>
          </div>
              )
          })}

          {data.filter((g)=>{return g.cat === "Fitness" && g.id === 9}).map((it, ind)=>{
            return(

              <div className="Boxxer" key={ind}>
            <img src={it.urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${it.title}`} state={it}>
              <h3 className="text-wid">{it.title} </h3>
            </Link>
          </div>
              )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading...</h1>;
      </div>
    );
  }
}

export default MoreS;
