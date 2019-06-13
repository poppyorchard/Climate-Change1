var laundryButton = document.getElementById("laundry");
laundryButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Washers especially use a lot of water, the old school ones using 40-45 gallons of water and the newer ones using 14-25 gallons. Still, washers use a lot of water inefficiently. Make sure that when you use washers you put in FULL LOADS to get the most from your water."
  }
);
//laundry
var showerButton = document.getElementById("shower");
showerButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Standard shower heads use 2.5 gallons of water a minute, and an average shower uses 20 gallons of water! This drives about 17% of water in households. Heating shower water also uses a huge amount of energy, either gas or electric. Using EPA CERTIFIED water heads can increase your water efficiency, and try taking shorter/colder showers."
  }
);
//shower
var sinkButton = document.getElementById("sink");
sinkButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Faucets use up to 1.5 gallons of water in a minute. This may not seem like much, but it builds up when you leave the faucet on while brushing your teeth, etc."
  }
);
// sink
var toiletButton = document.getElementById("toilet");
toiletButton.addEventListener("click", function()
  {
  document.getElementById("text").innerHTML = "Toilets are the number one source of water in the average household! The older the toilet, the more water it uses. Older toilets take 5-7 gallons to flush. Make sure your toilet DOES NOT HAVE LEAKS and try to replace older toilets with newer, more efficient ones."
  }
);
//toilets
