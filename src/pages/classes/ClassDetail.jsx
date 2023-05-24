import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useQuery,useQueryClient } from 'react-query'
import { getClass } from '../../apis'
import SkeletonRow from '../../utilities/skeleton'

const ClassDetail = () => {
  const queryClient = useQueryClient()
  const {classId} = useParams()
  const navigate = useNavigate()

  const {data:details,isLoading,isError} = useQuery(['clientDetails',classId],()=>getClass(classId))

const handle_subscribe = ()=>{
  alert('This feature is not supported for now !')
}
const show_classes = ()=>{
  navigate('/classes')
} 



  if (isLoading) {
    return <SkeletonRow/>
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
            </tr>
            <tr>
              <td>{details.id || "Un saved"}</td>
              <td>{details.title || "Un saved"}</td>
            </tr>
            <tr>  
                <th>coach name</th>
                <th>timing</th>
            </tr>
            <tr>
              <td>{details.timing || "Un saved"}</td>
              <td>{details.coach_name || "Un saved"}</td>
            </tr>
            <tr>            
                <th>coach brief</th>
                <th>subscription type</th>
            </tr>
            <tr>
                <td>{details.coach_brief || "Un saved"}</td>
                <td>{details.subscription_type || "Un saved"}</td>
            </tr>
            <tr>  
                <th>price</th>
                <th>
                  <button className='link-button' onClick={handle_subscribe}>For subscription</button> 
                </th>
            </tr>
            <tr>              
                <td>{details.price || "Un saved"}</td>
                <th>
                  <button className='link-button' onClick={show_classes}>back to classes</button> 
                </th>
            </tr>
          </thead>
        </table>
        </div>
      </div>
    </div>
  )
}

export default ClassDetail