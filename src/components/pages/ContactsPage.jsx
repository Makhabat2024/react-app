import React from 'react'
import scss from "../pages/Style.module.scss"
import location from "../../assets/icons/location.svg"
import callIcon from "../../assets/icons/phone-call.svg"
import mailIcon from "../../assets/icons/mail.svg"
import line from "../../assets/smooth-line-top.png"

const ContactsPage = () => {

  const locationData=[
    {
      icon: location,
      visit: "Pay Us a Visit",
      address:"Union St, Seattle, WA 98101, United States"
    }
  ];


  const callsData=[
    {
      icon:callIcon,
      calls:"Give Us a Call",
      numberPhone:"(110) 1111-1010"

    }
  ];

  const messageData = [
    {
      icon:mailIcon,
      message:"Send Us a Message",
      email:"Contact@HydraVTech.com",

    }
  ]
  return (
    <div className={scss.contactsPage}>
        {locationData.map(({icon,visit,address})=>{
         return <div className={scss.locationBox}>   
           <img src={icon} alt="icon" />
           <div>
              <h5>{visit}</h5>
              <p>{address}</p>
            </div>
          </div>
        })}
       
       <img src={line} alt="line" className='lineimg'/>

       {callsData.map(({icon,calls,numberPhone})=>{
       return <div className={scss.callsBox}>
            <img src={icon} alt="icon" />
             <div>
               <h5>{calls}</h5>
               <p>{numberPhone}</p>
             </div>
            </div>
        })}

        <img src={line} alt="line" className='lineimg'/>

       {messageData.map(({icon,message,email})=>
          <div className={scss.messageBox}>
             <img src={icon} alt="icon" />
              <div>
                <h5>{message}</h5>
                <p>{email}</p>
              </div>
          </div>
       )}
    </div>
  )
}

export default ContactsPage