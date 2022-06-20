import React from 'react'
import styles from '../styles/Contact.module.css'
import { FaMapMarkerAlt, FaMobileAlt, FaRegEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.subHeading}>Want More Info?</p>
            <h1 className={styles.heading}>Contact Us Now</h1>
        </div>
        <div className={styles.details}>
            <div className={styles.content}>
                <FaMapMarkerAlt className={styles.icon} />
                <h3 className={styles.title}>Address</h3>
                <p className={styles.desc}>Stand No 1534</p>
                <p className={styles.desc}>Daantjie, Mbombela, 1215</p>
            </div>
            <div className={styles.content}>
                <FaMobileAlt className={styles.icon} />
                <h3 className={styles.title}>Phone</h3>
                <p className={styles.desc}>+2765 923 6199</p>
                <p className={styles.desc}>+2776 470 4554</p>
            </div>
            <div className={styles.content}>
                <FaRegEnvelope className={styles.icon} />
                <h3 className={styles.title}>Email</h3>
                <p className={styles.desc}>admin@basandalu.co.za</p>
                <p className={styles.desc}>info@basandalu.co.za</p>
            </div>
        </div>
        <div className={styles.msgMap}>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.inputs}>
                        <input 
                            type="text" 
                            name="First Name" 
                            placeholder="First Name"
                            className={styles.inputDetail} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="Last Name" 
                            placeholder="Last Name"
                            className={styles.inputDetail} 
                            required
                        />
                        <input 
                            type="email" 
                            name="Email Address" 
                            placeholder="Your Email Address"
                            className={styles.inputDetail} 
                        />
                    </div>
                    <div className={styles.msg}>
                        <textarea name="Message" rows="5" placeholder="Message"     className={styles.text} required></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className={styles.btn}
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className={styles.mapContainer}>
                <iframe className={styles.mapDetail} id="gmap_canvas" src="https://maps.google.com/maps?q=Madikizela%20Mandela%20Ave,%20Daantjie,%201215&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact