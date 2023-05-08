import { BrowserRouter, Router } from 'react-router-dom';
import { Route , Routes , useLocation} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ma from './Assets/ma.png'
import './App.css';

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
  
  return (
    <div className="App">
       <div className="banner container-fluid">
       {pathValue === "/admin"?"":<Header />}
        <Container >
          <Row style={{ height: "100%" }}>
          <Col xs={12} md={6}>
          <h1 className="hding">
          Battle for Crypto Income - Join Bomber Quest Today!
          </h1>
          <Card.Img 
            className='imagemob'
              style={{ width: "100%", borderRadius: "10px" }}
              variant="top"
              src={ma}
              />
          <Row className='left'>
            <Col xs={12} md={6}>
            <Button className='btnWhite' >GETTING STARTED</Button>
            </Col>
            <Col xs={12} md={6}>
             <Button  className='btnYellow' >MARKETPLACE</Button></Col>
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
          </Row>
          </Col>
            <Col xs={12} md={6}>
            <Card.Img 
            className='images'
              style={{ width: "85%", borderRadius: "10px" }}
              variant="top"
              src={ma}
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
