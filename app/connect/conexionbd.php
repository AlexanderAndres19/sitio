<?php
class conexion{
	public function connect(){
		require_once '../config.php';
		
		$dsn = DB_HOST;
		$usuario = DB_USER;
		$password = DB_PASSWORD;
		try
		{
			$db = new PDO($dsn,$usuario,$password);
			return $db;
		}
		catch(PDOException $e){
			echo 'Falló la conexión'. $e->getMessage();
		}
	}
}
?>