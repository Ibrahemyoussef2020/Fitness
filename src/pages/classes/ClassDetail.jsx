import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useQuery,useQueryClient } from 'react-query'
import { getClass } from '../../apis'

const ClassDetail = () => {
  const queryClient = useQueryClient()
  const {classId} = useParams()


  const {data:details,isLoading,isError} = useQuery(['clientDetails',classId],()=>getClass(classId))

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }
  
  return (
    <div>
      <div className='link-home'>
        <Link to='/'>HOME</Link>
      </div>
      <div className='client-cover'>
        <img src={details.image || '/images/classes/class-3.jpg'} alt="Avatar"  className='full-size'/>
      </div>
      <div className='client-avatar'>
        <img src='/images/capetian-avatar.png' alt="Avatar" className='full-size'/>
      </div>
      <div className='client-information'>
              
        <div style={{overflowX:'auto'}}>
        <table className='table-details'>
          <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>coach name</th>
                <th>timing</th>
            </tr>
            <tr>
              <td>{details.id}</td>
              <td>{details.title}</td>
              <td>{details.timing}</td>
              <td>{details.coach_name}</td>
            </tr>
            <tr>            
                <th>coach brief</th>
                <th>subscription type</th>
                <th>price</th>
            </tr>
            <tr>            
                <td>{details.coach_brief}</td>
                <td>{details.subscription_type}</td>
                <td>{details.price}</td>
            </tr>
          </thead>
        </table>
        </div>
      </div>
    </div>
  )
}

export default ClassDetail