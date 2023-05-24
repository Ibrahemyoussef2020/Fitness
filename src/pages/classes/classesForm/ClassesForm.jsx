import React , {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import SkeletonRow from '../../../utilities/skeleton'
import isIdUnique from '../../../utilities/CheckId'
 import {
    getClasses,
    getClass,
    addClass,
    modifyClass,
    removeClass
 } from '../../../apis'


const ClassesForm = (props) => {
    const location = useLocation()
    const {mode,id,title,coach_name,timing,price} = location.state
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const [values,setValues] = useState({
        title:title || '',
        coach_name:coach_name || '',
        timing:timing || '',
        price:price || '',
        id:id || ''
    })

const [dataList,setDataList] = useState([])


const {data:classes,error,isLoading,isError} = useQuery('classes',getClasses)



    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        setDataList(classes)
    } // removed


    // Post && Update

    const {data:classPosted,mutateAsync:mutatePost ,isLoading:isMutatePostLoading,isError:isMutatePostError} = useMutation(addClass)

    const {data:classUpdated,mutateAsync:mutateUpdate ,isLoading:isMutateUpdateLoading,isError:isMutateUpdateError} = useMutation(modifyClass)
    

    // handle update 

    const handle_update = async ()=>{
        const classId = values.id

        const newValues = {
            title:values.title,
            coach_name:values.coach_name,
            timing:values.timing,
            price:values.price,
            id:values.id
            }

            await mutateUpdate({classId,...newValues})
            queryClient.invalidateQueries('classes')
    }

    // handle_create

    const handle_create = async ()=>{
        setValues({
            title:values.title,
            coach_name:values.coach_name,
            timing:values.timing,
            price:values.price,
            id:values.id
        })
        await mutatePost({...values})
        queryClient.invalidateQueries('classes')         
    }


// re configure adding

const reconfigure_adding = ()=>{
    setValues({
        title:'',
        coach_name:'',
        timing:'',
        price:'',
        id:''
    })
   
}

    // handleRequest (create , update) - reconfigure

const handleRequest = async ()=>{
    if (mode == 'update') {
        handle_update() 
    }else if(mode === 'add'){
        if (isIdUnique(values.id,dataList)) {
            handle_create()
        }else{
            alert('this id is used...')
        }           
    }
    navigate('/classes')

    reconfigure_adding()
}
    

if (isMutatePostLoading || isMutateUpdateLoading) {
    return <SkeletonRow/>
}

if (isMutatePostError || isMutateUpdateError) {
    return <h2>Something Went Wrong!</h2>
}


  return (
    <div className='form'>
        <div className='input-container'>
            <input type="text" className='full-width' onChange={(e)=>handleChange(e)} name="title" id="title" placeholder='title' value={values.title}/>
        </div>

        <div className='input-container'>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="coach_name" id="coach_name" placeholder='coach_name' value={values.coach_name}/>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="timing" id="timing" placeholder='timing' value={values.timing}/>
        </div>
        
        <div className='input-container'>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="price" id="price" placeholder='price' value={values.price}/>
            <input type="text" className={`half-width ${mode === 'update'?'unClicked':'clicked'}`} onChange={(e)=>handleChange(e)} name="id" id="id" placeholder='national id' value={values.id} readOnly={mode === 'update'? true :false}/>
        </div>
        <div className={`input-container ${mode == ':add' ? 'block' : 'none'}`}>
            <button type='button' className='full-width light bold'onClick={()=>handleRequest()} style={{textTransform:'capitalize'}} >{mode} Class</button>
        </div>
        <div className={`input-container`}>
            <button type='button' className='bg-dark full-width light bold'onClick={()=> navigate('/')} style={{textTransform:'capitalize'}} >Back to home</button>
        </div>
    </div>
  )
}

export default ClassesForm