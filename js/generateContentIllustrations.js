$(document).ready(function(){
	var tabURL =    ["demon", "Douze", "Etoile", "FleursDansLesCheveux", "FleursDansLesCheveux1", "FleursDansLesCheveux2", "Frida", "FullMetalJacket", "FullMetalTokyo", "KidsWithGun", "Noodle", "ProblemeDeBras", "Sailor", "Smoke", "Sorciere", "Sunset", "SuperMarket", "Susuki", "Toile", "Usagi", "fatale0", "fatale1", "fatale2", "fatale3", "fatale4", "fatale5", "fatale6", "fatale7", "tableau", "toiEtMoi"];

	var container = document.getElementById("mainContainer");
	var tabContent = new Array();

	for(let i=0; i < tabURL.length; i++){
		tabContent[i] = document.createElement('div');
		tabContent[i].innerHTML = `<img class="illustrations" src="illustrations/`.concat(tabURL[i]).concat(`.jpg" data-toggle="modal" data-target="#exampleModalCenter">`);
		container.appendChild(tabContent[i]); 
	}

	$(".illustrations").click(function(){
		console.log(this.src);
		$("#toFill").attr("src", this.src);
	});
});