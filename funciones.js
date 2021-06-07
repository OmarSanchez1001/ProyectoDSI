let Zoom1 = "125%";
let Zoom2 = "75%";
let Zoom3 = "100%";

alert("Si es la primera vez que ingresa, favor de presionar el botón con el signo de pregunta");
alert("Si no es asi, omita este mensaje");
alert("Zoom recomendado para la visualización de la página: " + Zoom1);

function Bienvenida(){
alert("Hola");
alert("Aquí se encuentran los trabajos correspondientes al proyecto de la materia de Diseño de Sistemas en Internet");
alert("Este proyecto fue creado por Sánchez Vargas Omar");
alert("Espero que sea de su agrado");
}

function Mensaje(){
	alert("Aqui hay un detalle");
	alert("No se ve del todo mal, pero tampoco está del todo bien");
	alert("Hubo percances a la hora de realizarlo");
	alert("Para una mejor visualización, tiene que ponerse el Zoom al 67% y con el panel de herramientas para desarrolladores activado");
	Mensaje2();
}

function Mensaje2(){
	alert("PD. Si el botón no manda a la página, intente dar Click exactamente en el nombre de la actividad");
}

function Mensaje3(){
	Mensaje2();
	alert("Zoom recomendado para la vista actual de la pagina: " + Zoom1);
}

function Mensaje4(){
	Mensaje2();
	alert("Zoom recomendado para la visualizacion de la página: " + Zoom2);
}

function Mensaje5(){
	Mensaje2();
	alert("Zoom recomendado para la visualizacion de la página: " + Zoom3);
}