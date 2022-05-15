let buttons = document.getElementsByClassName('button');
let operators = document.getElementsByClassName('operator');
let screentop = document.querySelector('.screentop');
let screenbot = document.querySelector('.screenbot');
let equal = document.querySelector('.equal');
screenbot.textContent = '';
firstoperand = '';
secondoperand = '';
let operator = '';
let result = ''; //new
[...buttons].forEach((element) => {
	element.addEventListener('click', () => {
		appendchar(element);
	});
}); //buttons ready
[...operators].forEach((element) => {
	element.addEventListener('click', () => {
		if (result === '') {
			if (screenbot.textContent.length > 0) {
				if (firstoperand === '') {
					firstoperand = screenbot.textContent;
					operator = element.textContent;
					appendchar(element);
				} else {
					if (screenbot.textContent.length > firstoperand.length + 1) {
						secondoperand = screenbot.textContent.slice(
							firstoperand.length + 1
						);
						calculate();
						operator = element.textContent;
						screenbot.textContent = '';
						appendchar(element);
					}
				}
			}
		} else {
			if (screenbot.textContent.length > 1) {
				secondoperand = screenbot.textContent.slice(1);
				calculate();
				operator = element.textContent;
				screenbot.textContent = '';
				appendchar(element);
			} else if (screenbot.textContent === '') {
				appendchar(element);
				operator = element.textContent;
			}
		}
	});
});
equal.addEventListener('click', () => {
	if (result === '') {
		secondoperand = screenbot.textContent.slice(firstoperand.length + 1);
		operator = screenbot.textContent.match(/[-+÷×]/).toString();
		calculate();
		screenbot.textContent = '';
		operator = '';
	} else {
		if (screenbot.textContent.length > 1) {
			secondoperand = screenbot.textContent.slice(1);
			operator = screenbot.textContent.match(/[-+÷×]/).toString();
			calculate();
			screenbot.textContent = '';
			operator = '';
		}
	}
});
let appendchar = function (element) {
	//appendchar ready
	if (screenbot.textContent === '0') {
		screenbot.textContent = '';
	}
	screenbot.textContent += element.textContent;
}; //new
let calculate = async function () {
	//calc ready
	if (operator === '×') {
		result = parseFloat((parseFloat(firstoperand) * parseFloat(secondoperand)).toFixed(5));
	} else if (operator === '÷') {
		result = parseFloat((parseFloat(firstoperand) / parseFloat(secondoperand)).toFixed(5));
	} else if (operator === '+') {
		result = parseFloat((parseFloat(firstoperand) + parseFloat(secondoperand)).toFixed(5));
	} else {
		result = parseFloat((parseFloat(firstoperand) - parseFloat(secondoperand)).toFixed(5));
	}
	if (isNaN(result)) {
		firstoperand = firstoperand;
	} else firstoperand = result;
	screentop.textContent = firstoperand;
};
