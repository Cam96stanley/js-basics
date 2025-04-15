// Initialize empty cart
let cart = [];

// Fake pizza DB
const pizzas = [
  { id: 1, pizza: "Pepperoni", price: 10.99 },
  { id: 2, pizza: "Cheese", price: 9.99 },
  { id: 3, pizza: "Mushroom", price: 10.99 },
  { id: 4, pizza: "Margharita", price: 12.99 },
  { id: 5, pizza: "Philly", price: 12.99 },
  { id: 6, pizza: "Hawaiian", price: 11.99 },
];

// Add pizza to cart based on id
const addToCart = (pizzaId) => {
  const pizza = pizzas.find((p) => p.id === pizzaId);

  // Check if pizza exists
  if (!pizza) {
    console.log("No pizza with that id");
    return;
  }

  // Check if pizza already exists in cart
  const existingPizza = cart.find((item) => item.id === pizzaId);

  // If pizza is in cart only update quantity
  if (existingPizza) {
    existingPizza.quantity += 1;

    // If pizza is not in cart add it to the cart
  } else {
    cart.push({ ...pizza, quantity: 1 });
  }

  // Finding totals
  // getting total of pizzaPrices array
  const TOTAL = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return { cart, TOTAL };
};

addToCart(1);
addToCart(1);
addToCart(2);
addToCart(3);

// Mapping over JSON to create cards dynamically
// Created JSON file but I don't have a package.json file currently so I can't import it here but this is what it would look like.

const card = document.getElementById("card");

// Initialize card as empty string
card.innerHTML = "";

const pizza = {
  img: "./assets/pizza-1.jpg",
  title: "Ultimate Hut Bundle",
  description:
    "ANY 2 medium pizzas, ANY 8 boneless wings, ANY sticks & 2 dips!",
};

// pizzas is what I would name the imported JSON data
pizzas.forEach((pizza) => {
  // Add new card to previously initialized card innerHTML to prevent overwriting
  card.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card p-4 text-center">
        <img
          src=${pizza.img}
          alt=${pizza.title}
          class="img-fluid"
        />
        <div class="card-body">
          <h5 class="card-title">${pizza.title}</h5>
          <p class="card-text">
            ${pizza.description}
          </p>
          <a class="btn btn-danger px-4" href="#">Add to Cart</a>
        </div>
      </div>
    </div>
  `;
});
