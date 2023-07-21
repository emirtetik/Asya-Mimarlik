import Image from 'next/legacy/image'
import React from 'react'

const Gallery = () => {
  const lowResImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD';

  return (
    <section className="text-gray-600 bg-primary body-font">
    <div className="container flex flex-wrap px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">Master Cleanse Reliac Heirloom</h1>
        <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/2 p-1 md:p-2">
            <Image blurDataURL={lowResImage} width={500} height={300}  alt="gallery" className="block object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image blurDataURL={lowResImage} width={500} height={300} alt="gallery" className="block object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFyY2hpdGVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="w-full p-1 md:p-2">
            <Image blurDataURL={lowResImage} width={600} height={300} alt="gallery" className="block object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFyY2hpdGVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <Image blurDataURL={lowResImage} width={600} height={360} alt="gallery" className="block object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1623963553152-720a60bde58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image  width={500} height={300} alt="gallery" className="block object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image blurDataURL={lowResImage} width={500} height={300} alt="gallery" className="block object-cover object-center w-full h-full" src="https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?size=626&ext=jpg&ga=GA1.1.118116683.1684334525&semt=sph"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery