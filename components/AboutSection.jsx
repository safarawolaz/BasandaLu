import React from 'react'
import Image from 'next/image'
import styles from '../styles/AboutSection.module.css'


const AboutSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.aboutImg}>
            {/* <div  className={styles.aboutImage1}>
                <Image
                    src="/AbtImg1.jpg"
                    alt="about img1"
                    width="400"
                    height="400"
                    objectFit='cover'
                    className={styles.img}
                />
            </div> */}
            <div  className={styles.aboutImage2}>
                <Image
                    src="/AbtImg2.jpg" 
                    alt="about img2"
                    width="600"
                    height="600"
                    objectFit='cover'
                    className={styles.img}
                />
            </div>
        </div>
        <div className={styles.aboutContent}>
            <p className={styles.subHeading}>Why us?</p>
            <h1 className={styles.heading}>why choose us?</h1>
            <p className={styles.content}>
            Smart businesses know that they always need to find ways to optimise their business and operations especially in this day and age. Digital transformation is inevitable. Basanda Lu IT Solutions believes that sustaining a business involves making an authentic connection with its customers and stakeholders. We believe in a consultative approach. </p>
            <p className={styles.content}> We understand your requirements first and then put forward solutions suitable for you. We provide Lifetime support post-delivery. We provide an elegant solutions which provides your business with an edge over your competitors. 
            </p>
            <button className={styles.btn}>Learn More</button>
        </div>
    </div>
  )
}

export default AboutSection