let buttons = document.getElementsByClassName('button');
let screen = document.querySelector('.screen');
[...buttons].forEach((element) => {
	element.addEventListener('click', () => {
		func(element);
	});
});
let func = function (element) {
  if (screen.textContent === '0') {
    screen.textContent = '';
  }
	screen.textContent += element.textContent;
};
