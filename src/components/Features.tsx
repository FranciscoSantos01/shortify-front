import Icon1 from  '../assets/icon-brand-recognition.svg'
import Icon2 from  '../assets/icon-detailed-records.svg'
import Icon3 from  '../assets/icon-fully-customizable.svg'
 
export const Features = () => {
  return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Advanced Statistics</h1>
                <p className="mb-8 text-gray-400 font-extralight text-balance text-2xl  leading-relaxed">
                    Track how your link are performing across the web with our advanced statistic dashboard
                </p>
             </div>
                <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <img src={Icon1} alt="" />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-bold">Brand Recognition</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-base text-gray-400 font-extralight">Boost your brand recognition with each click. Generic link dont mean a thing. Branded help instil confidence in your content.</p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <img src={Icon2} alt="" />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-bold">Detailed Records</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-base text-gray-400 font-extralight">Gain insights into who is clicking your links. Knowing when and where people engage with  your content helps inform better decisions.</p>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <img src={Icon3} alt="" />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-bold">Fully Customizable</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-base text-gray-400 font-extralight">Improve brand awareness and content discoverability through customizable links, supercharching audience engagement. </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
  )
}
