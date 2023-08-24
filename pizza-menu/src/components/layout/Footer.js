import React from 'react'

const hour = new Date().getHours;
const openHour = 12;
const closeHour = 22;

const time = hour >=closeHour && hour<=openHour ?  
 "We're closed till 8:00, you can order online":
 "We are Open till 22:00, come and visit us or oder online";

 const Footer = () => {
  return (
    <div className="footer">{time}</div>
  )
}

export default Footer;
