/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon})=>{

  return(
    <Tilt className='xs:w-[250px] w-full'>

        <motion.div variants={fadeIn( 'right','spring',0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

          <div options={{max:45,scale:1,speed:450}}  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>

      <motion.div variants={ textVariant()}>

          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p  className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'   variants={fadeIn("","",0.1,1)}>
                Enthousiaste et passionné par le monde de la programmation, je suis un ingénieur logiciel spécialisé dans le développement de solutions innovantes. Mon expertise s'étend sur plusieurs langages, avec une maîtrise approfondie de Python, JavaScript et C++. En outre, je suis un adepte de React JS, utilisant cette technologie pour créer des interfaces utilisateur modernes et réactives.

          Mon intérêt particulier réside dans le domaine captivant des logiciels 3D. Fort de mon expérience, je m'investis pleinement dans la conception et le développement de solutions logicielles tridimensionnelles, explorant les frontières de la visualisation numérique pour créer des expériences utilisateur exceptionnelles.

          Mon parcours professionnel témoigne de ma capacité à résoudre des problèmes complexes et à transformer des idées abstraites en produits logiciels fonctionnels. Travaillant avec une approche axée sur la qualité et l'efficacité, je suis constamment à la recherche de défis stimulants pour perfectionner mes compétences et contribuer de manière significative à l'évolution du domaine de la programmation.

          Que ce soit pour la création d'applications sophistiquées, le développement de fonctionnalités avancées ou l'exploration de nouveaux horizons dans le monde des logiciels 3D, je suis prêt à mettre mon savoir-faire au service de projets ambitieux. Mon objectif est de transcender les attentes et de créer des solutions logicielles qui repoussent les limites de l'innovation technologique.

          Si vous recherchez un ingénieur logiciel polyvalent, passionné par la technologie et doté d'une expertise étendue en Python, JavaScript, C++ et React JS, avec une spécialisation prononcée dans les logiciels 3D, je suis prêt à relever de nouveaux défis et à contribuer au succès de votre projet.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10' >

        {services.map((service,index)=>(<ServiceCard  key={service.title} index={index} {...service}/>))}

      </div>
    
    </>
  )
}

export default SectionWrapper(About,'about')