$(document).ready(function(){
	var tabURL =    ["abeille", "ak47", "bolNouille", "bonneNuit", "cancer", "chat", "chatOeil", "coeurOeil", "corpsFleur", "demonGeisha", "demonz", "dragon", "eva", "femmeSerpent", "filleBulle", "fougere", "gaara", "ginko", "grosChat", "guiness", "kaneki", "mainPlanete", "marguerite", "mononoke", "navet", "no", "non", "nuage", "oeilBig", "oeilFin", "oeilPoint", "peintureVenus", "peurDuNoir", "pilule", "poissonPleure", "poissonPoid", "pot", "pouvoir", "rose", "sansVisage", "seule", "sk8", "sorciere", "stevenUniverse", "tarotMononoke", "visageLigne", "yeux"];
	var tabNumber = ["1",       "1",    "1",          "1",         "1",      "1",    "1",        "1",         "1",          "2",           "1",      "2",      "2",   "1",            "1",          "1",       "2",     "1",     "1",        "1",       "2",      "1",           "1",          "1",        "1",     "1",  "1",   "1",     "1",       "1",       "1",         "2",             "1",          "1",      "1",             "1",           "1",   "1",       "1",    "1",          "1",     "1",   "1",        "1",              "1",             "3",           "1"   ];                      

	var container = document.getElementById("mainContainer");
	var tabContent = new Array();

	for(let i=0; i < tabURL.length; i++){
		console.log("hole");
		tabContent[i] = document.createElement('div');
		tabContent[i].innerHTML = `<img class="tattoos" src="tattoos/`.concat(tabURL[i]).concat(`0.jpg" alt="`).concat(tabURL[i]).concat(`" data-toggle="modal" data-target="#exampleModalCenter">`).concat(`<p class="info">`).concat(tabNumber[i]).concat(`</p>`);
		container.appendChild(tabContent[i]); 
	}
});