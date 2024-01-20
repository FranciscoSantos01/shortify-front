import { create } from "zustand";

interface User {
    username?: string;
    uid?: string;
  }

interface UrlState {
    status: 'authorized'| 'not-authorized'|'checking',
    user : User,
    onChecking: () => void,
    onLogin: (data: User) => void,
    onLogout: () => void
  }

export const AuthStore = create<UrlState>((set)=>({
    status:'checking',
    user:{},
    

     onChecking:()=>{
      set({status:'checking'})
     },
    onLogin:(data:User)=>{
       const newUser = data
         set({user:newUser})
         set({status:'authorized'})
    },

    onLogout:()=>{
        set({user:{}})
        set({status:'not-authorized'})
    }
}))