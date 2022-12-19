import React, {useState, useEffect} from 'react';
import {AppWrap} from './../../wrapper'
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import {urlFor, client} from './../../client'
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className='head-text'>My Creative <span> Portfolio </span> Section</h2>

      <div className='app__work-filter'>
        {
          ['UI/UX', 'Web-App', 'Mobile-App', 'React JS', 'All'].map( (skill, index) => (
            <div
              key={index}
            >

            </div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(Work, 'work');