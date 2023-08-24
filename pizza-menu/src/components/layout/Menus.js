import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menus() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
export default Menus;

// const Menus = () => {
//   return (
//     <main className='menu'>
//      <h2>Our menu</h2>
//     {/* <img src = "pizzas/salamino.jpg" alt="salamino" />  */}

//     <div className='pizzas'>

//      <Pizza
//       name="Pizza Margherita"
//       ingredients="Tomato, Mozarella"
//       photoName="pizzas/margherita.jpg"
//       price={19}
//       buy = "ORDER NOW"
//       />

//     <Pizza
//      name="Pizza spinaci"
//      ingredients="Tomato, Mozarella, Spinach and ritcotta cheese"
//      photoName="pizzas/spinaci.jpg"
//      price={12}
//      buy = "ORDER NOW"
//      />

//     </div>

//     <div className='pizzas'>
//     <Pizza
//      name="Pizza Funghi"
//      ingredients="Tomato, Mozarella, mushrooms, and Onion"
//      photoName="pizzas/funghi.jpg"
//      price={12}
//      buy = "ORDER NOW"
//      />

//     <Pizza
//      name="Pizza Prosciutto"
//      ingredients="Tomato, Mozarella, ham, aragula, and burrata cheese"
//      photoName="pizzas/prosciutto.jpg"
//      price={18}
//      buy = "ORDER NOW"
//      />
//     </div>

//     <div className='pizzas'>

//       <Pizza
//       name="Pizza Salamino"
//       ingredients="Tomato, Mozarella, and Pepperoni"
//       photoName="pizzas/salamino.jpg"
//       price= "SOLD OUT"
//       />

//      <Pizza
//      name=" pizza focaccia"
//      ingredients="Bread with italian olive oil and rosemary"
//      photoName="pizzas/focaccia.jpg"
//      price= {6}
//      buy = "ORDER NOW"
//      />
//     </div>
//     </main>
//   )
// }
// export default Menus;
