import { AuthStore } from "../store/AuthStore"


const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
export const useAuthStore = ()=>{
    const onlogout = AuthStore(state=>state.onLogout)
    const onlogIn = AuthStore(state=>state.onLogin)
    const onChecking = AuthStore(state=> state.onChecking)

    const startLogin = async({email,password}:{email:string,password:string})=>{
        onChecking()
        try {
            const response = await fetch(`${URL}/auth/login`,{
                method:'POST',
                headers:{"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            if(data.ok){
                localStorage.setItem('token', data.token)
                onlogIn({username:data.userName,uid:data.uuid})
            } 
        } catch (error) {
            console.log(error)
            onlogout()
        }
    }

    const startRegister = async({username,email,password}:{username:string,email:string, password:string})=>{
        onChecking()
        try {
            const response = await fetch(`${URL}/auth/new`,{
                method:'POST',
                headers:{"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({username,email, password})
            })
            const data = await response.json()
            localStorage.setItem('token', data.token)
            onlogIn({username:data.username,uid:data.uid})
            console.log(data) 
        } catch (error) {
            console.log(error)
            onlogout();
        }
    }

     const checkAuthToken = async()=>{
        const token = localStorage.getItem('token')
        if(!token){
            return onlogout()
        }
        try {
            const response = await fetch(`${URL}/auth/renew`,{
                method:'GET',
                headers:{
                    'x-token':token
                }
            })
            const data  = await response.json();
             localStorage.setItem('token',data.token)
             onlogIn({username:data.username,uid:data.uid})

        } catch (error) {
            console.log(error)
            localStorage.clear()
            onlogout()
        }
     }
     const startLogout = ()=>{
        localStorage.clear()
        onlogout()
     }

    return{
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}