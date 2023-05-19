import React from 'react'
import { useNavigate } from 'react-router'
import {useMutation, useQueryClient} from 'react-query'
import { removeClient , modifyClient} from '../../apis'

const Client = ({client,setIsPostMode,values,setValues}) => {

const queryClient = useQueryClient()

const navigate = useNavigate()

// remove 
const {mutateAsync:mutateDelete} = useMutation(removeClient)
const handleRemove = async (id)=>{
    await mutateDelete(client.id)
    queryClient.invalidateQueries('clients')
}

// update 

const handleUpdate = async (client)=>{
   await setValues({
        full_name:client.full_name,
        mobile_number:client.mobile_number,
        address:client.address,
        subscription_plan:client.subscription_plan,
        id:client.id
    })
    setIsPostMode(false)
}

// details

const handleDetails = (id)=>{
    navigate(`/clientsDetail/${id}`)
}
return (
<>
    <tr>
        <td>{client.full_name}</td>
        <td>{client.mobile_number}</td>
        <td>{client.address}</td>
        <td>{client.subscription_plan}</td>
        <td><button onClick={()=>handleDetails(client.id)} className='list-button details'>Details</button></td>
        <td><button onClick={()=>handleRemove(client.id)} className='list-button remove'>Remove</button></td>
        <td><button onClick={()=>handleUpdate(client)} className='list-button update'>Update</button></td>
    </tr>
</>
)
}

export default Client