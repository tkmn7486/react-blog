import { client } from "@/lib/client";

type AllData = {
    limit?: number,
}

type Option = {
    limit?: number,
    category:string;
}

export const getAllData=async(props:AllData={limit:20})=>{
    await client.get({
        endpoint: 'blogs',
        queries: {
            limit: props.limit
        }
      })
      .then((res) => {
        console.log(res.contents)
        return res.contents
      });
}

export const getCategoryFilteredData=async(props:Option={limit:20, category:"Movie"})=>{
    await client.get({
        endpoint: 'blogs',
        queries: {
            filters:`category[contains]${props.category}`,
            limit: props.limit
        }
      })
      .then((res) => {
        console.log(res.contents)
        return res.contents
      });
}

export const getArticleDetail=async(id:string)=>{
    await client.get({
        endpoint: 'blogs',
        queries: { 
            limit: 1,
            ids: id
        }
      })
      .then((res) => {
        console.log(res)
        return res
      });
}