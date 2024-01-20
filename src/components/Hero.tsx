import { Link } from 'react-router-dom'
import Illustration from '../assets/illustration.svg'

export const Hero = () => {
  return (
        <section className="text-gray-600 bg-white body-font p-3">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
                    More than Just Shorten Links
                </h1>
                <p className="mb-8 text-gray-400 font-extralight text-balance text-2xl  leading-relaxed">Build your brand recognition and get detail insights on how your links are performing.</p>
                <div className="flex justify-center">
                    <Link to={'/auth/login'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">Get Started</Link>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={Illustration} />
                </div>
            </div>
    </section>
  )
}
