import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <div id='h3p'>
      <Row >
        <Col className='p-3'>
          <img
            alt=""
            src="https://i.postimg.cc/Jhw3DFxG/cinema-11477968.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          <b><span id='d1'>V</span>ideo<span id='d1'>A</span>pp</b>
          <p id='d2' className='ms-2'>SproutVideo is a video hosting platform for business. We offer all the video privacy, marketing, and analytics tools any business needs to succeed with live and on-demand video content online.</p>
        </Col>
        <Col className='container w-50 p-3'>
          <b ><span id='d1'>L</span>inks <i class="fa-solid fa-link fa-spin"></i></b><br></br>
          <div className='fs-6 mt-4'>
            <Link to={'/'} id='d2' style={{ textDecoration: 'none' }}>Landing Page</Link> <i class="fa-solid fa-hand-point-left"  style={{ color: "	#FFFFFF", }}></i><br></br>
            <Link to={'/home'} id='d2' style={{ textDecoration: 'none' }}>Home</Link> <i class="fa-solid fa-house"  style={{ color: "	#FFFFFF", }}></i><br></br>
            <Link to={'/history'} id='d2' style={{ textDecoration: 'none' }}>Watch list</Link> <i class="fa-solid fa-backward-step" style={{ color: "	#FFFFFF", }}></i>
          </div>
        </Col>
        <Col className='container w-75 p-3'>
          <b ><span id='d1'>S</span>upport <i class="fa-solid fa-question"></i></b><br></br>
          <div className='fs-6 mt-4'>
            <Link  id='d2' style={{ textDecoration: 'none' }}>Knowledge Base</Link> <br></br>
            <Link id='d2' style={{ textDecoration: 'none' }}>Product updates</Link> <br></br>
            <Link id='d2' style={{ textDecoration: 'none' }}>API Docs</Link> 
          </div>
        </Col>
        <Col className='container w-50 p-3'>
        <b ><span id='d1'>C</span>ontact</b><br></br>
          <div className='pe-6'>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
            <Button className='btn btn-outline-light w-100 mt-2' >Send</Button>
            <div className='mt-4 text-center'>
            <i class="fa-brands fa-instagram fa-lg text-white ms-2"></i>
            <i class="fa-brands fa-facebook fa-lg text-white ms-4"></i>
            <i class="fa-brands fa-twitter fa-lg text-white ms-4"></i>
            <i class="fa-brands fa-github fa-lg text-white ms-4"></i>
            <i class="fa-brands fa-linkedin fa-lg text-white ms-4"></i>
            </div>
          </FloatingLabel>
          </div>
        </Col>
        
      </Row>

    </div>
  )
}

export default Footer