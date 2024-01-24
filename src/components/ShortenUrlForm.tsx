import { useState } from "react"
import { Loader } from "."
import { UrlType } from "../helpers/types"

const initalState ={
    fullUrl :''
}
const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

export const ShortenUrlForm = () => {
    const[url,setUrl] = useState<UrlType>({})
    const[loading,setLoading] = useState(false)
    const[formState, setFormState] = useState(initalState)
    const[error,setError]=useState(false)
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setFormState({
            ...formState,
            [name]:value
        });
    }
    const handleCopyClipboard = ()=>{
        navigator.clipboard.writeText(`${URL}/short/${url.shortUrl}`)
    }
    const getShortURl = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        if(formState.fullUrl === '' || !urlRegex.test(formState.fullUrl)){
            setError(!error)
            return;
        }
        setLoading(!loading)
        try {
            const response = await fetch(`${URL}/short`,{
                method:'POST',
                headers:{"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify({fullUrl:formState.fullUrl})
            })
            const data = await response.json();
            if(data.ok){
                setLoading(false)
                setUrl(data.newUrl)
                setFormState(initalState)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=" flex justify-center items-center w-full h-auto light mt-5">
            <div className="w-[80%] background rounded-lg shadow-md p-6 flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Create you short url</h2>
                <form onSubmit={getShortURl} className="flex items-center justify-center gap-4 w-[80%] ">
                    {error && <p className="text-lg font-medium text-red-500">You must provide a valid url</p> }
                <input name="fullUrl"
                value={formState.fullUrl}
                onChange={handleChange}
                placeholder="Enter your url"
                className={error ? "w-full bg-gray-100 text-gray-800 border-2 border-red-500 rounded-md p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150" : "w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" } type="text"/>
                <button type='submit' className="bg-gradient-to-r from-indigo-500 w-[18rem] to-blue-500 text-white font-bold py-2 px-4 rounded-md  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Shorten it!</button>
                </form>
                <div>
                    {loading && <Loader />}
                    {url.fullUrl && (
                        <div className="p-2 flex items-center gap-4">
                            <div>
                               <p className="text-blue-400 font-medium">{`${URL}/short/${url.shortUrl}`}</p>
                            </div>
                            <button onClick={handleCopyClipboard} className="px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            </button>
                        </div>
                    )}
                </div>     
            </div>
        </div>
  )
}
