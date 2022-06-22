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
               <p className={styles.description}>We develop highly customized, clean, modern, dynamic and easy to integrate websites and E-commerce applications using latest technology to up your marketing strategy and increase site traffic to improve leads and closure rates</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaPenNib className={styles.icon}/>
                </div>
               <h3 className={styles.title}>Graphic Design</h3>
               <p className={styles.description}>We do product design. We help our clients improve their brands through designing logos, pamphlets, business cards, business profiles,  Web UI/UX design and many more. </p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaShareAlt className={styles.icon}/>
                </div>
               <h3 className={styles.title}>Digital Marketing</h3>
               <p className={styles.description}>We promote brands and help them connect with potential customers using the internet and help them use email, social media, and web-based advertising to reach more customers.</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaCode className={styles.icon}/>
                </div>
               <h3 className={styles.title}>App Development</h3>
               <p className={styles.description}>We pursue high impact software solutions through iterative, user-focused and rapid prototyping to help our clients sharpen their business edge, and build smarter businesses.
                </p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaMicrochip className={styles.icon}/>
                </div>
               <h3 className={styles.title}>IT Support & Consultancy</h3>
               <p className={styles.description}>Hardware and software maintenance, repairs, installations, networking Internet security solutions. Cloud solutions AWS, AZURE, Google Cloud
</p>
               <button className={styles.btn}>Learn More</button>
           </div>
           <div className={styles.service}>
                <div className={styles.iconContainer}>
                    <FaSitemap className={styles.icon}/>
                </div>
               <h3 className={styles.title}>SEO</h3>
               <p className={styles.description}>SEO stands for “search engine optimization.” We help optimize your of websites and web pages for major search engines like Google. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.</p>
               <button className={styles.btn}>Learn More</button>
           </div>
       </div>
    </div>
  )
}

export default OurServices