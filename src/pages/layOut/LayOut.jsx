import React from 'react';

import { Outlet } from "react-router"
import Cover from '../../components/cover';


const LayOut = () => {
return (
    <div>
        <Cover/>
        <Outlet/>
    </div>
    )
}

export default LayOut