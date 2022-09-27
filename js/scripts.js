function Order(pizzaSize, pizzaCrust, pizzaSauce, pizzaToppings = []) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce
  this.pizzaToppings = pizzaToppings;
}

Order.prototype.orderTotal = function () {
  let defaultTotal = 0;
  this.pizzaToppings.forEach(function(pizzaToppings, index) {
    defaultTotal = (index + 1);
  });
  
  if (this.pizzaSize === "sm") {
    defaultTotal += 15;
  } else if (this.pizzaSize === "md") {
    defaultTotal += 20;
  } else if (this.pizzaSize === "lg") {
    defaultTotal += 25;
  } else if (this.pizzaSize === "dd") {
    defaultTotal += 30;
  } else if (this.pizzaSize === "pan") {
    defaultTotal += 25;
  };

  if (this.pizzaCrust === "thin") {
    defaultTotal += 3;
  } else if (this.pizzaCrust === "thic") {
    defaultTotal += 7;
  } else if (this.pizzaCrust === "vegan") {
    defaultTotal += 3;
  } else {
    defaultTotal += 0;
  };

  return defaultTotal;

  }

function handleSubmitOrder(e){
  e.preventDefault();
  const psize = document.getElementById("pizza-size").value;
  const pcrust = document.getElementById("pizza-crust").value;
  const psauce = document.getElementById("pizza-sauce").value;
  const toppArray = [];
  const topp = document.querySelector("input[type=checkbox][name='pizza-toppings']:checked");
  for(let i = 0; i <topp; i++) {
    toppArray.push(topp[i].value)
  };

  const custOrderTotal = new Order(psize, pcrust, psauce, topp);
  let orderCost = custOrderTotal.orderTotal();
  let toppings = toppArray.join(", ");
  document.getElementById("total").removeAttribute("class");
  document.querySelector("r-size").innerText = psize;
  document.querySelector("r-crust").innerText = pcrust;
  document.querySelector("r-sauce").innerText = psauce;
  document.querySelector("r-toppings").innerText = toppings;
  document.querySelector("r-total").innerText = orderCost;
}

window.addEventListener("load",function() {
  this.document.querySelector("form#customer-order").addEventListener("submit", handleSubmitOrder);
}
)