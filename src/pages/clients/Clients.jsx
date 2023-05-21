import React , {useState,useRef} from 'react'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import { getClients,addClient,modifyClient,clearClients} from '../../apis'
import Client from './Client'
import TablesImg from '../../components/tablesImg';
import isIdUnique from '../../utilities/CheckId'
import { json } from 'react-router'

const Clients = () => {
    const [isPostMode,setIsPostMode] = useState(true)
    const [visibility,setVisibility] = useState(false)
    const [values,setValues] = useState({
        full_name:'',
        mobile_number:'',
        address:'',
        subscription_plan:'',
        id:''
    })
    const [dataList,setDataList] = useState([])

    const idRef = useRef(null)

    const {data:clients,error,isLoading,isError} = useQuery('clients',getClients)


    // get

    const queryClient = useQueryClient()

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    // Post && Update

    const {data:clientPosted,mutateAsync:mutatePost ,isLoading:isMutatePostLoading,isError:isMutatePostError} = useMutation(addClient)

    const {data:clientUpdated,mutateAsync:mutateUpdate ,isLoading:isMutateUpdateLoading,isError:isMutateUpdateError} = useMutation(modifyClient)
    

const configureAdding = ()=>{
    idRef.current.focus()
    setIsPostMode(true)
    setVisibility(true)
}    

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


// handle create

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
 
    setDataList(clients)
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
        <TablesImg table='clients' />  
        <table>
        <thead>
        <tr>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="full_name" id="full_name" placeholder='Name' value={values.full_name}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="mobile_number" id="mobile_number" placeholder='mobile_number' value={values.mobile_number}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="address" id="address" placeholder='address' value={values.address}/></th>
            <th><input type="text" onChange={(e)=>handleChange(e)} name="subscription_plan" id="subscription_plan" placeholder='subscription_plan' value={values.subscription_plan}/></th>
            <th><input ref={idRef} onChange={(e)=>handleChange(e)}  type="text" name="id" id="id" placeholder='Client Id' value={values.id} className={`${isPostMode ? 'inline' : 'none'}`}/></th>
        </tr>
        <tr>
            <th><button onClick={()=>configureAdding()} type="button" name="Name" id="Name" className='general-body-btn add'>Add Client</button></th>
            <th><button onClick={()=>handleRequest()} type="button" name="Name" id="Name" className={`general-body-btn post ${visibility ? 'inline' : 'none'}`} > Post </button></th>
        </tr>  
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>address</th>
            <th>subscription type</th>
        </tr>
        </thead>
        <tbody>
            {clients?.map((client)=> <React.Fragment key={client.id}>
                <Client client={client} values={values} setValues={setValues} setIsPostMode={setIsPostMode} setVisibility={setVisibility}/>
            </React.Fragment>)}
        </tbody>
        </table>
        </div>
    )
}

export default Clients
