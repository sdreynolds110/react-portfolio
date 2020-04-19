import React from "react";

export default function EducationComponent(props) {

   return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
         <div className="resume-content">
            <h3 className="mb-0">{props.title}</h3>
            <div className="subheading mb-3">{props.subTitle}</div>
         </div>
         <div className="resume-date text-md-right">
            <span className="text-primary">{props.date}</span>
         </div>
      </div>
   );
}