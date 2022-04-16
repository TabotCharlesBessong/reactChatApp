
import React from 'react'
import './about.scss'
import { motion } from 'framer-motion/dist/framer-motion'
import images from '../../constants/images'

const About = () => {
  const abouts = [
    {
      title:"Web Development",
      description:"I am a goog web developer",
      imgUrl:images.about01
    },
    {
      title:"Web Design",
      description:"I am a goog web designer",
      imgUrl:images.about02
    },
    {
      title:"UI/UX",
      description:"I am a goog UI/UX designer",
      imgUrl:images.about03
    },
    {
      title:"Frontend Development",
      description:"I am a goog frontend developer",
      imgUrl:images.about04
    }
  ]
  return (
    <>
      <h2 className="head-text">
        I Know That <span className=""> Good Dev  </span> <br />means <span className="">  Good business </span>
      </h2>
      <div className="app__profiles">
        {abouts.map((ab,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profiles-item'
          key={ab.title+index}
          >
           <img src={ab.imgUrl} alt={ab.title} />
           <h2 className="bold-text" style={{marginTop:'20px'}} >
             {ab.title}
           </h2>
           <p className="p-text" style={{marginTop:'10px'}} >
             {ab.title}
           </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About