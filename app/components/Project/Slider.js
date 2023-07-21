'use client'
import React, { useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from '../../styles/slider.module.css';
import Image from "next/legacy/image";

 function Slider() {
 
 
      const data = [
        {
          id: 1,
          imgUrl: "/assets/images/slider/slider.jpg",
          desc: "dağ Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          name: "EXPLORE ARCHITECURE",
        },
        {
          id: 2,
          imgUrl: "/assets/images/slider/slider1.webp",
          desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          name: "EXPLORE ARCHITECURE",
        },
        {
          id:3,
          imgUrl: "/assets/images/slider/slider2.avif",
          desc: "taş Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          name: "EXPLORE ARCHITECURE",
        },
        {
          id: 4,
          imgUrl: "/assets/images/slider/slider3.avif",
          desc: "Yol Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          name: "EXPLORE ARCHITECURE",
        },
        {
          id: 5,
          imgUrl: "/assets/images/slider/slider4.webp",
          desc: "çöl Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          name: "EXPLORE ARCHITECURE",
        },
      ];
      const [currentIndex, setCurrentIndex] = React.useState(0);

      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, [data.length]);
      const handlePreviewClick = (index) => {
        setCurrentIndex(index);
      };
      const currentItem = data[currentIndex];
  const lowResImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD';
    
  const nextIndex = (currentIndex + 1) % data.length;
  const nextNextIndex = (currentIndex + 2) % data.length;
     
  React.useEffect(() => {
    // Set an interval to move to the next slide every 4 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex,handleNext]);
 

      return (
        <div className={styles.container}>
        <div className={styles.sliderContent}>
          <div className={styles.imageWrapper}>
            <Image src={currentItem.imgUrl}  layout="fill"  className="image1"
            alt="background"
            quality={100}
            blurDataURL='{lowResImage}'
            priority
            />
             <div className={styles.textImage}>
              <div className={styles.name}>{currentItem.name}</div>
              <div className={styles.desc}>{currentItem.desc}</div>
            </div>
          </div>
          <div className={styles.previewImages}>
            <Image
              src={data[nextIndex].imgUrl}
              width={200}
              height={300}
              alt="preview"
              priority
            blurDataURL='{lowResImage}'
              onClick={() => handlePreviewClick(nextIndex)}
            />
            <Image
              src={data[nextNextIndex].imgUrl}
              width={200}
              height={300}
              alt="preview"
            blurDataURL='{lowResImage}'

              onClick={() => handlePreviewClick(nextNextIndex)}
              priority
            />
          </div>
          </div>
        <div className={styles.buttons}>
          <button id="prev" onClick={handlePrev}>
            <FaArrowLeft className="w-10 h-10 text-white"/>
          </button>
          <button id="next" onClick={handleNext}>
            <FaArrowRight className="w-10 h-10 text-white" />
          </button>
        </div>
      </div>
      );

}
export default Slider;
