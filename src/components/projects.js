import React, { Component } from "react";
import projects from "./projects.json"
import ProjectComponent from "./projectcomponent";
import Card from "./card";
import Header from "./header";


export default class Projects extends Component {

   state = { projects, header: "Projects" }


   handleCard() {
      return projects.map(projects =>
         <ProjectComponent
            title={projects.title}
            h3Title={projects.h3Title}
            github={projects.github}
            deployed={projects.deployed}
            src={projects.src}
            description={projects.description}
         />
      )
   }

   render() {
      return (
         <Card>
            <Header
               header={this.state.header}
               handleCard={this.handleCard()}>
            </Header>
         </Card>
      );
   }
}