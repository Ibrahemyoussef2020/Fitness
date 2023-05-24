import { useNavigate } from 'react-router'
import {useMutation, useQueryClient} from 'react-query'
import { removeClient , modifyClient} from '../../apis'

const Client = ({client}) => {

const queryClient = useQueryClient()

const navigate = useNavigate()

// remove 
const {mutateAsync:mutateDelete,isLoading,isError} = useMutation(removeClient)
const handleRemove = async (id)=>{

   const confirmDeletion = window.confirm("Warning : it will be deleted !");

    if (confirmDeletion) {
        await mutateDelete(client.id)
        queryClient.invalidateQueries('clients')
    }
}



// details

const handleDetails = (id)=>{
    navigate(`/clientsDetail/${id}`)
}

// send to update

const sendToUpdate = (client)=>{
    navigate(`/clientsForm` , {state:{mode:'update',...client}})
}




if (isLoading) {
    return (
        <tr>
            <th><h2>Loading...</h2></th>
        </tr>
    )
}

if (isError) {
    return (
        <tr>
            <th><h2>Something Went Wrong!</h2></th>
        </tr>
    )
}

return (
<>
    <tr>
        <td>{client.full_name}</td>
        <td>{client.mobile_number}</td>
        <td>{client.address}</td>
        <td>{client.subscription_plan}</td>
        <td>
            <button onClick={()=>handleDetails(client.id)} className='list-button details'>
                <img src='images/icons/preview-icon.png' alt='details'/>
            </button>
            <button onClick={()=>sendToUpdate(client)} className='list-button update'>
                <img src='images/icons/edit-icon.png' alt='update' style={{backgroundColor:'#fff',borderColor:'#FFF'}}/>
            </button>
            <button onClick={()=>handleRemove(client.id)} className='list-button remove'>
                <img src='images/icons/delete-icon.png' alt='remove'/>
            </button>
        </td>
    </tr>
</>
)
}

export default Client