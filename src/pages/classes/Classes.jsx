import React , {useState,useRef} from 'react'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import { getClasses,modifyClass, addClass} from '../../apis';
import Class from './Class'
import isIdUnique from '../../utilities/CheckId'

const Classes = () => {
    const [isPostMode,setIsPostMode] = useState(true)
    const [PostVisibility,setPostVisibility] = useState(false)
    const [values,setValues] = useState({
        title:'',
        coach_name:'',
        timing:'',
        price:'',
        id:''
    })
    const [dataList,setDataList] = useState([])

    const idRef = useRef(null)

    const {data:classes,error,isLoading,isError} = useQuery('classes',getClasses)


    // get

    const queryClient= useQueryClient()

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }


    // Post && Update

    const {data:classPosted,mutateAsync:mutatePost ,isLoading:isMutatePostLoading,isError:isMutatePostError} = useMutation(addClass)

    const {data:classUpdated,mutateAsync:mutateUpdate ,isLoading:isMutateUpdateLoading,isError:isMutateUpdateError} = useMutation(modifyClass)
    
    const configureAdding = ()=>{
        idRef.current.focus()
        setIsPostMode(true)
        setPostVisibility(true)
    }

    const handleRequest = async ()=>{
        const classId = values.id
        if (isPostMode) {
            if(isIdUnique(values.id,dataList)){ 
                setValues({
                    title:values.title,
                    coach_name:values.coach_name,
                    timing:values.timing,
                    price:values.price,
                    id:values.id
                })

                await mutatePost({...values})
            }
        }else{
                if(isIdUnique(values.id,dataList)){    
                    const newValues = {
                    title:values.title,
                    coach_name:values.coach_name,
                    timing:values.timing,
                    price:values.price,
                    id:values.id
                    }

                    await mutateUpdate({classId,...newValues})
                }    
            }
     
        queryClient.invalidateQueries('classes')
        setPostVisibility(false)
        setDataList(classes)

        setValues({
            title:'',
            coach_name:'',
            timing:'',
            price:'',
            id:''
        })
    }

    // Clear



    const handleClear = ()=>{

    }
    
    return (
        <div style={{overflowX:'auto'}}>
        <table>
        <thead>
        <tr>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="title" id="title" placeholder='title' value={values.title}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="coach_name" id="coach_name" placeholder='coach_name' value={values.coach_name}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="timing" id="timing" placeholder='timing' value={values.timing}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="price" id="price" placeholder='price' value={values.price}/></th>
            <th><input onChange={(e)=>handleChange(e)} ref={idRef} type="text" name="id" id="id" placeholder='class Id' value={values.id}/></th>
        </tr>
        <tr>
            <th><button onClick={()=>configureAdding()} type="button" name="Name" id="Name" className='general-body-btn add'>Add class</button></th>
            <th><button onClick={()=>handleClear()} type="button" name="Phone" id="Phone" className='general-body-btn clear'>Clear All</button></th>
            <th><button onClick={()=>handleRequest()} type="button" name="Name" id="Name" className='general-body-btn post'> Post </button></th>
        </tr>  
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>timing</th>
            <th>subscription type</th>
        </tr>
        </thead>
        <tbody>
            {classes?.map((training)=> <React.Fragment key={training.id}>
                <Class training={training} values={values} setValues={setValues} setIsPostMode={setIsPostMode}/>
            </React.Fragment>)}
        </tbody>
        </table>
        </div>
    )
}

export default Classes