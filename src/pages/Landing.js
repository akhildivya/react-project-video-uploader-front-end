import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <div className='container w-75' >
        <Row className='p-5 mt-2 mb-5 ' >
          <Col>
            <div className='mt-2 p-5'>
              <h1 id='he'>Video Uploader</h1>
              <p id='para1'>Join thousands of businesses and creators who trust Streamable to upload and share their videos.</p>
              <Link to={'/home'}>
                <Button className='btn btn-rounded btn-sm'>Get Started <i class="fa-solid fa-play fa-beat-fade ms-3"></i></Button>
              </Link>
            </div>
          </Col>

          <Col className='text-center '>
            <img className='mt-4' src="https://i.postimg.cc/NMQ4sZ3W/playstation-play.gif" alt="" />
          </Col>
        </Row>
      </div>

      <div id='bg1' className='container-fluid w-100' style={{ backgroundImage: 'https://i.postimg.cc/6qh29WkZ/background-2051990-1280.jpg' }}>

        <Container>
          <Row className='mt-5 mb-5 py-5'   >

            <Col>
              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <Card className='border border-dark text-dark' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/Kj92PJ1R/loading-loader.gif" />
                  <Card.Body className='p-5 text-center'>
                    <Card.Title id='card1' >Managing Videos</Card.Title>
                    <Card.Text id='text1'>
                      Maximize video engagement with these research-backed strategies. Learn how to measure engagement and evaluate the data. Try out these ten actionable strategies to get the most out of your video budget while building community and trust.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col >
              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <Card className=' border border-dark text-dark' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/mkhmzwCL/loader.gif" />
                  <Card.Body className='p-5 text-center'>
                    <Card.Title id='card1'>Categorise Videos</Card.Title>
                    <Card.Text id='text1'>
                      Maximize video engagement with these research-backed strategies. Learn how to measure engagement and evaluate the data. Try out these ten actionable strategies to get the most out of your video budget while building community and trust.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col >
              <Link to={'/history'} style={{ textDecoration: 'none' }}>
                <Card className='border border-dark text-dark' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/kG9fwm05/03-16-39-160-512.webp" />
                  <Card.Body className='p-5 text-center'>
                    <Card.Title id='card1'>Watch History</Card.Title>
                    <Card.Text id='text1' >
                      Maximize video engagement with these research-backed strategies. Learn how to measure engagement and evaluate the data. Try out these ten actionable strategies to get the most out of your video budget while building community and trust.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>

      </div>
      <Row>
        <Col>
          <div>
            <iframe width="695" height="391" src="https://www.youtube.com/embed/CgkZ7MvWUAA" title="React Full Course for free ⚛️ (2024)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
        <Col>
          <h1>React Tutorial for Beginners</h1>
          <p id='yp1'>This is a beginners React JS course that should be enough to get you started using the React Library. There are still many more hooks and concepts that are beyond the scope of the beginner level. This video should at least give you a solid foundation.</p>

        </Col>
      </Row>
    </div >
  )
}

export default Landing