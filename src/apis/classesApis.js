import axios from "axios"

const api = axios.create({
    baseURL : 'https://fitness-kingdom-gym-data.onrender.com/'
})

export const getClasses = async ()=> await api.get('classes')
.then(res => res.data)
.catch(error => console.log(error))

export const getClass = async (id)=> await api.get(`classes/${id}`)
.then(res => res.data)
.catch(error => console.log(error))

export const addClass = async ({...added})=> await api.post(`classes/`,added)
.then(res => res.data)
.catch(error => console.log(error))

export const modifyClass = async ({id,...modified})=> await api.put(`classes/${id}`,modified)
.then(res => res.data)
.catch(error => console.log(error))

export const removeClass = async (id)=> await api.delete(`classes/${id}`)
.then(res => true)
.catch(error => console.log(error))
