
import React from 'react'
import './header.scss'
import {motion} from 'framer-motion/dist/framer-motion'
import images from '../../constants/images'

const Header = () => {
  const scaleVariant = {
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  return (
    <div id='home' className="app__header app__flex" >
      <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className="app__header-info"
      >
       <div className="app__header-badge">
         <div className="badge-cmp app__flex">
           <span> 🖐
           </span>
           <div style={{marginLeft:20}} >
             <p className='p-text' >Hello i am </p>
             <h1 className="head-text">Charles</h1>
           </div>
         </div>
         <div className="tag-cmp app__flex">
           <p className="p-text">Web developement</p>
           <p className="p-text">UI/UX Design</p>
           <p className="p-text">Frelancer</p>
         </div>
       </div>
      </motion.div>
      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
        className="app__header-img"
      >
        <img src={images.charles} alt="" />
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1,ease:'easeInOut'}}
        src={images.circle}
        alt="circle"
        className="overlay_circle"
        />

      </motion.div>
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circle"
      >
        {[images.react,images.cpp,images.css].map((cir,index)=>{
          return(
            <div className="circle-cmp app__flex" key={index} >
               <img src={cir} alt="circle" />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Header