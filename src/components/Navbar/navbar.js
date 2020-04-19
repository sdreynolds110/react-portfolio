 import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../home";
import Education from "../education";
import Projects from "../projects";
import Experience from "../experience";
import Interests from "../interests";

function Navbar({ location }) {
    return (
      <div className="page-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Stephen Reynolds</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/52561366_10156310255396553_6330234211743563776_n (1).jpg" alt=""></img>
                </span>
            </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="projects">Projects</Link>
        </li>    
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="interests">Interests</Link>
        </li>
      </ul>
    </div>
  </nav>

  <TransitionGroup>
            <CSSTransition
               key={location.key}
               timeout={{ enter: 300, exit: 300 }}
               classNames={'fade'}
            >
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/experience">
                     <Experience />
                  </Route>
                  <Route path="/education">
                     <Education />
                  </Route>
                  <Route path="/projects">
                     <Projects />
                  </Route>
                  <Route path="/interests">
                     <Interests />
                  </Route>
               </Switch>
            </CSSTransition>
         </TransitionGroup>
  </div>  
    )
}

export default withRouter(Navbar);