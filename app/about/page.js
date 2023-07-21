import Image from 'next/legacy/image'
import React from 'react'
import styles from '../styles/about.module.css'
import {ImQuotesLeft} from 'react-icons/im'
const page = () => {
  return (
    <section>
        <div className={` ${styles.image_container}`}>
        <Image
          layout='fill'
            className="image1"
            src="https://plainenglish.com/wp-content/uploads/expressions/big-picture.png"
            alt="background"
            quality={100}
            objectFit="cover" 
          />
        </div>
        <div className="text-gray-100 body-font bg-primary ">
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mb-4 text-3xl font-medium text-gray-100 title-font sm:text-4xl">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
      </div>

     

    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <Image width={720} height={600} className="object-cover object-center rounded" alt="hero" src="/assets/images/parallax/parallax.jpg"/>
    </div>
  </div>
</div>
<div className="text-gray-600 body-font">
  <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
    <Image width={720} height={600} className="object-cover object-center rounded" alt="hero" src="/assets/images/parallax/parallax.jpg"/>

    </div>
    <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
    <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Biz Kimiz</h1>

<p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quos vitae aliquam saepe, et unde, sit sapiente ducimus magni corporis assumenda nesciunt accusamus ipsa aliquid, suscipit numquam. Voluptate, saepe nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, at minus asperiores inventore possimus unde eligendi reiciendis delectus quia exercitationem corrupti dignissimos maiores adipisci aliquid fugiat minima perferendis repudiandae laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit adipisci ipsum omnis recusandae, dolores quod error cumque. Beatae sit doloremque perferendis quis dignissimos nemo qui optio, commodi, dolorum est quae?
</p>
      <div className="flex justify-center">
      </div>
    </div>
  </div>
</div>
<section className="text-gray-600 body-font bg-primary">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="mb-12 text-3xl font-medium text-center text-gray-100 title-font">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full p-4 md:w-1/2">
        <div className="h-full p-8 bg-gray-100 rounded">
        <ImQuotesLeft size={30}/>
          <p className="mb-6 leading-relaxed">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <span className="flex flex-col flex-grow pl-4">
              <span className="font-medium text-gray-900 title-font">Ezgi</span>
              <span className="text-sm text-gray-500">Software DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <div className="h-full p-8 bg-gray-100 rounded">
        <ImQuotesLeft size={30}/>

          <p className="mb-6 leading-relaxed">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 9s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <span className="flex flex-col flex-grow pl-4">
              <span className="font-medium text-gray-900 title-font">Alper </span>
              <span className="text-sm text-gray-500">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default page