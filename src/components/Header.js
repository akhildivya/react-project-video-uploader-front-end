import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='d'>
      <Navbar >
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/59XMkMsT/video-camera-1642562.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{' '}
              <b id='d2'><span id='d1'>V</span>ideo <span id='d1'>A</span>pp</b>

            </Navbar.Brand>
          </Link>
          <Nav>
            <i class="fa-solid fa-lg fa-cart-shopping ms-2" style={{ color: "	#FFFFFF", }}></i>
            <i class="fa-solid fa-user fa-lg ms-4" style={{ color: "	#FFFFFF", }}></i>
            <i class="fa-solid fa-phone fa-lg ms-4" style={{ color: "	#FFFFFF", }} ></i>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header