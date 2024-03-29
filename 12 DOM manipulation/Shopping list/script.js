var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", changeDoneState);
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.addEventListener("click", deleteList);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function changeDoneState(event){
	console.log(event);
	event.target.classList.toggle("done");
	}
function deleteList(event){
	let li = event.target.parentNode;
	li.parentNode.removeChild(li);
	console.log(event.target.parentNode);	
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach( 
	function(currentValue) { 
	 currentValue.addEventListener("click", changeDoneState);
	 let button = document.createElement("button");
	 button.innerHTML = "Delete";
	 button.addEventListener("click", deleteList);
	 currentValue.appendChild(button);
	//  currentValue.appendChild(document.createElement("button"));
	}
  );

//   for (const button of li) {
// 	button.addEventListener('click', function(event) {
// 	  //...
// 	})
//   }