import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {GrMail} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
const page = () => {
  return (
    <section className="relative py-24 text-gray-600 body-font ">
  <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
    <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12095.735028699975!2d29.936918429196776!3d40.71947474111987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d%3A0xe04a2b2af5ac9cee!2zQXN5YSBFbWxhayDEsG7Fn2FhdA!5e0!3m2!1str!2str!4v1689363006674!5m2!1str!2str"
         style={{filter: 'grayscale:1' , opacity:(0.4)}}></iframe>
      <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
        <div className="px-6 lg:w-1/2">
          <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          <span className="inline-flex justify-center mt-2 cursor-pointer sm:ml-auto sm:mt-0 sm:justify-start">
        <a className="text-gray-500">
         <FaTwitter size={25}/>
        </a>
        <a className="ml-3 text-gray-500">
         <AiFillInstagram size={25}/>
        </a>
        <a className="ml-3 text-gray-500">
          
        </a>
        <a className="ml-3 text-gray-500">
          <GrMail size={25}/>
        </a>
      </span>
        </div>
        <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
          <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
          <a className="leading-relaxed text-indigo-500">asyamimar@email.com</a>
          <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
      <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">İletişim</h2>
      <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
      </div>
      <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
    </div>
  </div>
</section>
  )
}

export default page






















