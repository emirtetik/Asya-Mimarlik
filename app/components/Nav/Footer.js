'use client'
import React from 'react'
import styles from '../../styles/footer.module.css'
import Image from 'next/legacy/image'
import {FaTwitter} from 'react-icons/fa'
import {GrMail} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
export default function Footer() {
     return(
        

<footer className="text-gray-600 bg-white border border-t-2 border-gray-300 body-font " >
  <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
        <Image alt="logo" src="/assets/main/logo.png" width={133} height={85}/>
      {/* <span className={` ${styles.link }  `}>ASYA
         <b className={`${styles.mir} `}>-MİMARLIK</b></span> */}
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">CATEGORIES</h2>
        <nav className="mb-10 list-none">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-primary">
    <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
      <p className="text-sm text-center text-white sm:text-left">© 2023 ASYAMİMARLIK
       
      </p>
      <span className="inline-flex justify-center mt-2 cursor-pointer sm:ml-auto sm:mt-0 sm:justify-start">
        <a className="text-gray-500">
         <FaTwitter/>
        </a>
        <a className="ml-3 text-gray-500">
         <AiFillInstagram/>
        </a>
        <a className="ml-3 text-gray-500">
          
        </a>
        <a className="ml-3 text-gray-500">
          <GrMail/>
        </a>
      </span>
    </div>
  </div>
</footer>


)
};
