import axios from "axios";
const wsUrl="http://localhost:8000/" //TODO:retrieve backend webservice url from process.env file

import { getUserToken } from './authService';

//const axiosInstance = axios.create({baseURL:wsUrl})

/* axiosInstance.interceptors.request.use((req=> {
    req.headers = {"x-access-token": getUserToken(),
    "Content-Type":"application/json"}
    return req
})) */
/* axios.interceptors.request.use((req=> {
    req.headers = {"x-access-token": getUserToken(),
    "Content-Type":"application/json"}
    return req
}))  */


axios.interceptors.request.use((req=> {
    req.headers = {...req.headers,"x-access-token": getUserToken(),
    "Content-Type":"application/json"}
    return req
})) 

export const getBackendWS = async (path) => {
    // const navigate= useNavigate()
    let token = getUserToken()
    console.log("token:", token)
    try {
        let resp = await axios.get(wsUrl+path)
        return resp 
    } catch (error) {
        console.log("get request error");
        console.log(error);
        return error.response;
      }
    
 }

export const getBackendWSOld = async (path,token) => {
   // const navigate= useNavigate()
    try {
            let resp = await axios.get(wsUrl+path,{headers: {
                "x-access-token": token,
               "Content-Type":"application/json"
               
            }})
            return resp 
        }
        
    
    
     catch (error) {
        console.log("get request error")
        console.log(error)
        //navigate("/error/"+error.data)
        return error.response
    }
}

export const postBackendWS = async (path,obj,token) => {
    try {
            let resp = await axios.post(wsUrl+path,obj,{headers: {
                "x-access-token": token,
               "Content-Type":"application/json"
            }})
            return resp 
        }
     catch (error) {
        console.log("post request error")
        console.log(error)
        return error.response
    }
}

export const updateBackendWS = async (path,id,obj,token) => {
    try {
            let resp = await axios.put(wsUrl+path+"/"+id,obj,{headers: {
                "x-access-token": token,
               "Content-Type":"application/json"
            }})
            return resp 
        }
     catch (error) {
        console.log("update request error")
        console.log(error)
        return error.response
    }
}

export const deleteBackendWS = async (path,id,token) => {
    try {
            let resp = await axios.delete(wsUrl+path+'/'+id,{headers: {
                "x-access-token": token,
               "Content-Type":"application/json"
            }})
            return resp 
        }
     catch (error) {
        console.log("update request error")
        console.log(error)
        return error.response
    }
}