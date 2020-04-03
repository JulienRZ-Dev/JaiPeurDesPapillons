$(document).ready(function(){
	var container = document.getElementById("toFillWithContent");
	var messageFlashContainer = document.getElementById("messageFlashContainer");
	var loadButton = document.getElementById("loadButton");
	var tabContent = new Array();
	var currentItemsDisplayed; // Number of items currently displayed

	// set tabData
	init();
	currentItemsDisplayed = tabData.length;
	// Trigger the load of 20 flashs
	display18();

	// Click handler for loadButton
	loadButton.onclick = display18;

	// This function display 20 flashItems or less if we reach the end of items to display
	function display18(){
		let i = 0;
		while(i < 18 && currentItemsDisplayed != 0){
			currentItemsDisplayed--;
			displayGraphicItem();
			i++;
		}
		updateCaroussel();
		if(currentItemsDisplayed == 0){
			displayEndMessage();
		}
	}

	// Display an info message : no more flash
	function displayEndMessage(){
		messageContainer.innerHTML = "<p id='messageEnd'>Tu as vu tous les flashs du site ! Suis moi sur Instagram pour en voir plus !</p>";
	}

	// Write the html to display the graphic flashItem
	function displayGraphicItem(){
		//
		var info = `<span id="numberOfSlides" class="badge badge-pill badge-info">`.concat(tabData[currentItemsDisplayed][1]).concat(`</span>`);
		if(tabData[currentItemsDisplayed][1] == 1){
			info = `<span id="numberOfSlides" style="display: none;" class="badge badge-pill badge-info">`.concat(tabData[currentItemsDisplayed][1]).concat(`</span>`);
		}
		// Cree l'element carte qui va representer graphiquement les flashItems
		tabContent[currentItemsDisplayed] = document.createElement('div');
		tabContent[currentItemsDisplayed].classList.add("col-md-12");
		tabContent[currentItemsDisplayed].classList.add("col-lg-6");
		tabContent[currentItemsDisplayed].classList.add("col-xl-4");
		tabContent[currentItemsDisplayed].classList.add("item");
		tabContent[currentItemsDisplayed].id = currentItemsDisplayed;
		tabContent[currentItemsDisplayed].innerHTML =  `<div class="card m-4 text-center" data-toggle="modal" data-target="#exampleModalCenter">
																											<img src="flash/`.concat(currentItemsDisplayed).concat(`/0.JPG" class="card-img-top" id="imageToDisplay" alt="`)
																											.concat(tabData[currentItemsDisplayed][0]).concat(`">`).concat(info).concat(`
																											<div class="card-body">
																												<h1 class="card-title">`).concat(tabData[currentItemsDisplayed][0]).concat(`</h1>`)
																												.concat(`
																												</div>
																											</div>`);
		container.appendChild(tabContent[currentItemsDisplayed]);
	}
});
