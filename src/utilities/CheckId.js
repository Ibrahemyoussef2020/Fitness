const isIdUnique = (id,array) => {
    if(array.length){
        if (!(array.some(item => item.id.toString() === id.toString()))){
            return true
        }else{
            return false
        }     
    }
}

export default isIdUnique