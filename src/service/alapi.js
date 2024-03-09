import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonstructure";

export const addVideo = async (body) => {
  return await commonApi('POST', `${BASE_URL}/videos`, body)
}
export const getVideos = async () => {
  return await commonApi('GET', `${BASE_URL}/videos`, {})
}
export const removeVideo = async (id) => {
  return await commonApi('DELETE', `${BASE_URL}/videos/${id}`, {})
}

export const addCategory=async(body)=>{
 return await commonApi('POST',`${BASE_URL}/categories`,body)
}

export const getCategories = async () => {
  return await commonApi('GET', `${BASE_URL}/categories`, {})
}
export const removeCategory = async (id) => {
  return await commonApi('DELETE', `${BASE_URL}/categories/${id}`, {})
}

export const addHistory=async(body)=>{
  return await commonApi('POST',`${BASE_URL}/histories`,body)
}
export const getHistory=async()=>{
  return await commonApi('GET',`${BASE_URL}/histories`,{})
}
export const removeHistory = async (id) => {
  return await commonApi('DELETE', `${BASE_URL}/histories/${id}`, {})
}

export const getVideo=async(id)=>{
  return await commonApi('GET',`${BASE_URL}/videos/${id}`)
}

export const updateCategory=async(id,body)=>{
  return await commonApi('PUT',`${BASE_URL}/categories/${id}`,body)
}