import { BrowserRouter, Router } from 'react-router-dom';
import { Route , Routes , useLocation} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

import groupnft from './Assets/animegroup.png'
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function App() {
  const location = useLocation();
  const pathValue=location.pathname;

  useEffect(() => {
    
  },[pathValue]);
  console.clear();
  return (
    <div className="App">
       <div className="banner container-fluid">
       {pathValue === "/admin"?"":<Header />}
        <Container fluid className='upcontainer'  >
          <Row style={{ height: "100%" }}>
          <Col xs={12} md={6}>
          <h1 className="hding">
          Battle for Crypto Income - Join Bomber Quest Today!
          </h1>
          <Card.Img 
            className='imagemob'
              style={{ width: "100%", borderRadius: "10px" }}
              variant="top"
              src={groupnft}
              />
          <Row className='left btnup'>
            <Col xs={12} md={6}>
            <div className='whiteborder'>
            <Button className='btnWhite btnstext' >GETTING STARTED</Button>
            </div>
            </Col>
            <Col xs={12} md={6}>
            <div className='yellowborder'>
            <Button  className='btnYellow btnstext' >MARKETPLACE</Button>
            </div>
             </Col>
             <Container fluid>
             <div className="social-icons">
    <a className='ico2' href='https://discord.gg/Xpk25q6vRy'>
    <i class="fa-brands fa-discord ico3"></i>
  
    </a>
    <a className='ico2' href=' '>
    <i className="fa-brands fa-facebook ico3"></i>
     
    </a>
    <a className='ico2' href=' '>
    <i className="fa-brands fa-youtube ico3"></i>
    
    </a>
    <a className='ico2' href=' '>
    <i className="fa-brands fa-instagram ico3"></i>
   
    </a>
    <a className='ico2' href=' '>
    <i className="fa-brands fa-twitter ico3"></i>

    </a>
    <a className='ico2' href=' '>
    <i class="fa-brands fa-tiktok ico3"></i> 

    </a>
           </div>
             </Container>
          </Row>
          
          </Col>
            <Col xs={12} md={6}>
            <Card.Img 
            className='images'
              style={{ width: "75%", borderRadius: "10px" }}
              variant="top"
              src={groupnft}
              />
            </Col>
          </Row>
          </Container>
        </div>
  
        <Routes>
          <Route exect path="/" element={<Home />} />
        </Routes>
        {pathValue === "/admin"?"":<Footer />}
    </div>
  );
}

export default App;
