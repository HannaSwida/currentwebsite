import React, { useState } from 'react';
import '../Styles/home.css'
import '../Styles/mobile.css'
import Sky from 'react-sky'
import Fade from 'react-reveal'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pinkreact from '../Assets/pinkreact.png'
import reactblue from '../Assets/reactblue.png'

const StyledButton = withStyles({
  root: {
    background: 'hotpink',
    borderRadius: 3,
    border: 0,
    fontSize:'2vh',
    color: 'black',
    padding: '1vh 3vw',
    margin:'1vh 0'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
/**
 * @return {string}
 */
function Welcome() {
  const [count, setCount] = useState(0);
  let whoAmI = 'Front-End Developer'
  if(count%3===0){
    whoAmI =  'Front-End Developer';
  }else if(count%3===1) whoAmI =  'Student';
  else{
    whoAmI =  'Graphic Designer';
  }

  return (
    <>
      <div className={"Upper-line"}> </div>
    <div className={"Background-Welcome"}>
      <div className={"Welcome"}>
        <Fade top>
        <h1>WELCOME</h1>
      </Fade>
        <p className="saving">MY NAME IS HANNA. I am a<span>.</span><span>.</span><span>.</span></p>
        <p className={"WhoAmI"}>{whoAmI}</p>
      <StyledButton color="primary" variant="contained" onClick={() => setCount(count + 1)}>
        WHO ELSE AM I?
      </StyledButton>
      </div>
      <div className={"Sky"}>
      <Sky className={"Sky"}
           images={{
             0: reactblue,
             1: reactblue,
             2: reactblue,
             3: pinkreact
           }}
           how={80} /* Pass the number of images Sky will render chosing randomly */
           time={170} /* time of animation */
           size={'80px'} /* size of the rendered images */
           background={'#2a2e2e'} /* color of background */
      />
    </div>
    </div>
      </>
  );
}

export default Welcome;