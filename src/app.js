// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
	Patty: 80,
	Cheese: 10,
	Tomatoes: 20,
	Onions: 20,
	Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
	Patty: true,
	Cheese: true,
	Tomatoes: true,
	Onions: true,
	Lettuce: true,
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
	renderPatty();
	renderCheese();
	renderTomatoes();
	renderOnions();
	renderLettuce();
	renderButtons();
	renderIngredientsBoard();
	renderPrice();
}

function renderPatty() {
	let patty = document.querySelector("#patty");
	//you can also use getElementById
	if (state.Patty) {
		patty.style.display = "inherit";
	} else {
		patty.style.display = "none";
	}
}

function renderCheese() {
	//Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
	//you can also use getElementById
	let cheese = document.getElementById("cheese");
	if (state.Cheese) {
		cheese.style.display = "inherit";
	} else {
		cheese.style.display = "none";
	}
}

function renderTomatoes() {
	//Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
	let tomato = document.querySelector("#tomato");
	if (state.Tomatoes) {
		tomato.style.display = "inherit";
	} else {
		tomato.style.display = "none";
	}
}

function renderOnions() {
	//Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
	let onion = document.getElementById("onion");
	if (state.Onions) {
		onion.style.display = "inherit";
	} else {
		onion.style.display = "none";
	}
}

function renderLettuce() {
	//Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
	let lettuce = document.querySelector("#lettuce");
	if (state.Lettuce) {
		lettuce.style.display = "inherit";
	} else {
		lettuce.style.display = "none";
	}
}

const pattyBtn = document.querySelector(".btn-patty");
pattyBtn.onclick = function () {
	state.Patty = !state.Patty;
	// pattyBtn.classList.toggle("active");
	renderAll();
};

// Trial 2 - Setup event listener for the cheese button
const cheeseBtn = document.querySelector(".btn-cheese");
cheeseBtn.onclick = function () {
	state.Cheese = !state.Cheese;
	// cheeseBtn.classList.toggle("active");
	renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
const tomatoesBtn = document.querySelector(".btn-tomatoes");
tomatoesBtn.onclick = function () {
	state.Tomatoes = !state.Tomatoes;
	// tomatoesBtn.classList.toggle("active");
	renderAll();
};

// Trial 2 - Setup event listener for the onion button
const onionsBtn = document.querySelector(".btn-onions");
onionsBtn.onclick = function () {
	state.Onions = !state.Onions;
	// onionsBtn.classList.toggle("active");
	renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
const lettuceBtn = document.querySelector(".btn-lettuce");
lettuceBtn.onclick = function () {
	state.Lettuce = !state.Lettuce;
	// lettuceBtn.classList.toggle("active");
	renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
	const buttonsArray = [
		pattyBtn,
		cheeseBtn,
		tomatoesBtn,
		onionsBtn,
		lettuceBtn,
	];
	const stateArray = Object.entries(state);
	stateArray.forEach((ele, i) => {
		ele[1] === true
			? buttonsArray[i].classList.add("active")
			: buttonsArray[i].classList.remove("active");
	});
	renderPrice();
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
	const menu = document.querySelector(".menu-container");
	const stateArray = Object.entries(state);
	let menuContent = `<h3>Ingredients</h3>`;
	stateArray
		.filter((ele) => ele[1] === true)
		.forEach((item) => {
			menuContent += `<p>${item[0]}</p>`;
		});
	menu.innerHTML = menuContent;
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
	const stateArray = Object.entries(state);
	const priceEle = document.querySelector(".price-details");
	let totalPrice = wholeWheatBun;
	stateArray
		.filter((ele) => ele[1] === true)
		.forEach((item) => {
			totalPrice += ingredients[item[0]];
		});
	// console.log(totalPrice);
	priceEle.innerHTML = `INR ${totalPrice}`;
}

window.onload = renderPrice();
