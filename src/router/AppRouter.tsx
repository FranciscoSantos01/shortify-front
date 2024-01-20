/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { MainRouter } from "../main/router/MainRouter"
import { Landing } from "../main/pages"
import { AuthStore } from "../store/AuthStore"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"
import { Loader, Navbar } from "../components"


export const AppRouter = () => {
  const status = AuthStore(state=> state.status)
  const{checkAuthToken} = useAuthStore()

   useEffect(()=>{
      checkAuthToken()
   },[])

     if(status === 'checking'){
      return(
         <section className="w-100 h-[85vh] flex flex-col items-center justify-center">
            <Loader />
         </section>
      )
     }

  return (
   <>
    <Navbar />
    <Routes>
        {
        status == 'not-authorized'
         ?(
            <>
            <Route path="landing" element={<Landing />}  />
            <Route path='/auth/*' element={<AuthRouter />} />
            </>
         )
         :
         (
            <Route path="/*" element={<MainRouter />} />
         )  
        }
        <Route path="/*" element={<Navigate to="/landing" />} />
    </Routes>
    </>
  )
}
