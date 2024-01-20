import { Link } from "react-router-dom"
import { Features, Hero, ShortenUrlForm } from "../../components"


export const Landing = () => {
  return (
    <>
     <Hero />
    <ShortenUrlForm /> 
     <Features />
     <section  className="w-full h-auto p-5 flex flex-col justify-center items-center gap-4 background">
            <h3 className="text-2xl text-white font-bold">Boost your links</h3>
            <Link to={'/auth/login'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</Link>
     </section>
    </>
  )
}
