import React from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/navbar';


export default function App() {

   return (
      <Router>
         <Navbar></Navbar>
      </Router>
   );
}
