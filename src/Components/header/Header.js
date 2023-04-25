import React ,{useState , useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import Icons from "../../Assets/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
var [Collapse  , setCollapse] = useState("collapse")
var [Expend  , setExpend] = useState("false")

async function clickHome(){
  document.getElementById('home').style.color = '#28f8f8';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickGame(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = '#28f8f8';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clicknft(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = '#28f8f8';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickEvents(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = '#28f8f8';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = 'white';

}
async function clickMerchs(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = '#28f8f8';
  document.getElementById('account').style.color = 'white';

}
async function clickAccount(){
  document.getElementById('home').style.color = 'white';
  document.getElementById('game').style.color = 'white';
  document.getElementById('nft').style.color = 'white';
  document.getElementById('events').style.color = 'white';
  document.getElementById('merchs').style.color = 'white';
  document.getElementById('account').style.color = '#28f8f8';

}





async function nave() {
  setCollapse('')
  setExpend('true')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.add("show");
  document.getElementById('nave').style.display = 'none';
  document.getElementById('wave').style.display ='block';
}
function wave() {
  setCollapse('collapse')
  setExpend('false')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.remove("show");
  document.getElementById('nave').style.display = 'block';
  document.getElementById('wave').style.display ='none';
}


useEffect(() => {
 document.getElementById('nave').style.backgroundColor = 'white'
},[Collapse , Expend]);


  return (
<>

<div style={{marginBottom:'50px'}} id="header">
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand d-block d-lg-none" href="#">
       
          <div className="logo">
         <Link to={'/blogpage'}><Card.Img style={{ width: '100px'}} variant="top" src={Icons} /></Link> 
          </div>
   
      </div>
      <button
      id="nave"
        onClick={nave}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <button
      id="wave"
        onClick={wave}
        style={{display:'none'}}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul style={{marginRight:'auto',marginLeft:'auto'}} className="navbar-nav">
          <li style={{marginRight:"initial",fontSize:'12px' }} className="nav-item">
            <Link to={'/'} id="home" onClick={clickHome} className="nav-link active" aria-current="page">
              HOME
            </Link>
          </li>
          <li style={{marginRight:"initial",fontSize:'12px'}} className="nav-item">
            <Link to={'/game'} id="game" onClick={clickGame} className="nav-link" >
              NFT         
            </Link>
          </li>
          <li style={{marginRight:"initial",fontSize:'12px'}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            MARKET 
            </Link>
          </li>
          <li style={{marginRight:"initial",fontSize:'12px'}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            DOCS 
            </Link>
          </li>
          <li style={{marginRight:"initial",fontSize:'12px'}} className="nav-item">
            <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
            ABOUT 
            </Link>
          </li>
        </ul>
        <div className="navbar-brand d-none d-lg-block" href="#">
          
            <div className="logo center-logo">
           <Link to={'/'}> <Card.Img  style={{ width: '40%' ,marginTop:'-36px',marginBottom:'-40px',marginLeft:'50px'}} variant="top" src={Icons} /></Link>
            </div>
      
        </div>
        <ul className="navbar-nav">
  
          <li className="nav-item">
          <Button  className='dpdown' ><span style={{fontFamily:'sans-serif' , fontWeight:'bolder'}}>ENGLISH</span></Button>
          </li>
          {/* <i className="fas fa-angle-down"></i> */}
          <li style={{marginLeft:'2px'}} onClick={clickAccount} className="nav-item">
         <Button  className='walletbtn'><i className="fas fa-wallet"><span style={{fontFamily:'sans-serif' , fontWeight:'bolder'}}>WALLET</span></i></Button>
          </li>
      
        </ul>
      </div>
    </nav>
  </div>
</div>

</>
  );
};

export default Header;
