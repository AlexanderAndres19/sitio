<?php
$opcion_wbs = $_REQUEST['id_wbs'];
$token = $_REQUEST['token'];
switch($opcion_wbs)
{
 case "1":
		if($token == "123")
		{
				require_once '../modell/funciones.php';
				$consultar = new funciones_bd();
				$resultado = $consultar->mostrar_datos();
				echo json_encode($resultado);
			
		}
			break;

case "2":


}












?>