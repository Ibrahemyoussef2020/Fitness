import React , {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import SkeletonContainer from '../../../utilities/skeleton'
import isIdUnique from '../../../utilities/CheckId'
import {
    getClients,
    getClient,
    addClient,
    modifyClient,
    removeClient
 } from '../../../apis'

const ClientsForm = (props) => {
    const location = useLocation()
    const {mode,id,full_name,mobile_number,address,subscription_plan} = location.state
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const [values,setValues] = useState({
        full_name:full_name || '',
        mobile_number:mobile_number || '',
        address:address || '',
        subscription_plan:subscription_plan || '',
        id:id || ''
    })



const [dataList,setDataList] = useState([])


const {data:clients,error,isLoading,isError} = useQuery('clients',getClients)



    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        setDataList(clients)
    } // removed


    // Post && Update

    const {data:clientPosted,mutateAsync:mutatePost ,isLoading:isMutatePostLoading,isError:isMutatePostError} = useMutation(addClient)

    const {data:clientUpdated,mutateAsync:mutateUpdate ,isLoading:isMutateUpdateLoading,isError:isMutateUpdateError} = useMutation(modifyClient)
    

    // handle update 

    const handle_update = async ()=>{
        const clientId = values.id

        const newValues = {
            full_name:values.full_name,
            mobile_number:values.mobile_number,
            address:values.address,
            subscription_plan:values.subscription_plan,
            id:values.id
            }

            await mutateUpdate({clientId,...newValues})
            queryClient.invalidateQueries('clients')
    }

    // handle_create

    const handle_create = async ()=>{
        setValues({
            full_name:values.full_name,
            mobile_number:values.mobile_number,
            address:values.address,
            subscription_plan:values.subscription_plan,
            id:values.id
        })
        await mutatePost({...values})
        queryClient.invalidateQueries('clients')         
    }


// re configure adding

const reconfigure_adding = ()=>{
    setValues({
        full_name:'',
        mobile_number:'',
        address:'',
        subscription_plan:'',
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
    navigate('/clients')

    reconfigure_adding()
}
    

if (isMutatePostLoading || isMutateUpdateLoading) {
    return <SkeletonContainer/>
}

if (isMutatePostError || isMutateUpdateError) {
    return <h2>Something Went Wrong!</h2>
}


  return (
    <div className='form'>
        <div className='input-container'>
            <input type="text" className='full-width' onChange={(e)=>handleChange(e)} name="full_name" id="full_name" placeholder='full_name' value={values.full_name}/>
        </div>

        <div className='input-container'>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="mobile_number" id="mobile_number" placeholder='mobile_number' value={values.mobile_number}/>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="address" id="address" placeholder='address' value={values.address}/>
        </div>
        
        <div className='input-container'>
            <input type="text" className='half-width' onChange={(e)=>handleChange(e)} name="subscription_plan" id="subscription_plan" placeholder='subscription_plan' value={values.subscription_plan}/>
            <input type="text" className={`half-width ${mode === 'update'?'unClicked':'clicked'}`} onChange={(e)=>handleChange(e)} name="id" id="id" placeholder='national id' value={values.id} readOnly={mode === 'update'? true :false}/>
        </div>
        <div className={`input-container ${mode == ':add' ? 'block' : 'none'}`}>
            <button type='button' className='full-width light bold'onClick={()=>handleRequest()} name="Name" id="Name" style={{textTransform:'capitalize'}} >{mode} client</button>
        </div>
        <div className={`input-container`}>
            <button type='button' className='bg-dark full-width light bold'onClick={()=> navigate('/')} style={{textTransform:'capitalize',backgroundColor:'#000 !important'}} >Back to home</button>
        </div>
    </div>
  )
}

export default ClientsForm