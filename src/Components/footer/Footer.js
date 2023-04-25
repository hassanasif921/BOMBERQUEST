import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import Icons from "../../Assets/logo.png";
const Footer = () => {
  return (
    <Container fluid className='bggr' style={{paddingBottom:'50px'}}>

<Container style={{width:'50%',marginTop:'130px'}}>
           <Link to={'/'}> <img className='fotrimg' variant="top" src={Icons} /></Link>
</Container>
      

    <div className="social-icons">
    <a className='ico' href=''>
      <i  className="fa-brands fa-discord ico3"/>
      <div className="tooltip">Codepen</div>
    </a>
    <a className='ico' href=' '>
    <i class="fa-brands fa-facebook ico3"></i>
      <div className="tooltip">Github</div>
    </a>
    <a className='ico' href=' '>
    <i class="fa-brands fa-youtube ico3"></i>
      <div className="tooltip">Twitter</div>
    </a>
    <a className='ico' href=' '>
    <i class="fa-brands fa-instagram ico3"></i>
      <div className="tooltip">Dribbble</div>
    </a>
    <a className='ico' href=' '>
    <i class="fa-brands fa-twitter ico3"></i>
      <div className="tooltip">Instagram</div>
    </a>
    <a className='ico' href=' '>
    <i class="fa-brands fa-tiktok ico3"></i> 
      <div className="tooltip">LinkedIn</div>
    </a>
  
  </div>
  <Container style={{marginBottom:'0px',marginTop:'50px'}}>
    <Link to={'/aboutus'}><span style={{color:'white',marginRight:'20px'}}>@Bomberquest 2022</span></Link>
  </Container>
  <div style={{marginBottom:'50px',marginTop:'0px'}}>
   
  </div>
  </Container>
  )
}

export default Footer