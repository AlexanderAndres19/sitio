<?php
//*******EJEMPLO DE CONEXION A MYSQL***** */
// $mbd = new PDO('mysql:host=localhost;dbname=prueba', $usuario, $contraseña);
$link = 'mysql:host=127.0.0.1;dbname=okcasa';
$usuario = 'root';
$contraseña = '';

try {
    $pdo = new PDO($link, $usuario, $contraseña);

     foreach($pdo->query('SELECT * FROM `usuarios`') as $fila) {
         print_r($fila);
     }
    
   } catch (PDOException $e) {
    print "¡Error!: IM BE CIL  " . $e->getMessage() . "<br/>";
    die();
}