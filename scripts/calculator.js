let buttons = document.getElementsByClassName('button');
let screentop = document.querySelector('.screentop');
let screenbot = document.querySelector('.screenbot');
let equal = document.querySelector('.equal');
let result = 0; //new
[...buttons].forEach((element) => {
	element.addEventListener('click', () => {
		func(element);
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
  let operator = screenbot.textContent.match(myregex);
  let calcarray = screenbot.textContent.split(myregex);// split with regex for any operator, then split by the operator, then if/else with different operators
  // to perform calcarr[0] +(or ayn other operator) calcarr[2]
  // if operator is clicked instead of an 'equal sign' use this --> calcstring.slice(0, -1); <-- before
  if (operator[0] === '×') {
    result = parseInt(calcarray[0]) * parseInt(calcarray[1]);
  } else if (operator[0] === '÷') {
    result = (parseInt(calcarray[0]) / parseInt(calcarray[1])).toFixed(5);
  } else if (operator[0] === '+') {
    result = parseInt(calcarray[0]) + parseInt(calcarray[1]);
  } else { 
    result = parseInt(calcarray[0]) - parseInt(calcarray[1]);
  }
  screentop.textContent = result;
}
