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
  
  if (this.pizzaSize === "Stage 1 (medium)") {
    defaultTotal += 15;
  } else if (this.pizzaSize === "Stage 2 (medium)") {
    defaultTotal += 20;
  } else if (this.pizzaSize === "Stage 3 (lg)") {
    defaultTotal += 25;
  } else if (this.pizzaSize === "Super V-MAX (Deep Dish)") {
    defaultTotal += 30;
  } else if (this.pizzaSize === "Shiny (Pan)") {
    defaultTotal += 25;
  };

  if (this.pizzaCrust === "Thin") {
    defaultTotal += 3;
  } else if (this.pizzaCrust === "Thicccccc") {
    defaultTotal += 7;
  } else if (this.pizzaCrust === "Vegan") {
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
  let toppingsArray = [];
  document.querySelectorAll("input[name=pizza-toppings]:checked").forEach(function(element) {
    let topping = element['value'];
    toppingsArray.push(topping);
  });

  const custOrderTotal = new Order(psize, pcrust, psauce, toppingsArray);
  let orderCost = custOrderTotal.orderTotal();
  let toppings = toppingsArray.join(", ");
  document.getElementById("total").removeAttribute("class");
  document.querySelector("span.r-size").innerText = psize;
  document.querySelector("span.r-crust").innerText = pcrust;
  document.querySelector("span.r-sauce").innerText = psauce;
  document.querySelector("span.r-toppings").innerText = toppings;
  document.querySelector("span.r-total").innerText = orderCost;
}

window.addEventListener("load",function() {
  this.document.querySelector("form#customer-order").addEventListener("submit", handleSubmitOrder);
}
)