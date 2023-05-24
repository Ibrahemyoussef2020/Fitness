import React , {useState} from 'react'
import {useQuery} from 'react-query'
import SkeletonRow from '../../utilities/skeleton';
import { getClasses} from '../../apis';
import Cover from '../../components/cover';
import Class from './Class'
import TablesImg from '../../components/tablesImg';
import { useNavigate } from 'react-router';


const Classes = () => {
    const [values,setValues] = useState({
        title:'',
        coach_name:'',
        timing:'',
        price:'',
        id:''
    }) // removed

    const  navigate = useNavigate()

const {data:classes,error,isLoading,isError} = useQuery('classes',getClasses)

const goToAdd = ()=>{
    navigate(`/classesForm`,{state:{mode:'add'}})
}

if (isLoading) {
    return <SkeletonRow/>
}



// inputs removed
    return (
        <div style={{overflowX:'auto'}}>
        <TablesImg table='classes' />   
        <table>
        <tbody>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>timing</th>
            <th>subscription type</th>
            <th>
                <button onClick={goToAdd} className='add-to-table' > + add class</button>
            </th>
        </tr>
            {classes?.map((training)=> <React.Fragment key={training.id}>
                <Class training={training} />
            </React.Fragment>)}
        </tbody>
        </table>
        </div>
    )
}

export default Classes