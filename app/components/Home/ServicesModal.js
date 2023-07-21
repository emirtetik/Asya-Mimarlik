import React from 'react'
import Image from 'next/legacy/image'
const ServicesModal = () => {

    const [step , setStep] = React.useState(1);

    const HandleStep = (step) => {
      setStep(step);
    };
  
     const activeBtn = "bg-white text-black";
         
  return (
    <section className="text-gray-600 body-font bg-primary">
  <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto">
    <div className="flex flex-wrap mx-auto mb-20">
      <button onClick={() => HandleStep(1)}
        className={`inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none 
                   tracking-wider border-gray-200  border-b-2   sm:px-6 sm:w-auto sm:justify-start title-font ${
              step === 1 ? activeBtn : ''
            }`}>
        STEP 1
      </button>
      <button onClick={() => HandleStep(2)} className={`inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none
                        tracking-wider border-b-2 border-gray-200 sm:px-6 sm:w-auto sm:justify-start title-font  ${
              step === 2 ? activeBtn : ''
            }`}>
        STEP 2
      </button>
      <button onClick={() => HandleStep(3)} className={`inline-flex items-center justify-center w-1/2 py-3 font-medium 
                leading-none tracking-wider border-b-2 border-gray-200 sm:px-6 sm:w-auto sm:justify-start title-font  ${
              step === 3 ? activeBtn : ''
            }`}>
       STEP 3
      </button>
      <button onClick={() => HandleStep(4)} className={`inline-flex items-center justify-center w-1/2 py-3 font-medium leading-none
                         tracking-wider border-b-2 border-gray-200 sm:px-6 sm:w-auto sm:justify-start title-font  ${
              step === 4 ? activeBtn : ''
            }`}>
       STEP 4
      </button>
    </div>
   {step === 1 && (
    <>
     <Image width={620} height={400} className="object-none object-center mx-auto mb-10 rounded " alt="hero" src="/assets/images/parallax/triangel1.avif"/>
     <div className="flex flex-col w-full text-center">
       <h1 className="mb-4 text-xl font-medium text-gray-500 title-font">Master Cleanse Reliac Heirloom</h1>
       <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
     </div>
     </>
   )}
  {step === 2 && (
    <>
      <Image width={620} height={400} className="object-none object-center mx-auto mb-10 rounded " alt="hero" src="/assets/images/parallax/triangel2.avif"/>
      <div className="flex flex-col w-full text-center">
        <h1 className="mb-4 text-xl font-medium text-gray-500 title-font">Cleanse Reliac Heirloom</h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      </>
  )}
  {step === 3 && (
    <>
    <Image width={620} height={400} className="object-none object-center mx-auto mb-10 rounded " alt="hero" src="/assets/images/parallax/triangel3.avif"/>
    <div className="flex flex-col w-full text-center">
      <h1 className="mb-4 text-xl font-medium text-gray-500 title-font"> Reliac Heirloom</h1>
      <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    </>
  )}
  {step === 4 && (
    <>
     <Image width={620} height={400} className="object-none object-center mx-auto mb-10 rounded " alt="hero" src="/assets/images/parallax/triangel4.avif"/>
     <div className="flex flex-col w-full text-center">
       <h1 className="mb-4 text-xl font-medium text-gray-500 title-font"> Heirloom</h1>
       <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
     </div>
     </>
  )}
  </div>
</section>
  )
}

export default ServicesModal