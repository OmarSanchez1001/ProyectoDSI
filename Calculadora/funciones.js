let p1 = document.getElementById('P1');
let p2 = document.getElementById('P2');

function Agregar(num){
	p1.innerHTML += num
	Calcular();
}

function Calcular(){
	p2.innerHTML = eval(p1.innerHTML);
}

function Borrar(){
	p1.innerHTML = "";
	p2.innerHTML = "";
}

function Resultado(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = "";
}

function Light(){
	calculadora.classList.remove('Dark');
	calculadora.classList.add('Light');
	
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	p2.classList.remove('tclaro');
	p2.classList.add('toscuro');
	document.querySelector('#B_A').classList.add('activo');
	document.querySelector('body').classList.add('claro');
	document.querySelector('#B_B').classList.remove('activo');
	document.querySelector('body').classList.remove('oscuro');
	document.querySelector('.Calculadora-alto').classList.remove('claro');
	document.querySelector('.Calculadora-alto').classList.add('oscuro');
	document.querySelector('.Calculadora-bajo').classList.add('gris');
	document.querySelector('.Calculadora-bajo').classList.remove('claro');
	document.querySelector('#calculadora').classList.remove('claro');
	document.querySelector('#calculadora').classList.add('oscuro');
}

function Dark(){
	calculadora.classList.remove('Light');
	calculadora.classList.add('Dark');

	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	p2.classList.remove('toscuro');
	p2.classList.add('tclaro');
	document.querySelector('#B_A').classList.remove('activo');
	document.querySelector('body').classList.add('oscuro');
	document.querySelector('#B_B').classList.add('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('.Calculadora-alto').classList.remove('oscuro');
	document.querySelector('.Calculadora-alto').classList.add('claro');
	document.querySelector('.Calculadora-bajo').classList.add('gris');
	document.querySelector('.Calculadora-bajo').classList.remove('oscuro');
	document.querySelector('#calculadora').classList.remove('oscuro');
	document.querySelector('#calculadora').classList.add('claro');
}