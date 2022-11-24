import React from 'react'
import { init } from 'ityped'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
// import { useEffect, useRef } from 'react'

const Hero = () => {
  // const textRef = useRef()
  
    // useEffect(() => {
    //   init(textRef.current, { 
    //     showCursor: true,
    //     backDelay: 2000,
    //     backSpeed: 150,
    //     strings: ['Web Development','Graphic Design', 'Digital Marketing', 'Mobile Development', 'IT Support', 'SEO'] 
    //   })
    // },[])

  return (
    <div className={styles.container}>
    <div className={styles.heroImgContainer}>
              {/* <Image
                    src="/heroImg.jpg" 
                    alt="about img2"
                    width="1300"
                    height="932"
                    objectFit='cover'
                    className={styles.img}
                /> */}
      </div>
     <div className={styles.heroContent}>
        <p className={styles.subHeading}>MAKE GREAT STRIDES</p>
        <h1 className={styles.heading }>SOFTWARE MAESTROS</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, <br></br>minus! Ducimus est enim repellat aut</p>
        <button className={styles.btn}>Get a free quote</button>
    </div>  
    </div>
  )
}

export default Hero