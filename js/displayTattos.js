$(document).ready(function(){
	var container = document.getElementById("toFill");
	console.log(container);

	$(".tattoos").click(function(){
		carousselGenerate(this);
	});

	
	function carousselGenerate(image){
		// 	GET THE NUMBERS OF ITEMS TO CREATE, THE EMPTY CAROUSSEL, THE IMAGE NAME
		var nbItems = image.nextElementSibling.innerHTML;
		console.log(nbItems);
		var imageName = image.alt;
		console.log(nbItems);
		container.innerHTML = "";

		//GENERATE CAROUSSEL
		for(let i=0; i<nbItems; i++){
			var tab = new Array(); //CREATE A NEW ARRAY TO STORE THE ITEMS
			tab[i] = document.createElement('div'); //CREATE DIVS
			tab[i].classList.add("carousel-item"); // ADD THE CLASS FOR CAROUSSEL ITEMS
			if(i == 0){
				tab[i].classList.add("active");	// THE FIRST ITEM MUST BE ACTIVE
			}
			tab[i].innerHTML = "<img src='tattoos/".concat(imageName).concat(i).concat(".jpg' class='d-block w-100'>"); //EDIT EACH ELEMENT
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