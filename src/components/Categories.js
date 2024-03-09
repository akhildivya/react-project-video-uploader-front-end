import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addCategory, getCategories, getVideo, removeCategory, updateCategory } from '../service/alapi';
import { Trash2 } from 'react-feather';



function Categories() {
  const [catInputs, selectCatInputs] = useState({
    id: "",
    title: "",
    videos: []
  })
  const [categories,setCategories]=useState([])
  const setData = (e) => {
    const { value, name } = e.target
    selectCatInputs({ ...catInputs, [name]: value })
  }
  const handleAdd = async () => {
    let id = uniqid()
    selectCatInputs({ ...catInputs, ["id"]: id })
    const { title } = catInputs
    if (title == "") {
      alert("please enter title")
    }
    else {
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false)
      }
    }
    getAllCategories()
  }
  const getAllCategories = async () => {
    const result = await getCategories()
    setCategories(result.data);
  }
  const handleDelete=async(id)=>
  {
    await removeCategory(id)
    getAllCategories()
  }
  
  const draggedover=(e,id)=>{
    e.preventDefault()
    console.log("dragged over..cat."+id);
  }
  const dropped=async(e,id)=>{
   console.log("dropped category id ...."+id);
   let videoID=e.dataTransfer.getData('card ID')
   console.log("dropped video id"+videoID );

   const {data}=await getVideo(videoID)
   console.log(data);

   let catgory=categories.find(i=>i.id==id)
   console.log(catgory);

   catgory.videos.push(data)
   console.log(catgory);

   await updateCategory(id,catgory)
   await getAllCategories()
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{getAllCategories()},[])
  console.log(catInputs);
  console.log(categories);
  
  return (
    <div>
      <Button onClick={handleShow} className=' btn btn-primary rounded-pill'>Add Category <i class="fa-solid fa-plus fa-spin"></i></Button>

    {
      categories?.length>0 && categories.map(i=>(
        <div droppable onDragOver={e=>draggedover(e,i?.id)} onDrop={e=>dropped(e,i?.id)} className='w-100 p-4 me-4 mt-4 rounded border shadow-lg d-fle justify-content-between'>
          <h4>{i.title}</h4>
          <Trash2 onClick={()=>handleDelete(i?.id)} color='red' size={49} className='btn'>

          </Trash2>
          <div>
            {
              i?.videos?.map(item=>(
                <div>
                  <img style={{height:'50px',width:'50px'}}  src={item?.coverImage} alt="" />
                  </div>
              ))
            }
            </div>

        </div>
      ))
    }


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e => setData(e)} name='title' type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Categories