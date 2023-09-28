import {createClient } from "pexels"

export const searchImage=async({query="",landscape=true,portrait=false,count=1})=>{
    const client=createClient(process.env.PEXEL_API_KEY)
    return (await client.photos.search({query,per_page:count,orientation:`${landscape?"landscape":""}${portrait?"portrait":""}`})).photos
}