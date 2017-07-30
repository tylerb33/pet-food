console.log ("catfoodscript.js");

var petFood = (function() {
	let catfoodspot = document.getElementById("catfood");
	
	let catFoodLoader = new XMLHttpRequest();
	catFoodLoader.addEventListener("load", function() {
		console.log ("cat food has loaded");
		let catFoodObject = JSON.parse(this.responseText).cat_brands;
		console.log ("catFoodObject", catFoodObject);

		let finalCatOutput = "";

		for (let i = 0; i < catFoodObject.length; i++) {
			let currentCatFood = catFoodObject[i];
		/*Purrina*/	finalCatOutput += `<h1>${currentCatFood.name}</h1>`
		/*Breeds*/ finalCatOutput += `<p><em>${currentCatFood.breeds[0].breed},
									  ${currentCatFood.breeds[1].breed},
									  ${currentCatFood.breeds[2].breed},
									  ${currentCatFood.breeds[3].breed}</em></p>`
	/*kitten*/				finalCatOutput += `<h3>${currentCatFood.types[0].type}</h3>`
	/*20oz*/				finalCatOutput += `<h3>${currentCatFood.types[0].volumes[0].size}</h3>`
	/*19.99*/				finalCatOutput += `<h3>${currentCatFood.types[0].volumes[0].price}</h3>`
	/*32oz*/				finalCatOutput += `<h3>${currentCatFood.types[0].volumes[1].size}</h3>`
	/*26.99*/				finalCatOutput += `<h3>${currentCatFood.types[0].volumes[1].price}</h3>`
							finalCatOutput += `<h3>${currentCatFood.types[0].volumes[1].size}</h3>`
	/*26.99*/				finalCatOutput += `<h3>${currentCatFood.types[0].volumes[1].price}</h3>`
							finalCatOutput += `<h3>${currentCatFood.types[0].volumes[2].size}</h3>`
							finalCatOutput += `<h3>${currentCatFood.types[0].volumes[2].price}</h3>`
	

					finalCatOutput += `<h3>${currentCatFood.types[1].type}</h3>`
					finalCatOutput += `<h3>${currentCatFood.types[1].volumes[0].size}</h3>`
					finalCatOutput += `<h3>${currentCatFood.types[1].volumes[0].price}</h3>`



		// for (let i = 0; i < catFoodObject.length; i++) {
		// 	let currentCatFoodMeow = catFoodObject[i];
		// /*Purrina*/	finalCatOutput += `<h1>${currentCatFood.name}</h1>`
		// /*Breeds*/ finalCatOutput += `<p><em>${currentCatFood.breeds[0].breed},
		// 							  ${currentCatFood.breeds[1].breed},
		// 							  ${currentCatFood.breeds[2].breed},
		// 							  ${currentCatFood.breeds[3].breed}</em></p>`
		// 			finalCatOutput += `<h3>${currentCatFood.types[0].kitten[0].size}</h3>`
		// 			finalCatOutput += `<h3>${currentCatFood.types[0].kitten[0].price}</h3>`
		// 			finalCatOutput += `<h3>${currentCatFood.types[0].kitten[1].size}</h3>`
		// 			finalCatOutput += `<h3>${currentCatFood.types[0].kitten[1].price}</h3>`

					// finalCatOutput += `<h3>${currentCatFood.types[1].elite.size}</h3>`
					// finalCatOutput += `<h3>${currentCatFood.types[1].elite.price}</h3>`
					// finalCatOutput += `<h3>${currentCatFood.types[1].elite[1].size}</h3>`
					// finalCatOutput += `<h3>${currentCatFood.types[1].elite[1].price}</h3>`

	
		};
		catfoodspot.innerHTML = finalCatOutput;
	});
	catFoodLoader.open("GET", "catfood.json");
	catFoodLoader.send();
})()