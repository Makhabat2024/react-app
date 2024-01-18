import React from 'react'
import scss from "../pages/Style.module.scss"
import ButtonBG from '../ui/buttons/ButtonBG'
import manPhoto from "../../assets/images/man-photo.png"
// import arrowRight from "../../assets/icons/arrow-right.svg"

const HydraAbout = () => {
  return (
    <div className={scss.hydraAbout}>
      <div className={scss.photoBox}>
        <img src={manPhoto} alt="man-photo" />
      </div>
      <div className={scss.textBox}>
        <h1>ABOUT</h1>
        <p>HYDRA VR</p>
        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.</p>
        <ButtonBG>LET’S GET IN TOUCH</ButtonBG>
      </div>
    </div>
  )
}

export default HydraAbout