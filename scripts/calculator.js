let buttons = document.getElementsByClassName('button');
let operators = document.getElementsByClassName('operator');
let screentop = document.querySelector('.screentop');
let screenbot = document.querySelector('.screenbot');
let equal = document.querySelector('.equal');
let result = 0; //new
let total = 0; //
firstoperand = '';
secondoperand = '';
let operator = '';
[...buttons].forEach((element) => {
	element.addEventListener('click', () => {
		func(element);
	})});
[...operators].forEach((element) => {
	element.addEventListener('click', () => {
		func(element);
    if (screentop.textContent.toString() === '') {screenbot.textContent = '';}
    if (screentop.textContent.toString() != '' && operator != '') {
      firstoperand = screenbot.textContent.toString().slice(1, -1);
      calculate();
    }
    if (operator != '') {operator = element.textContent.toString();}
    if (firstoperand != '') {

		} else {
      firstoperand = screenbot.textContent.toString().slice(0, -1);
			calculate();
		}
	});
});
equal.addEventListener('click', () => {
  calculate();
  screenbot.textContent = '';
});
let func = function (element) {
  if (screenbot.textContent === '0') {
    screenbot.textContent = '';
  }
	screenbot.textContent += element.textContent;
};//new
let calculate = function () {
  let myregex = /[-+×÷]/;
  if (screentop.textContent != '' && operator != '') {
    secondoperand = firstoperand;
    parseInt(screentop.textContent)
    if (operator[0] === '×') {
    result = (parseInt(screentop.textContent) * parseInt(secondoperand)).toFixed(5);
    } else if (operator[0] === '÷') {
    result = (parseInt(screentop.textContent) / parseInt(secondoperand)).toFixed(5);
    } else if (operator[0] === '+') {
    result = (parseInt(screentop.textContent) + parseInt(secondoperand)).toFixed(5);
    } else { 
    result = (parseInt(screentop.textContent) - parseInt(secondoperand)).toFixed(5);
    }
  } else {
    let calcarray = screenbot.textContent.split(myregex);// split with regex for any operator, then split by the operator, then if/else with different operators
    // to perform calcarr[0] +(or ayn other operator) calcarr[2]
    // if operator is clicked instead of an 'equal sign' use this --> calcstring.slice(0, -1); <-- before
    if (operator === '×') {
    result = (parseInt(calcarray[0]) * parseInt(calcarray[1])).toFixed(5);
    } else if (operator === '÷') {
    result = (parseInt(calcarray[0]) / parseInt(calcarray[1])).toFixed(5);
    } else if (operator === '+') {
    result = (parseInt(calcarray[0]) + parseInt(calcarray[1])).toFixed(5);
    } else { 
    result = (parseInt(calcarray[0]) - parseInt(calcarray[1])).toFixed(5);
    }}
  operator = '';
  firstoperand ='';
  screentop.textContent = result;
}
