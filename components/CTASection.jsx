import React from 'react'
import Image from 'next/image'
import styles from '../styles/CTASection.module.css'

const CTASection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ctaImg}>
          <div className={styles.CTAContent}>
              <h1 className={styles.heading}>Have Any Project In Mind?</h1>
              <button className={styles.btn}>Get In Touch</button> 
          </div>
      </div> 
    </div>
  )
}

export default CTASection