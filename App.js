import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./UTS/Navbar";
import Header from "./UTS/Header";
import Content from "./UTS/Content";
import Footer from "./UTS/Footer";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;