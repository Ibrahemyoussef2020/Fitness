import React from 'react'
import { useNavigate } from 'react-router'
import {useMutation, useQueryClient} from 'react-query'
import { removeClass , modifyClass} from '../../apis'




const Class = ({training,setValues,setIsPostMode,setVisibility}) => {

    const queryClient = useQueryClient()

    const navigate = useNavigate()

    // remove 
    const {mutateAsync:mutateDelete,isLoading,isError} = useMutation(removeClass)

    const handleRemove = async (id)=>{
        await mutateDelete(training.id)
        queryClient.invalidateQueries('classes')
    }

    // configure to update 

    const handleUpdate = async (training)=> {
        await setValues({
            title:training.title,
            coach_name:training.coach_name,
            timing:training.timing,
            price:training.price,
            id:training.id
        })
        setIsPostMode(false)
        setVisibility(true)
    }

 // details

const handleDetails = (id)=>{
    navigate(`/classesDetail/${id}`)
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
                    <button onClick={()=>handleDetails(training.id)} className='list-button details'>Details</button>
                    <button onClick={()=>handleRemove(training.id)} className='list-button remove'>Remove</button>
                    <button onClick={()=>handleUpdate(training)} className='list-button update'>Update</button>
                </td>
            </tr>
        </>
        )
}

export default Class