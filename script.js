var buttons = document.getElementsByClassName('calculator-button');
var display = document.getElementById('screen-content');

var operand1 = '';
var operand2 = '';
var operator = '';

var buttonType = {
	"+": "operator",
	"-": "operator",
	"*": "operator",
	"/": "operator",
	"ac": "ac",
	"inv": "inv",
	"%": "%",
	"=": "=",
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		var value = this.getAttribute('data-value');
		if (buttonType[value] == '=') {
			operand2 = parseFloat(display.innerText);
			operand1 = eval(operand1 + " " + operator + ' ' + operand2);
			operand1 = (parseFloat(operand1) * 100).toFixed(0) / 100;
			display.innerText = operand1;
		}
		else if (buttonType[value] == 'operator') {
			operator = value;
			operand1 = parseFloat(display.innerText);
			display.innerText = '';
		}
		else if (buttonType[value] == 'ac') {
			display.innerText = '';
		}
		else if (buttonType[value] == 'inv') {
			if (display.innerText[0] == '-') {
				display.innerText = display.innerText.slice(1);
			}
			else {
				display.innerText = '-' + display.innerText;
			}
		}
		else if (buttonType[value] == '%') {
			var displayContent = parseFloat(display.innerText);
			displayContent /= 100;
			display.innerHTML = displayContent;
		}
		else {
			display.innerText += value;
		}
	});
}