/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useMainStore } from "../../hooks"
import { MainStore } from "../../store/MainStore"
import { CardUrl } from "../../components"
import { UrlType } from "../../helpers/types"
import { Link } from "react-router-dom"
import { AuthStore } from "../../store/AuthStore"



export const Home = () => {
  const{startFetchingUrls} = useMainStore()
  const user = AuthStore(state=>state.user)
  const allUrls = MainStore(state=>state.allUrls)
  useEffect(()=>{
     startFetchingUrls()
  },[])

  return (
    <div className="mt-5">
      <header className="w-full h-auto p-2 flex items-center justify-between">
         <h1>Welcome {user.username}</h1>
         <Link to={'/add'} className="px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700">Add Link</Link>
      </header>
      <section className="w-full h-auto mt-5 p-5 grid grid-rows-auto grid-cols-3 gap-8">
        {
          allUrls.length !== 0 && (
            allUrls.map((url:UrlType) =>(
              <CardUrl key={url._id} url={url} />
            ) )
          )
        }
      </section>
    </div>
  )
}
