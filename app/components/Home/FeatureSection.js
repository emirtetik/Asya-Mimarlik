import React from 'react'
import {BsHouseCheckFill} from 'react-icons/bs'
import {PiUsersThreeFill} from 'react-icons/pi'
import {MdPlace} from 'react-icons/md'

const FeatureSection =() => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-white sm:text-3xl title-font">Master Cleanse Reliac Heirloom</h1>
      <p className="mx-auto text-base font-bold leading-relaxed text-white lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havt heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
    
      <div className="w-full p-4 md:w-1/3 sm:w-1/2">
        <div className="px-4 py-6 bg-white border-2 border-gray-200 rounded-lg">
      <PiUsersThreeFill  className="inline-block w-12 h-12 mb-3 text-indigo-500" />
          <h2 className="text-3xl font-medium text-gray-900 title-font">1.3K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/3 sm:w-1/2">
        <div className="px-4 py-6 bg-white border-2 border-gray-200 rounded-lg">
        <BsHouseCheckFill className="inline-block w-12 h-12 mb-3 text-indigo-500" />
         
          <h2 className="text-3xl font-medium text-gray-900 title-font">74</h2>
          <p className="leading-relaxed">Company</p>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/3 sm:w-1/2">
        <div className="px-4 py-6 bg-white border-2 border-gray-200 rounded-lg">
          <MdPlace className="inline-block w-12 h-12 mb-3 text-indigo-500" />
          <h2 className="text-3xl font-medium text-gray-900 title-font">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default FeatureSection