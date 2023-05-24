import React from 'react'
import { useNavigate } from 'react-router'
import {useMutation, useQueryClient} from 'react-query'
import { removeClass , modifyClass} from '../../apis'




const Class = ({training}) => {

    const queryClient = useQueryClient()

    const navigate = useNavigate()

    // remove 
    const {mutateAsync:mutateDelete,isLoading,isError} = useMutation(removeClass)

    const handleRemove = async ()=>{

        const confirmDeletion = window.confirm("Warning :it will be deleted !");
        if (confirmDeletion) {
            await mutateDelete(training.id)
            queryClient.invalidateQueries('classes')
        }
    }

 

 // details

const handleDetails = (training)=>{
    navigate(`/classesDetail/${training.id}` , {...training})
}

// send to update



const sendToUpdate = (training)=>{
    navigate(`/classesForm` , {state:{mode:'update',...training}})
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
                <td>{training.title}</td>
                <td>{training.coach_name}</td>
                <td>{training.timing}</td>
                <td>{training.price}</td>
                <td>
                    <button onClick={()=>handleDetails(training)} className='list-button details'>
                        <img src='images/icons/preview-icon.png' alt='details'/>
                    </button>
                    <button onClick={()=>sendToUpdate(training)} className='list-button update'>
                        <img src='images/icons/edit-icon.png' alt='update' style={{backgroundColor:'#fff',borderColor:'#FFF'}}/>
                    </button>
                    <button onClick={()=>handleRemove(training.id)} className='list-button remove'>
                        <img src='images/icons/delete-icon.png' alt='remove'/>
                    </button>
                </td>
            </tr>
        </>
        )
}

export default Class