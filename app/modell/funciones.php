<?php
class funciones_bd{
	
	function __construct(){
		require_once '../connect/conexionbd.php';
		$this->db = new conexion();
	}
	public function mostrar_datos(){
		$stmt = $this->db->connect()->query("select * from registro");
		$datos = array();
		while($fila = $stmt->fetch(PDO::FETCH_ASSOC)){
			$datos[] = $fila;
			//return $datos;
		}
		return $datos;
	}

	public function get($id){
		

	}

	public function login(usuario,contrasenia){



	}





}
?>