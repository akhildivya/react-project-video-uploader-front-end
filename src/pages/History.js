import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-feather';
import Loader from '../components/Loader';
import { getHistory, removeHistory } from '../service/alapi';

function History() {
  const [history, setHistory] = useState([])
  const getHistories = async () => {
    const result = await getHistory()
    setHistory(result.data)
  }
  useEffect(() => { getHistories() }, [])
  const removeItem=async(id)=>{
    await removeHistory(id)
    getHistories()
  }
  console.log(history);
  return (
    <div>
      {
        history?.length > 0 ?
          <div>
            <h1 className='text-center my-5'>History</h1>
            <Table className='container w-75 my-5' striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Video</th>
                  <th>Date</th>
                  <th>Video Url</th>
                </tr>
              </thead>
              <tbody>
               {
                history.map((i,index)=>(
                  <tr>
                  <td className='p-4'>{index+1}</td>
                  <td>{i?.title}</td>
                  <td>{i?.time}</td>
                  <td>{i?.videoURL}</td>
                  <td><Trash size={49} className='btn text-danger' onClick={()=>removeItem(i?.id)}></Trash></td>
                </tr>

                ))
               }
              </tbody>
            </Table>
          </div> : <Loader></Loader>
      }


    </div>
  )
}

export default History