import React, {useState, useEffect} from 'react';

import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';


const abouts = [
  {
    title: "Web Development",
    description: "I am a good Web Developer",
    imageUrl: images.about01
  },
  {
    title: "Frontend Development",
    description: "I am a good Web Designer",
    imageUrl: images.about02
  },
  {
    title: "Backend Development",
    description: "I am a good UI/UX Designer",
    imageUrl: images.about03
  },
  {
    title: "MERN Stack",
    description: "I am a good full Stack  Developer",
    imageUrl: images.about04
  },
]

 const About = () => { 
  
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then( (data) => {
  //     setAbouts(data);
  //   })
  // }, [])
  

  return (
    <>
      <h2 className="head-text"> I know that <span> Good Apps </span> means <span>Good Businuss</span>
      </h2>

      <div className="app__profiles">
          {abouts.map( (about, index) =>
              <motion.div
               whileInView={ {opacity: 1}}
               whileHover={{scale: 1.1 }}
               transition= {{duration: 0.5, type: 'tween'}}
               key={about.title + index}
               className="app__profile-item"
              >
                <img src={about.imageUrl} alt={about.title} />
                <h2 className="bold-text" style={{marginTop: 20}}>
                  {about.title}
                </h2>
                <p className="p -text" style={{marginTop: 10}}>
                  {about.description}
                </p>
              </motion.div>
           )}
      </div>
    </>
  )
}

export default About