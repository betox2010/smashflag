// JavaScript Document

function valida_Formulario(){
//Comentario de lìnea sencilla ---> Dentro de corchetes son las instrucciones que forman parte de la funciòn y se ejecutaràn en el llamado de la misma (funciòn)
	//alert("Mensaje de Bienvenida a Sitio Web");
	if(document.getElementById("nombre").value ==""){
		alert("El campo 'Nombre' es requerido"); 
	//.value - Obtiene el valor de ese campo, con =="" se comparan valores, .getElementById sirve para acceder al documento y tomar el elemento indicado dentro de los parèntesis
	 document.getElementById("nombre").focus();//Te posiciona en la ventana del campo que no està rellenado 
	 return false; //Sirve para que "cicle" la validaciòn en tanto la condiciòn no se cumpla
 }
	 
else if(document.getElementById("correo").value ==""){
	 alert("El campo 'Correo' es requerido");
	 document.getElementById("correo").focus();
	 return false; 
	 }
	 
else if(document.getElementById("telefono").value ==""){
	 alert("El campo 'Teléfono' es requerido");
	 document.getElementById("telefono").focus();
	 return false; 
	 }
else if(document.getElementById("rama").value ==""){
	 alert("El campo 'Rama' es requerido");
	 document.getElementById("rama").focus();
	 return false; 
	 } 

}

	
function validaSoloTexto(cadena){
		var patron = /^([a-z ñáéíóú]{2,60})$/i;
		if(cadena.value.match(patron)){
			return true;
		}
		else{
			alert("El campo sólo acepta letras");
			cadena.value="";
			return false;
			}
	}
	

function validaEmail(cadena){
	var input = document.getElementById("correo").value;
	var emailExpReg = /^(.+\@.+\..+)$/;
	if(input.match(emailExpReg)){
		return true;
		}
		else{
			alert("El correo no es válido");
			document.getElementById("correo").value="";
			return false;
			}
	}

function validaTelefono(cadena){
	var patron = /^\d{10}$/;
	if (cadena.value.match(patron)){
		return true;
		}
		else{
			alert("Debes capturar un teléfono válido");
			cadena.value="";
			return false;
			}
	}
