import Image from 'next/legacy/image'
import React from 'react'

const Team = () => {
  return (
    <section className="text-gray-600 body-font bg-primary">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20 text-center">
      <h1 className="mb-4 text-2xl font-medium text-white title-font">OUR TEAM</h1>
      <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably hav heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
          <Image width={200} height={200}  alt="team" className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="w-full">
            <h2 className="text-lg font-medium text-gray-900 title-font">Alper Kamu</h2>
            <h3 className="mb-3 text-gray-500">Architect</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
          <Image width={200} height={200} alt="team" className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
          <div className="w-full">
            <h2 className="text-lg font-medium text-gray-900 title-font">Holden Caulfield</h2>
            <h3 className="mb-3 text-gray-500">Architect</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
          <Image width={200} height={200} alt="team" className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <div className="w-full">
            <h2 className="text-lg font-medium text-gray-900 title-font">Atticus Finch</h2>
            <h3 className="mb-3 text-gray-500">Architect</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
          <Image width={200} height={200} alt="team" className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
          <div className="w-full">
            <h2 className="text-lg font-medium text-gray-900 title-font">Yusuf</h2>
            <h3 className="mb-3 text-gray-500">Architect</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Team