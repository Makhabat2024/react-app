import React from 'react'
import scss from "../instructionInfo/InstructionInfo.module.scss"
import arrow from "../../assets/icons/arrow-right.svg"
const InstructionInfo = () => {
    const instructionInfo=[
        {
            title:"INTRODUCTION",
            text:"TO HYDRA VR",
            description:"Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.",

        }
    ]
  return (
    <div className={scss.instructionInfo}>
        {instructionInfo.map(({title,text,description})=>{
      return <div className={scss.content}>
                   <div className={scss.content_box1}>       
                     <h2>{title}</h2>
                         <div className={scss.box1_text}>
                         <p>{text}</p>
                         <img src={arrow} alt="arrow" />
                     </div>
                   </div>

                    <div className={scss.content_box2}>
                         <p className={scss.description}>{description}</p>
                    </div>
             </div>
})}

    </div>
  )
}

export default InstructionInfo