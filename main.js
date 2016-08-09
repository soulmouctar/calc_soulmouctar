var operator; //currnet operator
var leftOperand=0;
var rightOperand=0;
var memory='0';
var result=memory;
var isOperatorJustClicked=false;

var screen= document.getElementsByTagName('span')[0];
console.log(screen);

var buttons= document.getElementsByTagName('button');
for (var i = 0; i<buttons.length; i++) {
	var btn=buttons[i];
	btn.onclick=function(){
		var btnText=this.innerText;
		switch(btnText){
		/*zone numérique */
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if(memory==='0')
						memory='';
					if(isOperatorJustClicked)
						memory='';
					memory+=btnText;
					isOperatorJustClicked=false;
			break;
			/* zone opérateurs */
			case '/':
			case '*':
			case '-':
			case '+':					
				operator=btnText;
				leftOperand=memory;
				isOperatorJustClicked=true;
			break;
			/* zone action */
			case 'C':
				operator='';
				memory='0';
				leftOperand=0;
				rightOperand=0;
				isOperatorJustClicked=false;
			break;
			case '=':
				rightOperand=memory;
				result=process(operator,leftOperand,rightOperand);
				memory=result;
			break;
		}
		screen.innerText=memory;
	};
}

function process(operator,leftOperand,rightOperand){
	leftOperand=parseInt(leftOperand);
	rightOperand=parseInt(rightOperand);
	var result;
	switch(operator){
		case '/':
			result=(leftOperand/rightOperand);
		break;
		case '*':
			result=(leftOperand*rightOperand);
		break;
		case '-':
			result=(leftOperand-rightOperand);
		break;
		case '+':
			result=(leftOperand+rightOperand);
		break;
		default:
		result=rightOperand;
	}
	return result;
}



//console.log(buttons.length);