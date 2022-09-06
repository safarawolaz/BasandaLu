import React from 'react'
import { init } from 'ityped'
import styles from '../styles/Hero.module.css'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const textRef = useRef()
  
    useEffect(() => {
      init(textRef.current, { 
        showCursor: true,
        backDelay: 2000,
        backSpeed: 150,
        strings: ['Web Development','Graphic Design', 'Digital Marketing', 'Mobile Development', 'IT Support', 'SEO'] 
      })
    },[])

  return (
    <div className={styles.container}>
    <div className={styles.videoContainer}>
      <video src="img/heroVideo.mp4" type='video/mp4' muted autoPlay loop playsInline className={styles.video}>
      </video>
      </div>
     <div className={styles.heroContent}>
        <p className={styles.subHeading}>your trusted partner in it</p>
        <h1 className={styles.heading }We do ref={textRef}></h1>
        <button className={styles.btn}>Get a free quote</button>
    </div>  
    </div>
  )
}

export default Hero