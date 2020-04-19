import React from "react";

export default function ExampleComponent(props) {

   return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
         <div className="resume-content">
            <h3 className="mb-1">{props.title}
               <a href={props.github} title={props.h3Title} rel="noreferrer noopener" target="_blank">
               <i className="fab fa-github"></i>
               </a>
            </h3>
            <div className="subheading mb-3">

               <a href={props.deployed} title={props.title} rel="noreferrer noopener" target="_blank">
                  <img className = {props.class} src={props.src} alt={props.title}/>
               </a>

            </div>
            <p>{props.description}</p>
         </div>
      </div>
   );
}