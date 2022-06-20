import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
    <div className={styles.videoContainer}>
      <video src="img/heroVideo.mp4" type='video/mp4' muted autoPlay loop playsInline className={styles.video}>
      </video>
      </div>
     <div className={styles.heroContent}>
        <p className={styles.subHeading}>your trusted partner in it</p>
        <h1 className={styles.heading}>Digital Marketing</h1>
        <button className={styles.btn}>Get a free quote</button>
    </div>  
    </div>
  )
}

export default Hero