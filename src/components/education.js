import React, { Component } from "react";
import education from "./education.json"
import Card from "./card";
import Header from "./header";
import EducationComponent from "./educationcomponent";

export default class Education extends Component {

   state = {education, header: "Education" }

   handleCard() {
      return education.map(education =>
         <EducationComponent
            title={education.title}
            subTitle={education.subTitle}
            description={education.description}
            description2={education.description2}
            dates={education.dates}
         />
      )
   }

   render() {
      return (

         <Card>
            <Header
               header={this.state.header}
               handleCard={this.handleCard()}
            >
            </Header>
         </Card>
      );
   }
}