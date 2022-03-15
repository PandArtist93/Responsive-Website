import React from 'react'
import Features from '../features/Features'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatpgt3 section__margin' id='whtpt3'>
      <div className='gpt3__whatpgt3-feature'>
        <Features title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='gpt3__whatpgt3-heading'>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="gradient-text">
          Explore The Library
        </p>
      </div> 
      <div className='gpt3__whatpgt3-container'>
        <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatGPT3