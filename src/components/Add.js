import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/alapi';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputs, setInputs] = useState({
        id: '',
        title: '',
        coverImage: '',
        videoURL: ''
    })
    const takeInput = (e) => {
        /*const value=e.target.value
        const name=e.target.name
        console.log(value);
        console.log(name); after destructuring*/
        const { name, value } = e.target
        // console.log(value);
        // console.log(name);
        setInputs({ ...inputs, [name]: value })

    }
    const convertURL = (e) => {
        var url = e.target.value
        url = url.slice(-11,)
        console.log(url);
        var convertedURL = `https://www.youtube.com/embed/${url}`
        const { name } = e.target
        setInputs({ ...inputs, [name]: convertedURL })
    }

    const handleAdd = async() => {
        let id = uniqid()
        // console.log("jjjj",id);
        setInputs({ ...inputs, ["id"]: id })
        const { title, coverImage, videoURL } = inputs
        if (title == "" || coverImage == "" || videoURL == "")
        toast.error('🦄 all inputs required', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
        else
        {
          const result=await  addVideo(inputs)
          console.log(result);
          if(result.status >=200 && result.status <300)
          {
            toast.success(`${result.data.title} is added`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
                handleClose()
                
          }
        }
            
    }
   
    console.log(inputs);
    return (
        <div>
            <img className=' btn' onClick={handleShow} src="https://i.postimg.cc/CL0G8Tgm/cloud-6604-256.gif" alt="" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="floatingCaption" label="Video Caption">
                        <Form.Control name='title' onChange={(e) => takeInput(e)} type="text" />
                    </FloatingLabel>

                    <FloatingLabel className='mt-3' controlId="floatingImage" label="Cover Image Url">
                        <Form.Control name='coverImage' onChange={(e) => takeInput(e)} type="text" />
                    </FloatingLabel>

                    <FloatingLabel className='mt-3' controlId="floatingVideo" label="Youtube Video Url">
                        <Form.Control name='videoURL' onChange={(e) => convertURL(e)} type="text" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default Add