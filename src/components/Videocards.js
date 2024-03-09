import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import Modal from 'react-bootstrap/Modal';
import { addHistory, removeVideo } from '../service/alapi';
import uniqid from 'uniqid';
import { format } from 'date-fns';


function Videocards({video,updateData}) {
    const handleDelete=async(id)=>{
       const result= await removeVideo(id)
       if(result.status >=200 && result.status<300)
       {
        updateData(result.data)
       }
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => 
    {
        setShow(true);
        let id=uniqid()
     
        let date=format (new Date(),'MM/dd/yyyy h:mm:a')
        console.log(date);
        let title=video.title
        let videoURL=video.videoURL
        var body={
            id,time:date,title,videoURL
        }
        console.log(body);
        await addHistory(body)
    }

    const dragStarted=(e,id)=>{
        console.log("drag started"+id);
        e.dataTransfer.setData('card ID',id) //store dragged data
    }

    return (
        <div>
            <Card  draggable onDragStart={(e)=>dragStarted(e,video?.id)} style={{ width: '18rem'  }}>
                <Card.Img className='btn w-100' style={{height:'150px'}} onClick={handleShow} variant="top" src={video.coverImage} />
                <Card.Body>
                    <Card.Title>{video?.title.length >20 ? video?.title.slice(0,20)+'...':video?.title}</Card.Title>
                  <Trash2 onClick={()=>handleDelete(video.id)} size={50}  className='text-danger btn'></Trash2>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body     >
                <iframe width="100%" height="300px" src={video.videoURL} title="More Summer Recipes | Gordon Ramsay" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Videocards