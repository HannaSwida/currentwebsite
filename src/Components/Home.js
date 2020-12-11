import React, {useState, useEffect} from 'react'
import Welcome from "./Welcome";
import '../Styles/home.css'
import LoadingScreen from "./LoadingScreen";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Hanna Świda"
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, []);


  return (
    <>
      {loading === false ? (
        <>
          <div className="App">
            <Welcome/>
            <AboutMe/>
            <Experience/>
          </div>
          <Contact/>
        </>) : (
        <LoadingScreen/>)}</>
  );
}

export default Home;
