eventListener();


function eventListener() {

	var submitBtn = document.querySelector('input[type="submit"]');

	//add click event to button
	submitBtn.addEventListener('click', loadNames);

}


function loadNames() {

	//get elements from the dom
	const amount = document.querySelector('input[type="number"]');
	const country = document.querySelector('#country');
	const gender = document.querySelector('#gender');
	const errorMessage = document.querySelector('.error-message');

	//store api link
	let url = 'https://uinames.com/api/?';


	if (country.value !== '' && gender.value !== '') {

		//add region and gender to link
		url += `region=${country.value}&gender=${gender.value}&`;

		//add amount to link
		url += `amount=${amount.value}`;
     
		//request api data
		apiCall(url);

	}else {
		
		//show error message
		errorMessage.style.visibility = 'visible';
		
		//hide error message
		setTimeout(function(){
			errorMessage.style.visibility = 'hidden';
		}, 1200)	
	};

}

function apiCall(url) {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

	xhr.onload = function () {

		if (this.status === 200) {

			//parse array object
			var parseArray = JSON.parse(this.responseText);

		}

	}

	xhr.send();

}


