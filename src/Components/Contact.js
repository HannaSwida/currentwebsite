import React, {useState, useEffect} from 'react'
import '../Styles/contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <div className={"Contact-container"}>
        <h1>Contact Me</h1>
        <a href="mailto:hanna.swida@gmail.com">hanna.swida@gmail.com</a>
        <p>Mobile: 661 129 995</p>
        <span>
        <a href={"https://www.linkedin.com/in/hannaswida/"}>
            <FontAwesomeIcon className={"icon"} icon={faLinkedin} />
        </a>
        <a href={"https://www.github.com/"}>
            <FontAwesomeIcon className={"icon"} icon={faGithub} />
        </a></span>
      </div>
    </>
  );
}

export default Contact;
