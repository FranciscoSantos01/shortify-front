import { UrlType } from "../helpers/types"
import { MainStore } from "../store/MainStore"

const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
export const useMainStore = () => {
    const getUrls = MainStore(state=>state.onGetUrls)
    const addUrl = MainStore(state=> state.onAddUrl)
    const onUpdateUrl = MainStore(state=>state.onUpdateUrl)
    const onDeleteUrl = MainStore(state=>state.onDeleteUrl)
   const startFetchingUrls = async()=>{
    const token = localStorage.getItem('token')
     try {
        const response = await fetch(`${URL}/short`,
        {
            method:'GET',
            headers:{
                'x-token': token ?? ''
            }
    })
     const data = await response.json()
     getUrls(data.urls)
     } catch (error) {
        console.log(error)
     }
   }

   const startAddUrl = async({urlName, fullUrl,creator}:{urlName:string,fullUrl:string,creator:string | undefined})=>{
     try {
        const response = await fetch(`${URL}/short`,{
                method:'POST',
                headers:{"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({urlName,fullUrl,creator})
            })
          const data = await response.json()
          addUrl(data.newUrl)  
     } catch (error) {
        console.log(error)
     }
   }
   
   const startEditUrl = async(item:UrlType)=>{
      try {
          if(!item || !item._id){
            console.log('Id seems to be undefined')
            return;
          }
         const response = await fetch(`${URL}/short/${item._id}`,{
                 method:'PATCH',
                 headers:{
                  "Content-type": "application/json;charset=UTF-8",
                  'x-token':localStorage.getItem('token') ?? ''
               },
                 body: JSON.stringify(item)
             })
           const data = await response.json()
           onUpdateUrl(data.postUpdated)  
      } catch (error) {
         console.log(error)
      }
   }
   
   const startDeletingUrl = async(id:string |undefined)=>{
      try {
         if(!id){
           console.log('Id seems to be undefined')
           return;
         }
            console.log(id)
           const response = await fetch(`${URL}/short/${id}`,{
                method:'DELETE',
                headers:{
                 'x-token':localStorage.getItem('token') ?? ''
              },
            })
            const data  = await response.json()
            console.log(data)
           onDeleteUrl(id)
        
     } catch (error) {
        console.log(error)
     }
   }

   return{
    startFetchingUrls,
    startAddUrl,
    startEditUrl,
    startDeletingUrl
   }
}
