$(document).ready(function(){
	var container = document.getElementById("toFillWithContent");
	var tabContent = new Array();
	var messageContainer = document.getElementById("messageContainer");
	var loadButton = document.getElementById("loadButton");
	var currentItemsDisplayed = 0;

	init();
	currentItemsDisplayed = nbIllustrations;
	// Trigger the load of 20 tattoos pictures
	display20();
	// Click handler for loadButton
	loadButton.onclick = display20;

	// This function display 20 tattoos or less if we reach the end of items to display
	function display20(){
		let i = 0;
		while(i < 20 && currentItemsDisplayed != 0){
			currentItemsDisplayed--;
			displayGraphicItem();
			i++;
		}
		updateCaroussel();
		if(currentItemsDisplayed == 0){
			displayEndMessage();
		}
	}

	// Display an info message : no more tattoos
	function displayEndMessage(){
		messageContainer.innerHTML = "<p id='messageEnd'>Tu as vu toutes les illustrations du site ! Suis moi sur Instagram pour en voir plus !</p>";
	}

	function displayGraphicItem(){
		tabContent[currentItemsDisplayed] = document.createElement('div');
		tabContent[currentItemsDisplayed].classList.add("item");
		tabContent[currentItemsDisplayed].id = currentItemsDisplayed;
		tabContent[currentItemsDisplayed].innerHTML = `<img class="illustrations" src="illustrations/`.concat(currentItemsDisplayed).concat(`.JPG" data-toggle="modal" data-target="#exampleModalCenter">`);
		container.appendChild(tabContent[currentItemsDisplayed]);
	}
});
