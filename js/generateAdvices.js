$(document).ready(function(){
	var container = document.getElementById("toFillWithContent");
  container.innerHTML = "";

  init();

  for(let i = 0; i < nbAdvices; i++){
    container.innerHTML += `<img class="advice" src="advices/`.concat(i).concat(`.JPG" alt="Avis sur JaiPeurDesPapillons"/>`);
  }
});
