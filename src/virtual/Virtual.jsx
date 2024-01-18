import React from 'react'
import scss from "./Virtual.module.scss"
import girlphoto from '../assets/images/girl-photo.png';
import arrowRight from "../assets/icons/arrow-right.svg"
import ButtonBG from '../components/ui/buttons/ButtonBG'
const Virtual = () => {

    const virtualData=[
        {
            title1:"Dive Into The Depths Of Virtual Reality",
            
            p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae ."
        }
    ]

  return (
    <div className={scss.vitual_cards}>
        {virtualData.map((item)=>(
            <div className={scss.vitual_card}>
            <h2>{item.title1}</h2>
            <p>{item.p}</p>
             <div className='buttonarrow'>
                <ButtonBG>BUILD YOUR WORLD</ButtonBG>
                
                <img src={arrowRight} alt="arrow-right" />
                
             </div>
        </div>
        ))}
        <div className={scss.vitual_card2}>
            <img src={girlphoto} alt="girl-photo" />
        </div>
    </div>
  )
}

export default Virtual