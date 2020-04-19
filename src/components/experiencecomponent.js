import React from "react";

export default function ExperienceComponent(props) {

   return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
         <div className="resume-content">
            <h3 className="mb-0">{props.title}</h3>
            <div className="subheading mb-3">{props.subTitle}</div>
            <p>{props.description}</p>
         </div>
         <div className="resume-date text-md-right">
            <span className="text-primary">{props.dates}</span>
         </div>
      </div>
   );
}