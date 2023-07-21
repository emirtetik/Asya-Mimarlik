'use client'
import React from 'react'
import styles from '../../styles/popUp.module.css'
import { FaStar } from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'
import {BsFillBuildingsFill,BsFillFileEarmarkImageFill} from 'react-icons/bs'
function PopUp() {
    const [popUp, setPopUp] = React.useState(null)

    const boxes = [
        {
            "id":1,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            "icon": <FaStar />
        },
        {
            "id":2,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

            "icon": <BsFillBuildingsFill />
        },
        {
            "id":3,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

            "icon": <BsFillFileEarmarkImageFill/>
        },
        {
            "id":4,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

        },
        {
            "id":5,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

        },
        {
            "id":6,
            "title": 'Shooting Stars',
            "content": 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
            "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

        }
    ]
 

    const openPopUp = (i) => {
        setPopUp(i)
    }
     
    const ClosePopUp = () => {
        setPopUp(null)
    }

  return (
    <section className="py-20 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
      <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Asya Emlak Insaat</h1>
      <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam facilis, ratione eveniet hic beatae ducimus qui sapiente commodi impedit eligendi fuga delectus tempore sequi magni praesentium blanditiis dolores reprehenderit id.</p>
    </div>
    <div className="flex flex-wrap -m-4">
        {
          boxes.map((box,i) => (
       <div key={i} className="p-4 cursor-pointer xl:w-1/3 md:w-1/2 " onClick={() => openPopUp(i)} >
        <div className="p-6 transition duration-300 ease-in-out border border-gray-200 rounded-lg hover:text-white hover:bg-slate-600">
          <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
          {box.icon}
          </div>
          <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">{box.title}</h2>
          <p className="text-base leading-relaxed">{box.content}</p>
        </div>
      </div>
          ))}

       {popUp !== null && (
                        <div className={styles.popup_container }>
                          <div className={styles.boxes_container}>
                            <h2 className={styles.title}>{boxes[popUp].title}</h2>
                            <p className={styles.content}>{boxes[popUp].text}</p>
                            </div>
                            <button id='icon'  onClick={ClosePopUp}><GrClose className="text-white" /></button>

                        </div>
                    )}
     
    </div>
  </div>
</section>
  )
}

export default PopUp