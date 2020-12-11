import React from 'react'
import '../Styles/home.css'
import '../Styles/styles.css'

function JobsColumn({img, text, title, classN}) {
  return (
    <div className={"Jobs-Container"}>
      <div className={"Circle-empty"}>
        <img src={img} className={classN} alt={title}/>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default JobsColumn;
