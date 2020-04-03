var container = document.getElementById("toFill");
var itemPath = "";
var itemID = 0;
var nbItems = 0;
init();
if(folder == "advices/"){
	updateCaroussel();
}

// On doit remettre a jour le DOM a chaque reload
function updateCaroussel(){
	// The click event on a flashItem trigger the caroussel pop-up
	$(".item").click(function(){
		container.innerHTML = "";
		itemPath = "";
		itemID = 0;
		nbItems = 0;
		console.log(itemPath);
		carousselGenerate(this);
	});

	function carousselGenerate(item){
		// 	GET THE NUMBERS OF ITEMS TO CREATE, THE EMPTY CAROUSSEL, THE IMAGE NAME
		itemID = item.id;
		if(folder == "illustrations/"){
			nbItems = 1;
		}else if(folder == "flash/"){
			nbItems = tabData[itemID][1];
		}else if(folder == "tattoos/"){
			nbItems = tabTattoos[itemID];
		}else{
			nbItems = nbAdvices;
		}
		var tab = new Array(); //CREATE A NEW ARRAY TO STORE THE ITEMS

	  //GENERATE CAROUSSEL
		for(let i = 0; i < nbItems; i++){
			if(folder == "illustrations/"){
				itemPath = folder.concat(itemID);
			}else if(folder == "flash/"){
				itemPath = folder.concat(itemID).concat("/").concat(i);
			}else if(folder == "tattoos/"){
				itemPath = folder.concat(itemID).concat("/").concat(i);
			}else{
				itemPath = folder.concat(i);
			}
			tab[i] = document.createElement('div'); //CREATE DIVS
			tab[i].classList.add("carousel-item"); // ADD THE CLASS FOR CAROUSSEL ITEMS
			if(i == 0){
				tab[i].classList.add("active");	// THE FIRST ITEM MUST BE ACTIVE
			}
			tab[i].innerHTML = "<img src='".concat(itemPath).concat(".JPG' class='w-100 d-block'>"); //EDIT EACH ELEMENT
			container.appendChild(tab[i]); // ADD TO THE CONTAINER
		}

		if(nbItems == 1){
			$(".carousel-control-prev").hide();
			$(".carousel-control-next").hide();
		}else{
			$(".carousel-control-prev").show();
			$(".carousel-control-next").show();
		}
	}
}
