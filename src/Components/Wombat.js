import React, {useState, useEffect} from 'react'
import '../Styles/home.css'
import '../Styles/styles.css'
import wombat from "../Assets/wombat.png"

function Wombat() {
  return (
    <div className={"Wombat-container"}>
      <div className={"CircleContainer"}>
        <div className={"WombatCircle"}>
          <img className={"ExpIcon"} src={wombat} alt="Common Wombat"/>
        </div>
      </div>
      <div className={"Wombat-text-container"}>
        <h1>
          COMMON WOMBAT
        </h1>
        <h2>
          Junior Front-End Developer
        </h2>
        <h3>
          A software house specialising in React apps, design and copywriting. I've worked for Common Wombat for a year, gaining experience in both <b>React, React Native, </b> as well as
          using <b>CSS, HTML, Javascript and Sass</b>. I've also used things like <b>Leaflet, JSON, GeoJSON, </b>
          and more. I have also improved there my communication skills, as well as working with the client and UX designing.
        </h3>
      </div>
    </div>
  );
}

export default Wombat;
