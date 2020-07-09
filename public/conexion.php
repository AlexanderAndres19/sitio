<?php
//*******EJEMPLO DE CONEXION A MYSQL***** */
// $mbd = new PDO('mysql:host=localhost;dbname=prueba', $usuario, $contraseña);
$link = 'mysql:host=127.0.0.1;dbname=okcasa';
$usuario = 'root';
$pass = '';

try {
    $pdo = new PDO($link, $usuario, $pass);

    
    echo 'Conenctado <br>'; 
    
   } catch (PDOException $e) {
    print "¡Error!: IM BE CIL  " . $e->getMessage() . "<br/>";
    die();
}