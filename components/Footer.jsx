import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn  } from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.footer1}>
          <Link href='/'>
              <img src='img/logo.png' alt='logo'className={styles.logo} />
          </Link>
          <p className={styles.footerHead}>Our Mission</p>
          <p className={styles.footerDesc}>
              Our mission is to add value to our clients, we endeavour to grow our clients businesses in South Africa and beyond South Africa through technological innovation
          </p>
          <div className={styles.socials}>
              <FaFacebookF className={styles.icon} />
              <FaTwitter className={styles.icon} />
              <FaInstagram  className={styles.icon} />
              <FaLinkedinIn className={styles.icon}/>
          </div>
      </div>
      <div className={styles.footer2}>
        <p className={styles.footerHead}>Essential Links</p>
        <ul className={styles.uList}>
          <li className={styles.list}>
              <Link className={styles.footerLink} href="/about">About Us</Link>
            </li>
          <li className={styles.list}>
                <Link className={styles.footerLink} href="/services">Services</Link>
          </li>
          <li className={styles.list}>
              <Link className={styles.footerLink} href="/projects">Projects</Link>
          </li>
          <li className={styles.list}>
              <Link className={styles.footerLink} href="/blogs">Blogs</Link>
            </li>
          <li className={styles.list}>
                <Link className={styles.footerLink} href="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer2}>
        <p className={styles.footerHead}>Services</p>
        <ul className={styles.uList}>
            <li className={styles.list}>Web Development</li>
            <li className={styles.list}>Graphic Design</li>
            <li className={styles.list}>Digital Marketing</li>
            <li className={styles.list}>App Development</li>
            <li className={styles.list}>IT Support & Consultancy</li>
            <li className={styles.list}>SEO</li>
        </ul>
      </div>
      <div className={styles.footer2}>
        <p className={styles.footerHead}>Contact Us</p>
        <div className={styles.ContactInfo}>
          <p className={styles.info}>+2765 923 6199</p>
          <p className={styles.info}>+2776 470 4554</p>
          <p className={styles.info}>info@basandalu.co.za</p>
          <div className={styles.address}>
              <p className={styles.info}>165 Madikizela Mandela Ave</p>
              <p className={styles.info}>Daantjie, 1215</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className={styles.footerCopyright}>
    <small>Copyright &copy; Basanda LU IT Solutions | all rights reserved 2022</small>
</div>
</>
  )
}

export default Footer