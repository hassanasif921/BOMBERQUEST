import { BrowserRouter, Router } from 'react-router-dom';
import { Route , Routes , useLocation} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  console.clear();
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
          <Row className='left'>
            <Col xs={12} md={6}>
            <Button className='btnWhite' >GETTING STARTED</Button>
            </Col>
            <Col xs={12} md={6}>
             <Button  className='btnYellow' >MARKETPLACE</Button></Col>
            <div style={{marginRight:'28px',marginBottom:'50px',marginTop:'150px'}} className="social-icons">
    <a className='ico2' href='https://discord.gg/Xpk25q6vRy'>
      <i  className="fab fa-discord"/>
      <div className="tooltip">Codepen</div>
    </a>
    <a className='ico2' href=' '>
    <i class="fab fa-facebook"></i>
      <div className="tooltip">Github</div>
    </a>
    <a className='ico2' href=' '>
    <i class="fab fa-youtube"></i>
      <div className="tooltip">Twitter</div>
    </a>
    <a className='ico2' href=' '>
    <i class="fab fa-instagram"></i>
      <div className="tooltip">Dribbble</div>
    </a>
    <a className='ico2' href=' '>
    <i class="fab fa-twitter"></i>
      <div className="tooltip">Instagram</div>
    </a>
    <a className='ico2' href=' '>
    <i class="fab fa-tiktok"></i> 
      <div className="tooltip">LinkedIn</div>
    </a>
           </div>
          </Row>
          </Col>
            <Col xs={12} md={6}>
            <Card.Img
              style={{ width: "85%", borderRadius: "10px" }}
              variant="top"
              src='https://s3-alpha-sig.figma.com/img/2740/27a0/c2e23ca9fe66df5bde3fb445a9af7b1a?Expires=1682899200&Signature=nOAvUu~rGrUKl8Cd75yr-CX~GqtM0djnr99u5zX1ij2NqsAX-klNyKwtbBx3o7qshWKzrMwLibFv9sjdos87GG25Ic4Nranr-xwrP7o5XZ~c1I8ILdL2UFnR49OybUIpDRQ4~vBaROg6gj6SUEBo1UAvcg3i9bHWagD4YMeikMszDGu4uiIbhWfkONElyl5GLeKhjj5jX2NFWxQiwf61iiWq0NqO9YcZBVDz1h6EhWhrFY9MvOYpNmnkv-niREYDd~n79sXF1I~01r-9-knGCGxg~CqcxEA~kA35AHZGd9NvYvrfeSSvlNAjmU4fLBX-tXYYmcifSMQut9ttjMWdHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
