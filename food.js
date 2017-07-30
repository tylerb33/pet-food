console.log ("food.js");

var petFood = (function() {
	let dogfoodspot = document.getElementById("dogfood");

	let dogFoodLoader = new XMLHttpRequest();
	dogFoodLoader.addEventListener("load", function() {
		let foodObject = JSON.parse(this.responseText).dog_brands;
		console.log ("foodObject", foodObject);

	let finalOutput = "";

	for (let i = 0; i < foodObject.length; i++) {
		let currentFood = foodObject[i];
	/*Chuck Wagon*/	finalOutput += `<h1>${currentFood.name}</h1>`
	/*All Natural*/	finalOutput += `<h2>${currentFood.types[0].type}</h2>`
	/*32oz*/	finalOutput += `<h3>${currentFood.types[0].volumes[0].name} - ${currentFood.types[0].volumes[0].price}</h3>`
	/*64oz*/	finalOutput += `<h3>${currentFood.types[0].volumes[1].name} - ${currentFood.types[0].volumes[1].price}</h3>`
	/*All Natural*/	finalOutput += `<h2>${currentFood.types[1].type}</h2>`
	/*32oz*/	finalOutput += `<h3>${currentFood.types[1].volumes[0].name} - ${currentFood.types[1].volumes[0].price}</h3>`
	/*64oz*/	finalOutput += `<h3>${currentFood.types[1].volumes[1].name} - ${currentFood.types[1].volumes[1].price}</h3>`


		// console.log ("current food", currentFood);
		// console.log ("finalOutput", finalOutput);
	};
		dogfoodspot.innerHTML = finalOutput;
	// }

	});
	dogFoodLoader.open('GET', "dogfood.json");
	dogFoodLoader.send();
})()

/************************************************************************************************/