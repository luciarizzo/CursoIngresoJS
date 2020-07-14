/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var suma;
	var datoUno;
	var datoDos;
	
	datoUno = txtIdNumeroUno.value;
	datoDos = txtIdNumeroDos.value;

	datoUno = parseInt(datoUno);
	datoDos = parseInt(datoDos);

	suma = datoUno + datoDos;

	alert(suma);
	
}

