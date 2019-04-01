eventListener();


function eventListener() {

	var submitBtn = document.querySelector('input[type="submit"]');

	//add click event to button
	submitBtn.addEventListener('click', loadNames);

}


