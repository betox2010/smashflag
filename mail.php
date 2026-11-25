<?php 
	$destino = "smashflag@gmail.com";
	$destino2 = "registro@smashflag.com";
	$asunto = "Mensaje enviado desde Registro para Smash";
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$rama = $_POST['rama'];
	switch ($rama) { 
		case 0: 
		$rama_n = "Femenil"; 
		break; 
		case 1: 
		$rama_n = "Varonil";
		break; 
		case 2: 
		$rama_n = "Mixto"; 
		break;
		} 
	$mensaje = $_POST['mensaje'];
	$comentario = "Estos son los datos capturados de un nuevo registro:"."\n".
	"Nombre: ".$nombre."\n"."Correo: ".$correo."\n"."Teléfono: ".$telefono."\n"."Rama: ".$rama_n."\n"."Mensaje: ".$mensaje;

	$headers = 'From: '.$destino2."\r\n".
			   'Reply-To:'.$destino2."\r\n".
			   'Cc: '."\r\n".
			   'Bcc:informes@taba.com.mx'."\r\n".
			   'X-Mailer: PHP/'.phpversion();

	mail($destino, $asunto, $comentario, $headers);
	header( "Location: gracias.html" );

?>