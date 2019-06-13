var ovenButton = document.getElementById("oven");
ovenButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Ovens can use a lot of energy depending on the temperature set, and most cooking is done at 300 to 425 Fahrenheit degrees. Ovens use 1000 to 5000 watts, with an average modern oven using around 2400 watts on medium to high heat. To save energy when using the oven, try to cook in batches, cook more food, and freeze/refrigerate the leftovers!"
  }
);
//oven
var stoveButton = document.getElementById("stove");
stoveButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "The energy use of a stove top varies- smaller units will use 1000 watts while a larger heating element will go up to 3000 watts. An average modern stove top element will use about 1500 watts per an hour of heating on medium to high."
  }
);
//stove
var dishwasherButton = document.getElementById("dishwasher");
dishwasherButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Modern dishwashers are energy efficient and do not use a lot of water. Dishwashers use between 1200 and 2400 watts of power, with an average dishwasher using 1800 watts. Dishwashers will typically use less water than hand washing if you are washing a full load of dishes, so hand washing isn’t necessarily “better.” Make sure to always load your dishwasher fully!"
  }
);
//dishwasher
var fridgeButton = document.getElementById("fridge");
fridgeButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Modern fridges are very energy efficient compared to older models from a few decades ago. A fridge will use anywhere from 100 to 400 watts depending on size, and a large fridge will use about 180 watts annually. If you are using an old fridge it’s recommended you upgrade to a more efficient modern model. An easy way to reduce your energy for fridges is to make sure you don’t leave the fridge door open when it’s not in use."
  }
);
//fridge
