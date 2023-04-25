import React, { Component } from 'react';


import "./style.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import image1 from '../../Assets/General images/x2/Block 3.png'
import piechart from '../../Assets/General images/x1/piechart.png'
import c1 from '../../Assets/General images/x1/block 4 - characters/photo-1.png'
import c2 from '../../Assets/General images/x1/block 4 - characters/photo-2.png'
import c3 from '../../Assets/General images/x1/block 4 - characters/photo-3.png'
import c4 from '../../Assets/General images/x1/block 4 - characters/photo-4.png'
import c5 from '../../Assets/General images/x1/block 4 - characters/photo-5.png'
import c6 from '../../Assets/General images/x1/block 4 - characters/photo.png'
import ico1 from '../../Assets/General images/x1/partners logo/Frame 78.png'
import ico2 from '../../Assets/General images/x1/partners logo/image 10.png'
import ico3 from '../../Assets/General images/x1/partners logo/image 11.png'
import ico4 from '../../Assets/General images/x1/partners logo/image 12.png'
import ico5 from '../../Assets/General images/x1/partners logo/image 13.png'
import ico6 from '../../Assets/General images/x1/partners logo/image 4.png'
import ico7 from '../../Assets/General images/x1/partners logo/image 5.png'
import ico8 from '../../Assets/General images/x1/partners logo/image 6.png'
import ico9 from '../../Assets/General images/x1/partners logo/image 7.png'
import ico10 from '../../Assets/General images/x1/partners logo/image 8.png'
import ico11 from '../../Assets/General images/x1/partners logo/image 9.png'

import play1 from '../../Assets/General images/x1/block 5 - image 1.png'
import play2 from '../../Assets/General images/x1/block 5 - image 2.png'
import play3 from '../../Assets/General images/x1/block 5 - image 3.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import $ from 'jquery';

import { Swiper, SwiperSlide } from 'swiper/react';
import { PieChart } from 'react-minimal-pie-chart';
import 'swiper/css';

import Roadmap from "../roadmap/roadmap";

const Home = () => {
  const Swal = require("sweetalert2");

  $(document).ready(function(){

    // pass the YouTube video ID into the iframe template on click/tap
    $('a.video-thumb').click(function () {
      
      // Grab the video ID from the element clicked
      var id = $(this).attr('data-youtube-id');
  
    
      var autoplay = '?autoplay=1';
      
      // Don't show the 'Related Videos' when the video ends
      var related_no = '&rel=0';
      
      // String the ID and param variables together
      var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
      
      $("#youtube").attr('src', src);
      return false;
    
    });
  
  
    /* Modal View
    -------------------------------------------------------------------------------*/
    function toggle_video_modal() {
        
        // Open the Video Modal
        $(".js-trigger-modal").on("click", function(event){
            event.preventDefault();
            $("body").addClass("show-video-modal");
        });
  
        // Close and Reset the Video Modal
        $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
            event.preventDefault();
            
            $("body").removeClass("show-video-modal");
        
    
        $("#youtube").attr('src', '');
        });
    }
    toggle_video_modal();
  });


  return (
   <>
   <Container fluid style={{paddingTop:'100px',paddingBottom:'100px'}} className="bgtwo bggr">
<Row>
  <Col  xs={12} md={2}></Col>
  <Col xs={12} md={8}>
  <h2>WHAT IS THE BOMBER QUEST?</h2>
<p style={{fontSize:'14px'}}>Bomber Quest is a P2E game that allows users to generate a lot of revenue. Gamers can put their energy<br /> into successfully completing adventures in the game, fight to the death to survive in the crypto world,<br /> and earn an income from playing the game.</p>
   <Container>
<div className='vidbox2' >
<div className='vidbox'>
  <div className="buttons">
    <a
      href="https://www.youtube.com/watch?v=RHH3tUGDd5I"
      data-youtube-id="RHH3tUGDd5I"
      className="video-thumb js-trigger-modal"
    >
      <div className="ameer">
        <i className="fa fa-play" aria-hidden="true" />
        <span />
        <span />
        <span />
      </div>
    </a>
  </div>
</div>
</div>
  {/* video modal */}
  <section className="video-modal">
    {/* Modal Content Wrapper */}
    <div id="video-modal-content" className="video-modal-content">
      <img
        className="video-sizer"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaAQAAAAAXvWD/AAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6ABGAWjYBSMglEwCkYBAAdiAAFufS70AAAAAElFTkSuQmCC"
      />
      <iframe
        id="youtube"
        width="100%"
        height="100%"
        frameBorder={0}
        allowFullScreen=""
        src=""
      />
      <a href="#" className="close-video-modal">
        <svg version="1.1" viewBox="0 0 469.785 469.785">
          <g transform="matrix(1.25 0 0 -1.25 0 45)">
            <g>
              <g>
                <path
                  style={{ fill: "#DD2E44" }}
                  d="M228.294-151.753L367.489-12.558c11.116,11.105,11.116,29.116,0,40.22
				c-11.105,11.116-29.104,11.116-40.22,0L188.073-111.533L48.866,27.663c-11.093,11.116-29.116,11.116-40.22,0
				c-11.105-11.105-11.105-29.116,0-40.22l139.207-139.196L8.338-291.268c-11.116-11.116-11.116-29.116,0-40.22
				c5.552-5.564,12.834-8.34,20.116-8.34c7.27,0,14.552,2.776,20.105,8.34l139.514,139.514l139.196-139.196
				c5.564-5.552,12.834-8.34,20.116-8.34c7.27,0,14.552,2.788,20.105,8.34c11.116,11.105,11.116,29.104,0,40.22L228.294-151.753z"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
    {/* end modal content wrapper */}
    {/* Overlay Element */}
    <div className="overlay" />
  </section>
  {/* end video modal */}

   </Container>
  </Col>
  <Col  xs={12} md={2}></Col>
</Row>
   </Container>

<Container fluid className='playearn' style={{paddingTop:'150px',paddingBottom:'150px'}}>
<Container fluid style={{width:'90%'}}>
<Row>
    <Col style={{marginTop:'57px'}} className="left" xs={12} md={6}>
      <h2 >PLAY TO EARN</h2>
      <p style={{fontSize:'15px',paddingBottom:'40px',paddingTop:'10px'}}>Manage heroes, explore the world together, defeat monsters and bosses to free kingdoms under attack by monsters, and get tokens.</p>
      <Row style={{marginTop:'20px',marginBottom:'6px'}} className='left'>
            <Col xs={12} md={6}>
            <Button className='btnWhite' >GETTING STARTED</Button>
            </Col>
            <Col xs={12} md={6}>
             <Button  className='btnYellow' >MARKETPLACE</Button></Col>
          </Row>
    </Col>
   
    <Col xs={12} md={6}>
   
        <img className="img1" src={image1} alt="..."/>
      </Col>
  </Row>
</Container>
</Container>


<Container fluid className="banar2">
  <h2 style={{paddingBottom:'50px',marginBottom:'10px'}}>GAME CHARACTERS</h2>
  <Swiper
      spaceBetween={20}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c4} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c5} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c6} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c1} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c2} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="card">
        <div class="card__content">
          <img width='100%' height='100%' style={{borderRadius:'inherit'}} src={c3} alt='imagem' title='imagem' />
        </div>
      </div>
      </SwiperSlide>    
    </Swiper>
</Container>


<Container fluid className="gameplay" >
<h2 style={{paddingTop:'50px',paddingBottom:'50px',marginBottom:'50px'}}>GAME PLAY</h2>

<Container>
<Row className="left colorblue">
      <Col xs={12} md={4}>
        <Card.Img style={{height:'100%', width:'109%',borderRadius:'18px 0 0 18px' , marginLeft:'-15px'}} variant="top" src={play1} />
      </Col>
      {/* xs={12} */}
      <Col md={8}>
      <Card.Body>
        <Card.Title style={{fontWeight:'bolder'}}>Treasure Hunt Mode</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        In Treasure Hunt Mode, players can dispatch bomber heroes to mining zones, instructing them to plant bombs to demolish blocks to recover BBQ tokens. These heroes can work automatically, without the need for players to be present at all times, allowing them to free up valuable time for other chores while they are playing.
In addition, each time a bomb is detonated, the hero expends vitality. When the hero's energy reserves are depleted, he will enter a resting condition to replenish his reserves. If you purchase a home, the charging speed will be increased significantly.
        </Card.Text>
      
      </Card.Body>
      </Col>
    </Row>
    <Row className="left colorblue">
      <Col xs={12} md={4}>
        <Card.Img style={{height:'100%', width:'109%',borderRadius:'18px 0 0 18px' , marginLeft:'-15px'}} variant="top" src={play2} />
      </Col>
      {/* xs={12} */}
      <Col md={8}>
      <Card.Body>
        <Card.Title style={{fontWeight:'bolder'}}>Story Mode</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        In Story mode, players create their bomber hero who will participate in each story level. To advance through each class, the player must destroy all enemies. Breaking down blocks and killing creatures allows players to receive BBQ Tokens.
Participating in a level necessitates the use of the bomber hero's energy. As a result, if there is insufficient energy, the hero will not be able to participate at any level. Furthermore, if a monster touches you during the game, you will suffer an energy loss. If the hero's energy level reaches zero, you will be defeated in the fight.
     </Card.Text>
      
      </Card.Body>
      </Col>
    </Row>
    <Row className="left colorblue">
      <Col xs={12} md={4}>
        <Card.Img style={{height:'100%', width:'109%',borderRadius:'18px 0 0 18px' , marginLeft:'-15px'}} variant="top" src={play3} />
      </Col>
      {/* xs={12} */}
      <Col md={8}>
      <Card.Body>
        <Card.Title style={{fontWeight:'bolder'}}>Battle Mode</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        In Combat mode, players take part in a bomb struggle in which they must battle against other players. Not only do players require a specific sort of energy to participate, but they also must pay an admission fee in the form of tokens, which will subsequently be used as rewards. The final winner receives the vast bulk of the tokens from the losers.
       </Card.Text>
      
      </Card.Body>
      </Col>
    </Row>
</Container>

</Container>


<Container fluid className="roadmaps">
<Container>
  <h2 style={{marginBottom:'60px'}}>ROAD MAP</h2>
{/* <div className="roadmap-container"></div> */}
  <Row>
    <Col className='left' xs={12} md={3}>
      <h4>PHASE-1</h4>
      <Row style={{marginBottom:"20px",width:'100%'}}>
        <Col md={10} xs={10}><div className='line'></div></Col>
        <Col md={2} xs={2} class="fas fa-angle-right"></Col>
      </Row>
    <div className='roadbox'>
      <p className='pra'>. Website Launch</p>
      <p className='pra'>. Airdrop Campaign</p>
      <p className='pra'>. Mystery PACK Launch</p>
      <p className='pra'>. BOMBER QUEST season1 development</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
      <h4>PHASE-2</h4>
      <Row style={{marginBottom:"20px"}}>
        <Col md={10} xs={10}><div className='line'></div></Col>
        <Col md={2} xs={2} class="fas fa-angle-right"></Col>
      </Row>
      <div className='roadbox'>
      <p className='pra'>. NFT Mining Launch</p>
      <p className='pra'>. Token Lock system Release</p>
      <p className='pra'>. IDO</p>
      <p className='pra'>. DWX Listing</p>
      <p className='pra'>. LP Lock</p>
      <p className='pra'>. 1000 ＋Holderes.</p>
      <p className='pra'>. BOMBER QUEST season1 Launch</p>
      <p className='pra'>. BOMBER QUEST season2 development</p>
      <p className='pra' style={{lineHeight:'15px'}} >. Listing on Coin Market Cap and Coin Gecko</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
      <h4>PHASE-3</h4>
      <Row style={{marginBottom:"20px"}}>
        <Col md={10} xs={10}><div className='line'></div></Col>
        <Col md={2} xs={2} class="fas fa-angle-right"></Col>
      </Row>
      <div className='roadbox'>
      <p className='pra'>. BOMBER QUEST season2 Launch</p>
      <p className='pra' style={{lineHeight:'15px'}}>. Extensions to the Metaverse (adding maps and characters)</p>
      <p className='pra'>. Mystery PACK#2 Launch</p>
      <p className='pra'>. CEX Listing</p>
      <p className='pra'>. Code audit</p>
      <p className='pra'>. Development of scholarship program</p>
    </div>
    </Col>
    <Col className='left' xs={12} md={3}>
      <h4>PHASE-4</h4>
      <Row style={{marginBottom:"20px"}}>
        <Col md={10} xs={10}><div className='line'></div></Col>
        {/* <Col md={2} xs={2} class="fas fa-angle-right"></Col> */}
      </Row>
    <div className='roadbox'>
      <p className='pra'>. Partnering with Game Guilds</p>
      <p className='pra'>. Advertising in New York</p>
      <p className='pra'>. NFT Lending</p>
      <p className='pra'>. BOMBER QUEST metaverse development</p>
      <p className='pra' style={{lineHeight:'15px'}}>. Second Game「Bomb to Eran」 development</p>
    </div>
    </Col>
    
  </Row>

</Container>
</Container>



<Container fluid className='bggr' style={{paddingTop:'100px',paddingBottom:'100px'}}>
<Container>
<Row>
    <Col xs={12} md={6}>
<Container>
  
<img style={{width:'100%' , height:'100%'}} src="https://s3-alpha-sig.figma.com/img/b71f/05e3/24c49f52bc5a467e7eecdddcc620c32b?Expires=1682899200&Signature=CRV5qewRK02kjO40T7J~FUFgNtCPD4gMx01MwIVt3TSE-HrQTViPokPGCvKPLizORJ82tl1RNSw~1Y3Hs4XIbN5NhDan1WEcYFmCmDFqPulX~fhpjeZpGebaaGbkn9Ja1xBe1Uz4ybgkBTcGfp-cgXED81fVagiXu8CTPkA-QpYI9P-r8wxuXt5lX09vNycye9sLAs2LhKkWs305Gp-W6Dx-rtNu-MnYhA1Jy-nvtHJL3V-sfA5IG90e4drp-tSaS-9EWu0D8M5Qzp-KfgK5KlNUYr92uHnnpfHcTY3xjE6WtJ0pPXmiQIVNY~Wc8l1l7wo6lMlQRSPP0hxvbHZwdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="..." />
    
</Container>
</Col>

    <Col className="left" xs={12} md={6}>
<Container style={{marginTop:'80px'}}>
  
<h2>What is $BBQ </h2>
      <p style={{fontSize:'12px',marginBottom:'34px'}}>Token is the main in-game currency. It will be used to buy Bomber hero at Market Place, Items of Upgrade Bomber level, buy House, mainly in the first phase.</p>
      <span>Token Official Contract Address:</span>
      <label className="search-label">
  <span
    type="text"
    name="text"
    className="input"
  >0x0c5915972759b37E5902E236AfcBC55EB68522d0</span>
  <i style={{marginLeft:'15px'}} className="fas fa-copy"></i>


</label>

      <Row style={{marginTop:'10px',marginBottom:'6px'}} className='left'>
            <Col xs={12} md={6}>
            <Button className='btnWhite' >GO SWAP</Button>
            </Col>
            <Col xs={12} md={6}>
             <Button  className='btnYellow' >ADD TO METAMASK</Button></Col>
          </Row>

</Container>
    </Col>
  </Row>
</Container>
</Container>




<Container fluid className="tokenomicbg" style={{marginTop:'80px'}}>
<h2 style={{paddingTop:'50px',paddingBottom:'0px',marginBottom:'10px'}}>TOKEN METRIC</h2>

  <Row>
    <Col xs={12} md={6}>
{/* <Container style={{width:'70%'}}>
<PieChart
  data={[
    { title: 'Private Sale', value: 6, color: '#5383EC' },
    { title: 'Ecosystem Fund', value: 6, color: '#69BBC4' },
    { title: 'IDO', value: 2, color: ' #D85140' },
    { title: 'Team', value: 25, color: ' #85A9F1' },
    { title: 'DEX Liquidity', value: 6, color: '#F1BF42' },
    { title: 'Advisor ', value: 3, color: '#E18176' },
    { title: 'Play to Earn', value: 20, color: '#58A65C' },
    { title: 'Reserves', value: 12, color: '#7E52F3' },
    { title: 'Staking Reward', value: 20, color: '#ED762F' },
  ]}
/>
</Container> */}
<Container >
<img width='100%' src={piechart} alt=',,,' />
</Container>
</Col>

    <Col style={{marginTop:'160px'}} className="left" xs={12} md={6}>
      <Container >
       <div className="firstsupply">
        <div className="totalsupply">
          <div className="totalsuplydiv">
            <p style={{fontSize:'10px',marginBottom:'-10px'}}>Total supply:</p>
            <h2 style={{marginTop:'-10px',fontSize:'35px'}}>1,000,000,000</h2>
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12} md={6}> 
      
          <h5>Private Sale - 6%</h5>
          <ProgressBar   variant="info" now={6} />
          <h5>Ecosystem Fund - 6%</h5>
          <ProgressBar  variant="warning" now={6} />
          <h5>IDO - 2%</h5>
          <ProgressBar   variant="success" now={2} />
          <h5>Team - 25%</h5>
          <ProgressBar striped variant="danger" now={25} />
        </Col>
        <Col xs={12} md={6}> 
      
      <h5>DEX Liquidity - 6%</h5>
      <ProgressBar variant="info" now={6} />
      <h5>Advisor - 3%</h5>
      <ProgressBar variant="info" now={3} />
      <h5>Play to Earn - 20%</h5>
      <ProgressBar striped variant="warning" now={20} />
      <h5>Reserves - 12%</h5>
      <ProgressBar striped variant="success" now={12} />
      <h5>Staking Reward - 20%</h5>
      <ProgressBar striped variant="danger" now={20} />
    </Col>
      </Row>
      </Container>
    </Col>
  </Row>
</Container>

<Container fluid className='partner' style={{paddingTop:'80px',paddingBottom:'80px'}}>
 <Container style={{width:'100%'}}>
 <h2 style={{paddingTop:'50px',paddingBottom:'20px',marginBottom:'50px'}}>PARTNERS</h2>
  <Row>
  {/* <Col xs={1} md={1}></Col> */}
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico1} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico2} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico3} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico4} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico5} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico6} alt="..." />
    </Col>
     <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico7} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico8} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico9} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico10} alt="..." />
    </Col>
    <Col className="icon" xs={5} md={2}>
      <img className='iconImg' src={ico11} alt="..." />
    </Col>

  {/* <Col xs={1} md={1}></Col> */}
  </Row>
 </Container>
</Container>
   </>
  );
};

export default Home;
