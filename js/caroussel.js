$(document).ready(function(){
	var container = document.getElementById("toFill");

	$(".card").click(function(){
		carousselGenerate(this);
	});

	

	function carousselGenerate(card){
		// 	GET THE NUMBERS OF ITEMS TO CREATE, THE EMPTY CAROUSSEL, THE IMAGE NAME
		var nbItems = card.childNodes[2].innerHTML;
		console.log(nbItems);
		var imageName = card.childNodes[1].alt;
		console.log(imageName);
		container.innerHTML = "";
		var tab = new Array(); //CREATE A NEW ARRAY TO STORE THE ITEMS

		//GENERATE CAROUSSEL
		for(let i=0; i<nbItems; i++){
			tab[i] = document.createElement('div'); //CREATE DIVS
			tab[i].classList.add("carousel-item"); // ADD THE CLASS FOR CAROUSSEL ITEMS
			if(i == 0){
				tab[i].classList.add("active");	// THE FIRST ITEM MUST BE ACTIVE
			}
			tab[i].innerHTML = "<img src='flash/".concat(imageName).concat(i).concat(".jpg' class='w-100 d-block'>"); //EDIT EACH ELEMENT
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
});

