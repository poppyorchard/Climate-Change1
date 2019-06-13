var gasCarButton = document.getElementById("gasCar");
gasCarButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Gas cars cover wider distances and are cheaper than electric cars. But, they have many environmental cons. Gas leaks can lead to potential health hazards and the cars rely on fossil fuels, contributing to pollution and climate change."
  }
);
//gas car
var electricCarButton = document.getElementById("electricCar");
electricCarButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "On average, it costs about half as much to drive an electric vehicle compared to a gas powered one. Electricity is less expensive than gasoline and EVs are more efficient than gasoline vehicles. However, electric cars have limited ranges, longer fuel/charge times, and they cost more."
  }
);
//electric car
