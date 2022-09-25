function order(pizzaSize, pizzaCrust, pizzaToppings = []) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.orderTotal = function () {
  let defaultTotal = 0;
  this.toppings.forEach(function(pizzaToppings, index) {
    defaultTotal = (index + 1);
  });
  
  if (this.pizzaSize === "stage1") {
    defaultTotal += 15;
  } else if (this.pizzaSize === "stage2") {
    defaultTotal += 20;
  } else if (this.pizzaSize === "stage3") {
    defaultTotal += 25;
  };

  if (this.pizzaCrust === "thin") {
    defaultTotal += 3;
  } else if (this.pizzaCrust === "pan") {
    defaultTotal += 5;
  } else if (this.pizzaCrust === "thic") {
    defaultTotal += 7;
  } else if (this.pizzaCrust === "vegan") {
    defaultTotal += 3;
  } else {
    defaultTotal += 0;
  };

  return defaultTotal;

  }