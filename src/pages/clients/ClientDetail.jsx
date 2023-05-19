import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useQuery,useQueryClient } from 'react-query'
import { getClient } from '../../apis'

const ClientDetail = () => {
  const queryClient = useQueryClient()
  const {clientId} = useParams()

 

  const {data:details,isLoading,isError} = useQuery(['clientDetails',clientId],()=>getClient(clientId))

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
        <img src='/images/cover.jpeg' alt="Avatar"  className='full-size'/>
      </div>
      <div className='client-avatar'>
        <img src='/images/uniform-avatar.jpg' alt="Avatar" className='full-size'/>
      </div>
      <div className='client-information'>
              
        <div style={{overflowX:'auto'}}>
        <table className='table-details'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>address</th>
                <th>subscription type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.full_name}</td>
              <td>{details.mobile_number}</td>
              <td>{details.address}</td>
              <td>{details.subscription_plan}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default ClientDetail