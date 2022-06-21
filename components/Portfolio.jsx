import {useEffect, useState} from 'react'
import styles from '../styles/Portfolio.module.css'
import PortfolioList from './PortfolioList'
import {
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  featuredPortfolio
} from './data.js'

const Portfolio = () => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState('featured')

  useEffect(() => {
      switch(selected) {
        case 'web':
          setData(webPortfolio)
            break;
            case 'mobile':
          setData(mobilePortfolio)
            break;
            case 'design':
          setData(designPortfolio)
            break;
            case 'content':
          setData(contentPortfolio)
            break;
            case 'featured':
          setData(featuredPortfolio)
            break;
          default:
            setData(featuredPortfolio)
      }
  },[selected])
  
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]

  return (
    <div className={styles.portfolio}>
      <div className={styles.header}>
        <p className={styles.subHeading}>Our Work</p>
        <h1 className={styles.heading}>Some of Our Projects</h1>
      </div>
      <ul className={styles.list}>
            {list.map(item => (
                <PortfolioList
                key={item.id} 
                title={item.title} 
                active={selected === item.id} 
                setSelected={setSelected} 
                id={item.id}
                />
            ))}
       </ul>
       <div className={styles.container}>
         {data.map(d => (
         <div className={styles.item} key={d.id} >
           <img className={styles.portfolioImg} src={d.img} alt='pImg1'/>
           <h3 className={styles.title}>{d.title}</h3>
         </div> 
         ))}
       </div>
    </div>
  )
}

export default Portfolio

