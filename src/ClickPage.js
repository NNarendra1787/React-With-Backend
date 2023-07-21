import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Boy from "./videos/Mask Group 16.png";
import Facebook from "./videos/facebook.png";
import Youtube from "./videos/youtube.png";
import Twitter from "./videos/twitter.jpeg";
import Insta from "./videos/instagram.jpeg";
import Share from "./videos/share_FILL0_wght400_GRAD0_opsz48.svg";
import Clap from "./videos/rythm.svg";
import notloading from "./videos/cached_FILL0_wght400_GRAD0_opsz48.svg";
import MoreS from "./MoreS";
import './responsive.css'

function ClickPage() {
  const locate = useLocation().state;
  console.log("Use Location() : ", locate);

  const navigat = useNavigate();
  return (
    <div className="ClickPage">
      <section className="giverInfor">
        <aside className="Giver">
          <img className="boy" src={Boy} alt={notloading} />
          <p>Dimitry Norzohoko</p>
          <p id="BoyLeadP">On Date: {locate.publishedAt}</p>
        </aside>
        <aside>
          <img className="infor" src={Youtube} alt={notloading} />
          <img className="infor" src={Facebook} alt={notloading} />
          <img className="infor" src={Insta} alt={notloading} />
          <img className="infor" src={Twitter} alt={notloading}/>
        </aside>
      </section>
      <img src={locate.urlToImage} alt={notloading} className="leadPic" />
      <h1 id="LeadT">{locate.title}</h1>
      <p id="LeadD">{locate.description}</p>
      <p id="LeadC">{locate.content}</p>
      <aside className="giver">
        <img className="boy" src={Boy} alt={notloading} />
        <p id="LeadA">Artical By: {locate.author}</p>
      </aside>
        <p id="LeadP">On Date: {locate.publishedAt}</p>

      <section className="shareLeft">
        <aside className="takeit">
          <img  className="infor" src={Clap} alt={notloading} />
          <p>9.3k</p>
        </aside>
        <aside className="takeit">
          <img  className="infor" src={Share} alt={notloading} />
          <p>Share This Article</p>
        </aside>
      </section>
      <p
        onClick={() => {
          navigat(-1);
        }}
        className="BacktoHome"
      >
        ⬅️Come to Home
      </p>
      <hr />
      <MoreS />
    </div>
  );
}

export default ClickPage;
