import axios from 'axios'

export const NiltoAllData=async(
    limit: number=20
)=>{
    const data = await axios.get(`https://cms-api.nilto.com/v1/contents?model=blog_article&limit=${limit}`, { headers: { 'X-NILTO-API-KEY': import.meta.env.VITE_NILTO_API_KEY}})
    return data.data
}

export const NiltoFilteredData=async(
    type:string,
    limit: number=20
)=>{
    console.log("type:",type)
    const data = await axios.get(`https://cms-api.nilto.com/v1/contents?model=blog_article&limit=${limit}&category[eq]=${type}`, { headers: { 'X-NILTO-API-KEY': import.meta.env.VITE_NILTO_API_KEY}})
    return data.data
}