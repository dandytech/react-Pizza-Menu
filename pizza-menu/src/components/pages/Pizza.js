import React from 'react'
//import image from '../../pizzas/spinaci.jpg'

 const Pizza = (props) => {
  return (
    <div>
       
         {/* <img src= {require("../../pizzas/spinaci.jpg")} alt="Spinaci" /> */}
           
              
             <div className='pizza'>
             
             <div className='pizzaimg'>
             <img src={props.pizzaObj.photoName} alt="props.name" />
             <button>{props.pizzaObj.buy}</button>
             </div>
              <div>
              <h3>{props.pizzaObj.name}</h3>
              <p>{props.pizzaObj.ingredients}</p>
              <span>{props.pizzaObj.price }</span>
              </div>
             </div>
            
     

    </div>
  )
}
export default Pizza;
