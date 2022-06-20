import React from 'react'
import image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        {/* <div class="fas fa-bars" id="menu-btn"></div> */}
            {/* <a href="#"className={styles.logo}>lS</a> */}
          <Link href='/'>
            <img src='img/logo.png' alt='logo'className={styles.logo} />
          </Link>
        <ul className={styles.navbar}>
              <li className={styles.navLink}>
                <Link  href="/about">about us</Link>
              </li>
              <li className={styles.navLink}>
                <Link  href="/services">services</Link>
              </li>
              <li className={styles.navLink}>
                <Link  href="/projects">projects</Link>
              </li>
              <li className={styles.navLink}>
                <Link  href="/blogs">blogs</Link>
              </li>
              <li className={styles.navLink}>
                <Link  href="/contactUs">contact us</Link>
              </li>
        </ul>
        <a href="#book-form" className={styles.btn}>+2765 923 6199</a> 
    </div>
  )
}

export default Navbar