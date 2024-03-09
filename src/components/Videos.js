import React, { useEffect, useState } from 'react'
import Videocards from './Videocards'
import { getVideos } from '../service/alapi'
import { Loader } from 'react-feather'
import { Col, Row } from 'react-bootstrap'

function Videos() {
  const [deleteUpdate,setDeleteUpdate]=useState("")
  const [allVideos, setVideos] = useState([])
  const getAllvideos = async () => {
    const result = await getVideos()
    setVideos(result.data)
  }
  useEffect(() => { getAllvideos() }, [deleteUpdate])
  console.log("All Videos", allVideos);
  return (
  <Row className='container'>
    {
      allVideos.length>0? 
      allVideos.map(i=>(
        <Col lg={6} md={6}><Videocards updateData={setDeleteUpdate} video={i}></Videocards></Col>
      ))
      :<Loader></Loader>
    }
  </Row>
  )
}

export default Videos