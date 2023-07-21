
import React from 'react';
import Image from 'next/legacy/image';
import styles from "../../styles/parallax.module.css";
import Content from './Content';
const Parallax = () => {
  const lowResImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD';
  return (
    <div className={styles.parallax}>
      <div className={styles.background}>
        <div className={styles.imageWrapper}>
          <Image
          layout='fill'
            className="image1"
            src="/assets/images/parallax/parallax.jpg"
            alt="background"
            quality={100}
            blurDataURL='{lowResImage}'
            objectFit="cover" 
          />
       <div className={styles.textImage}>
              <div className={styles.name}>ASYA MİMARLIK VE İNŞAAT</div>
              <div className={styles.desc}>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</div>
            </div>
        </div> 
      </div>
      <div className={styles.triangel}>
        <div className={styles.section_triangel}></div>
      </div>
      <div className={styles.content}>
      <Content/>
      </div>
    </div>
  );
};

export default Parallax;
