import React from 'react'
import styles from '../styles/OurServices.module.css'
import { FaCode, FaPenNib, FaShareAlt, FaMicrochip, FaSitemap } from "react-icons/fa"

const OurServices = () => {
  return (
    <div className={styles.container}>
        <div className={styles.servicesHeading}>
            <p className={styles.subHeading}>Our Services</p>
            <h1 className={styles.heading}>What We Do</h1> 
       </div>
       <div className={styles.services}>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaCode className={styles.icon}/>
                </div>
               <h3 className={styles.title}>Web Development</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaPenNib className={styles.icon}/>
                </div>
               <h3 className={styles.title}>Graphic Design</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaShareAlt className={styles.icon}/>
                </div>
               <h3 className={styles.title}>Digital Marketing</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaCode className={styles.icon}/>
                </div>
               <h3 className={styles.title}>App Development</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaMicrochip className={styles.icon}/>
                </div>
               <h3 className={styles.title}>IT Support & Consultancy</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaSitemap className={styles.icon}/>
                </div>
               <h3 className={styles.title}>SEO</h3>
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and applications using latest technology to up your marketing strategy by increasing site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
       </div>
    </div>
  )
}

export default OurServices