import { useNavigate } from "react-router-dom"
import { MainStore } from "../store/MainStore"
import { useForm } from "../hooks/useForm"
import { useMainStore } from "../hooks"




export const EditUrl = () => {
    const activeUrl = MainStore(state=>state.activeUrl)
    const navigate = useNavigate() 
    const{formState,urlName,disabled,onInputChange,onSelectChange} = useForm(activeUrl)
    const{startEditUrl} = useMainStore()
    
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        const convert = disabled === 'true' ? true : false
        const newForm={
            ...formState,
            disabled:convert
        }
        await startEditUrl(newForm)
        navigate('/home')
    }

  return (
     <section className="w-full h-[85vh] bg-white p-4 flex justify-center items-center">
        <form onSubmit={handleSubmit}  className="w-[28rem] border-2 border-gray-500 rounded-lg p-3">
            <div >
                <label htmlFor="urlName" className="block text-gray-800 font-semibold text-sm">Name</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="urlName"
                    value={urlName}
                    onChange={onInputChange}
                    placeholder="Name of your link"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
            </div>
            <div className=" w-full  mt-3">
                <label htmlFor="urlName" className="block text-gray-800 font-semibold text-sm">Disable</label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                <select name="disabled" value={disabled ? 'true' : 'false'} onChange={onSelectChange} className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                    <option>true</option>
                    <option>false</option>
                </select>
            </div>
            <button type="submit" className="w-full rounded mt-3 bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">Update</button>
        </form>
     </section>
  )
}
