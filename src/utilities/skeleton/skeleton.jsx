import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './skeleton.css'
const skeletonDiv = () => {
  return (
    <div className="skeleton-container">
         <Skeleton height={200} width={'100%'}/>
         <Skeleton height={200} width={'100%'}/>
         <Skeleton height={200} width={'100%'}/>
         <Skeleton height={200} width={'100%'}/>
         <Skeleton height={200} width={'100%'}/>
   </div>
  )
}



export default skeletonDiv