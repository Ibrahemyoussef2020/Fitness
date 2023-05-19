import { Outlet } from "react-router"
import Cover from "../../components/cover"

const LayOut = () => {
return (
    <>
        <Cover/>
        <Outlet/>
    </>
    )
}

export default LayOut