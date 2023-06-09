import axios from "axios"
const api = axios.create({
    baseURL : 'https://fitness-kingdom-gym-data.onrender.com/'
})

export const getClients = async ()=> await api.get('clients')
.then(res => res.data)
.catch(error => console.log(error))

export const getClient = async (id)=> await api.get(`clients/${id}`)
.then(res => res.data)
.catch(error => console.log(error))

export const addClient = async ({...added})=> await api.post(`clients/`,added)
.then(res => res.data)
.catch(error => console.log(error))

export const modifyClient = async ({id,...modified})=> await api.put(`clients/${id}`,modified)
.then(res => res.data)
.catch(error => console.log(error))

export const removeClient = async (id)=> await api.delete(`clients/${id}`)
.then(res => true)
.catch(error => console.log(error))


