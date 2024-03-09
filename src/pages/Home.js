import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import Categories from '../components/Categories'
import Videos from '../components/Videos'
import { Link } from 'react-router-dom'

function Home() {
  
  

  return (
    <div >
      <Row className='m-5 p-5'>
        <Col lg={4}  >
          <img className='w-100' src="https://i.postimg.cc/FRTdF93n/5337069-2765820.jpg" alt="" />
        </Col>
        <Col lg={8} className='pe-5'>
          <Row>
            <Col>
              <h2><span id='d1'>S</span>tart<span id='d1'> U</span>ploading<span id='d1'> V</span>ideos<span id='d1'> F</span>or <span id='d1'> F</span>ree</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, possimus voluptate aperiam maiores quam officia deleniti doloremque nulla itaque. Aliquid deserunt consectetur voluptatum nam voluptatem aspernatur excepturi deleniti fugiat?</p>
              <Link to={'/history'} style={{textDecoration:'none'}}>
              <h3 id='f1'>Watch history<i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i></h3>
              </Link>
            </Col>
            <Col>
              <Add ></Add>
            </Col>
          </Row>
          </Col>
      </Row>
      <Row className='p-3 mt-4 mb-5 bg-light'>
        <Col lg={8}>
          <Videos ></Videos>
        </Col>
        <Col lg={4}>
          <Categories></Categories>
        </Col>
      </Row>
    </div >
  )
}

export default Home