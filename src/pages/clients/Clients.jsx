import React , {useState,useRef} from 'react'
import {useQuery} from 'react-query'
import { getClients} from '../../apis'
import SkeletonRow from '../../utilities/skeleton'
import Client from './Client'
import TablesImg from '../../components/tablesImg';
import isIdUnique from '../../utilities/CheckId'
import { useNavigate } from 'react-router';


const Clients = () => {
    const [values,setValues] = useState({
        full_name:'',
        mobile_number:'',
        address:'',
        subscription_plan:'',
        id:''
    })

    const  navigate = useNavigate()

    const {data:clients,error,isLoading,isError} = useQuery('clients',getClients)

    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const goToAdd = ()=>{
        navigate(`/clientsForm`,{state:{mode:'add'}})
    }


    if (isLoading) {
        return <SkeletonRow/>
    }

    if (isError) {
        return <h2>Something Went Wrong!</h2>
    }

    
    return (
        <div style={{overflowX:'auto'}}>
        <TablesImg table='clients' />  
        <table>
        <thead> 
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>address</th>
            <th>subscription type</th>
            <th>
                <button onClick={goToAdd} className='add-to-table' > + add class</button>
            </th>
        </tr>
        </thead>
        <tbody>
            {clients?.map((client)=> <React.Fragment key={client.id}>
                <Client client={client} />
            </React.Fragment>)}
        </tbody>
        </table>
        </div>
    )
}

export default Clients
