<?php

echo password_hash("bluuwed", PASSWORD_DEFAULT)."\n";

$usuario_nuevo =  $_POST['nombre_usuario'];
$contrasena =  $_POST['contrasena'];
$contrasena2 =  $_POST['contrasena2'];

$contrasena =  password_hash($contrasena, PASSWORD_DEFAULT);

echo '<pre>';
var_dump($usuario_nuevo);
var_dump($contrasena);
var_dump($contrasena2);
echo '</pre>';

if (password_verify($contrasena2, $contrasena)) {
    echo '¡La contraseña es válida!<br>';

    include_once '../conexion.php';

    $sql_agregar = 'INSERT INTO usuarios (nombre,contrasena) VALUES (?,?)' ;
    $sentencia_agregar = $pdo->prepare($sql_agregar);
    if( $sentencia_agregar->execute(array($usuario_nuevo,$contrasena)) ){
         echo 'Agregado <br>';
    }else{
        echo 'ERROR <br>';
    }



} else {
    echo 'La contraseña no es válida.';
}