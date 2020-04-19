import React from "react";

export default function Header(props) {

   return (
      <div className="w-100">
         <h2 className="mb-5">{props.header}</h2>
         {props.handleCard}
         {props.children}
      </div>
   )
}