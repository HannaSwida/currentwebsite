import React, {useState, useEffect} from 'react'
import '../Styles/home.css'
import me from '../Assets/me.png'
import react from '../Assets/react.png'
import css from '../Assets/css.png'
import html from '../Assets/html3.png'
import Fade from "react-reveal";
import Wombat from "./Wombat";
import JobsColumn from "./JobsColumn";
import coltex from "../Assets/coltex.png";
import best from "../Assets/best.png"
import hand from "../Assets/hand.png"

function Experience() {
  return (
    <>
      <div className={"Experience"}>
        <h2>MY EXPERIENCE</h2>
        <Fade top cascade>
          <div className={"ExpGrid"}>
            <div className={"ExpEl"}>
              <img className={"ExpIcon"} src={react} alt="React"/>
              React
            </div>
            <div className={"ExpEl"}>
              <img className={"ExpIcon"} src={react} alt="React"/>
              React Native
            </div>
            <div className={"ExpEl"}>
              <img className={"ExpIcon"} src={css} alt="CSS"/>
              CSS
            </div>
            <div className={"ExpEl"}>
              <img className={"ExpIcon"} src={html} alt="HTML"/>
              HTML
            </div>
            <div className={"ExpEl"}>
              <img className={" hands"} src={hand} alt="React"/>
              HR/PR
            </div>
          </div>
        </Fade>
      </div>
      <span className="saving between"><span>.</span><span>.</span><span>.</span></span>
      <div className={"Jobs"}>
        <Fade left>
        <Wombat/>
        </Fade>
        <Fade bottom>
        <div className={"Jobs-columns"}>
          <JobsColumn img={coltex} title={"Coltex"} classN={"Coltex"} text={"I worked at the Coltex company making advertisements and I have also" +
          "created their website using Yoomla and a bit of PHP. All of the photos (except for the gallery), icons and pictures are " +
          "made by me. I have also created a good chunk of components myself."}/>
          <JobsColumn img={best} title ={"Board of European Students of Technology"} classN ={"BEST"} text={"My task was to create an action plan to make the " +
          "Gdańsk BEST group more involved in international projects and making BEST Gdańsk more significant internationally and locally." +
          " Working with the group, my university and groups from Europe and Russia strengthened my skills in PR, communication and HR"}/>
        </div>
        </Fade>
      </div>
    </>
  );
}

export default Experience;
