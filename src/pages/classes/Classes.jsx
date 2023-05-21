import React , {useState,useRef} from 'react'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import { getClasses,modifyClass, addClass , clearClasses} from '../../apis';
import Class from './Class'
import TablesImg from '../../components/tablesImg';
import isIdUnique from '../../utilities/CheckId'


const Classes = () => {
    const [isPostMode,setIsPostMode] = useState(true)
    const [visibility,setVisibility] = useState(false)
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
    

    // configure adding

    const configureAdding = ()=>{
        idRef.current.focus()
        setIsPostMode(true)
        setVisibility(true)
    }

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
 
    setDataList(classes)
    setIsPostMode(true)
    setVisibility(false)
}

    // handleRequest (create , update) - reconfigure

const handleRequest = async ()=>{

    if (isPostMode) {
        if(isIdUnique(values.id,dataList)){ 
            handle_create()
        }
    }else{
            handle_update()
        }
    reconfigure_adding()
}
    

if (isMutatePostLoading || isMutateUpdateLoading) {
    return <h2>Loading...</h2>
}

if (isMutatePostError || isMutateUpdateError) {
    return <h2>Something Went Wrong!</h2>
}

    return (
        <div style={{overflowX:'auto'}}>
        <TablesImg table='classes' />   
        <table>
        <thead>
        <tr>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="title" id="title" placeholder='title' value={values.title}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="coach_name" id="coach_name" placeholder='coach_name' value={values.coach_name}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="timing" id="timing" placeholder='timing' value={values.timing}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="price" id="price" placeholder='price' value={values.price}/></th>
            <th><input onChange={(e)=>handleChange(e)} ref={idRef} type="text" name="id" id="id" placeholder='class Id' value={values.id} className={`${isPostMode ? 'inline' : 'none'}`}/></th>
        </tr>
        <tr>
            <th><button onClick={()=>configureAdding()} type="button" name="Name" id="Name" className='general-body-btn add'>Add class</button></th>
            <th><button onClick={()=>handleRequest()} type="button" name="Name" id="Name" className={`general-body-btn post  ${visibility ? 'inline' : 'none'}`}> Post </button></th>
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
                <Class training={training} values={values} setValues={setValues} setIsPostMode={setIsPostMode} setVisibility={setVisibility}/>
            </React.Fragment>)}
        </tbody>
        </table>
        </div>
    )
}

export default Classes