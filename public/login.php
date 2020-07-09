<?php

include_once 'conexion.php';

$sql_leer = 'SELECT * FROM usuarios';

$gsent = $pdo->prepare($sql_leer);
$gsent->execute();

$eresultado = $gsent->fetchAll();

var_dump($eresultado);


?>


<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Okcasa</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Estilos en Css -->
    <style>
      .slider{
        background: url("images/bg-1.jpg");
        height: 100vh;
        background-size: cover;
        background-position: center; 
      }
    </style>

        
  </head>
  <body>
  <!-- imagen principal -->

 
  
  <!-- fin imagen principal
 
  <!-- menú de navegación -->
  <nav class="navbar navbar-inverse bg-inverse navbar-toggleable-sm sticky-top">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.html">
    <img src="images/logoPng.png" width="60" height="50" class="d-inline-block align-top" alt="Logo Bootstrap">
  
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div class="navbar-nav mr-auto ml-auto text-center">
      <a class="nav-item nav-link active" href="index.html">Inicio</a>
      <a class="nav-item nav-link" href="#">Nosotros</a>
      <a class="nav-item nav-link" href="servicios.html">Servicios</a>
      <a class="nav-item nav-link" href="#">Contacto</a>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <a href="#" class="btn btn-outline-primary mr-2">Iniciar sesion</a>
      <a href="" class="btn btn-outline-danger">registrate</a>
    </div>
    </div>
  </nav>
  <!-- fin menú de navegación -->
  
  
 
  



























  
  <!-- Formulario 1 -->
  <section class="container-fluid slider d-flex justify-content-center align-items-center"> 
  <div class=""
    <section class="container py-5 mt-5">
      <h4 class="text-uppercase text-center mb-4 pt-5 text-white">Iniciar sesion</h3>
            
          <form method="POST" action="" class=" flex-column flex-md-row justify-content-center">
          
                <div class="form-group mx-3 my-3">
                  <label for="" class="mx-3 text-white">Email:</label>
                  <input type="email" placeholder="Escribe tu email" autofocus class="form-control">
                </div>
                <div class="form-group mx-3 my-3">
                  <label for="" class="mx-3 text-white">Contraseña:</label>
                  <input type="password" placeholder="Escribe tu email" autofocus class="form-control">
                </div>
            <div class="form-group mx-3 my-3">
              <button  type="submit" name="submit" value="logear" class="btn btn-primary">Iniciar Sesion</button>
            </div>
          </form>
    </section>
  </section>
  </div>

  <!-- fin Formulario 1 -->














  
  <!-- Footer -->
  <footer class=class="container-fluid slider d-flex justify-content-center align-items-center">
    <div class="row text-white py-4 text-white">
        <div class="col-md-3">
        <h4 class="lead">Síguenos</h4>
        <a href="#"><span class="badge badge-primary">Facebook</span></a>
        <a href="https://www.youtube.com/watch?time_continue=3&v=HSf9dCcnGnE&feature=emb_logo"><span class="badge badge-danger">Youtube</span></a>
      </div>
      <div class="footer-copyright py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">AAHM</a>
      </div>
      <!-- Copyright -->
    </div>
  </footer>
  <!-- Fin Footer -->
    
      
    
    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>