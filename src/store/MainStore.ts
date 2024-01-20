import { create } from "zustand";
import { UrlType } from "../helpers/types";

interface MainState{
    allUrls: UrlType[],
    activeUrl: UrlType | null,
    onGetUrls: (data: UrlType[]) => void,
    onAddUrl: (data: UrlType) => void,
    onSetActiveUrl: (data: UrlType | null) => void
     onUpdateUrl: (data: UrlType) => void
     onDeleteUrl: (id: string) => void
}

export const MainStore = create<MainState>((set,get)=>({
    allUrls:[],
    activeUrl :null,

    onGetUrls:(data:UrlType[])=>{
        set({allUrls:data})
    },
    onAddUrl:(data:UrlType)=>{
        const{allUrls} = get()
        const newUrls = structuredClone(allUrls)
        newUrls.push(data)
        set({allUrls:newUrls})
    },
    onUpdateUrl:(data:UrlType)=>{
        const{allUrls} = get()
        const newUrls = structuredClone(allUrls).map((item:UrlType)=>{
                if( data._id === item._id){
                    return data
                }
                return item
        })
        set({allUrls:newUrls})
    },
    onDeleteUrl:(id:string)=>{
         const{allUrls} = get()
         const newUrls = structuredClone(allUrls).filter((item:UrlType)=> item._id !== id )
         set({allUrls:newUrls})
    },
    onSetActiveUrl:(data:UrlType|null)=>{
        set({activeUrl:data})
    }
}))