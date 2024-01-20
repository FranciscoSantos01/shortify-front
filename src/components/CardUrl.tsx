import { UrlType } from "../helpers/types"
import Trash from '../assets/trash-2.svg'
import Edit from '../assets/edit.svg'
import { Link } from "react-router-dom"
import { MainStore } from "../store/MainStore"
import { useMainStore } from "../hooks"

const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
export const CardUrl = (props: { url: UrlType }) => {
    const{url} = props
     const setActiveUrl = MainStore(state=>state.onSetActiveUrl)
     const{startDeletingUrl} = useMainStore()
   const handleCopyClipboard = ()=>{
       navigator.clipboard.writeText(`${URL}/short/${url.shortUrl}`)
   }
   

  return (
    <div className="flex flex-col gap-4 justify-center items-start w-[290px] border border-[#e8eaed] bg-white t px-4 py-4 hover:shadow-xl rounded-lg">
    <div className="flex items-center  justify-between w-full">
       <h3>{url.urlName}</h3>
       <div className="flex items-center gap-2">
        <Link onClick={()=>setActiveUrl(url)} to={`/update/${url._id}`}>
          <img src={Edit} alt="edit" />
        </Link>
          <img onClick={()=>startDeletingUrl(url._id)} className="cursor-pointer" src={Trash} alt="Trash can" />
       </div>
    </div>
    <div className="flex items-center justify-center w-full">
        <p>{`${URL}/short/${url.shortUrl}`}</p>
    </div>
    <div className="flex items-center justify-between w-full">
     <p className="text-md font-medium text-gray-400">Total clicks</p>
     <span className="text-md font-medium text-gray-400">{url.totalClicks} </span>
     </div>
      <div className="flex items-center justify-between w-full" >
        {
        !url.disabled 
        ?(
          <>
          <span className="text-md font-medium text-gray-400">Enabled</span>
          <div className="bg-green-500 rounded-full h-15 w-15 p-2" />
          </>
        )
        :
        (
          <>
          <span className="text-md font-medium text-gray-400">Disabled</span>
          <div className="bg-red-500 rounded-full h-15 w-15 p-2" />
          </>
        )
        }
    
      </div>
      <button onClick={handleCopyClipboard} className="flex justify-center items-center w-full gap-1 px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
         <span>Copy</span>
        </button>
</div>
  )
}
