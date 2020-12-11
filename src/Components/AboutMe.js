import React, {useState, useEffect} from 'react'
import '../Styles/home.css'
import me from '../Assets/me.png'
import '../Styles/styles.css'
import Fade from "react-reveal";

function AboutMe() {
  return (
    <div className={"AboutMe"}>
      <div className={"MyWrapper"}>
        <img className={"MyFace"} src={me} alt="Me"/>
        <div className={"TextWrapper"}>
          <Fade top>
            <h1>ABOUT ME</h1>
          </Fade>
          <Fade right>
            <div className={"Line"}/>
          </Fade>
          <Fade top>
            <div className={"TextAbout"}>
            <p>My name is <b>Hanna Świda</b>, and I am a student at Gdańsk University of Technology,
              currently doing my Master's degree. </p>
            <p>I have experience in both <b>React and React Native, CSS and HTML.</b> I also know the basics of
              algorithms
              and
              data
              structures. I also have an experience with PR, creating visual identifications, creating billboard ads, website ads and icon art. </p>
            </div>
            </Fade>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
