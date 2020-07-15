function registrar(){
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(){
        verficar()
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function ingreso(){
    
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;
    
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo')
            aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          
          var email = user.email;
          
          console.log('*****************');
          console.log(user.emailVerified)
          console.log('*****************');
          
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
          indez.innerHTML = `
          <section class="container-fluid slider d-flex justify-content-center align-items-center">
          <h1 class="display-4"></h1>
        </section>
        
     
        <section class="container my-5 py-5">  <h3 class="text-uppercase text-center mb-4">Bienvenidos a OKCASA</h3>
          <p class="lead text-center mb-5">OKCasa se dedica a la inspección de propiedades nuevas, con el fin de garantizar que los propietarios las reciban en perfectas condiciones y hagan valer las garantías asociadas a su compra. Resguardando la seguridad de tu familia y el valor de la inversión.</p></section>
      
      
        <!-- START THE FEATURETTES -->
      
        <div class="container my-5">
          <hr class="">
          <h3 class="text-uppercase text-center mb-4">Nosotros</h3>
          <div class="row d-flex align-items-center my-5 py-5">
            <div class="col-md-7">
              <h2 class="display-4">Inspección de instalaciones sanitarias y gas.<span class="text-muted"></span></h2>
              <p class="lead">Posee una amplia experiencia, adquirida durante años de ejercicio profesional, lo que le permite brindar un servicio de calidad, rápido y eficiente.</p>
            </div>
            <div class="col-md-5">
              <img class=" img-fluid mx-auto" src="images/FONDO4R.jpg" alt="Generic placeholder image">
            </div>
          </div>
          
          <hr class="">
          
          <div class="row d-flex align-items-center my-5 py-5">
            <div class="col-md-7 push-md-5">
              <h2 class="display-4">Medición de metros cuadrados de la vivienda.<span class="text-muted"></span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5 pull-md-7">
              <img class=" img-fluid mx-auto" src="images/FONDO5R.jpg" alt="Generic placeholder image">
            </div>
          </div>
          
          <hr class="">
          
          <div class="row d-flex align-items-center my-5 py-5">
            <div class="col-md-7">
              <h2 class="display-4">Inspección de instalaciones electricas. <span class="text-muted"></span></h2>
              <p class="lead">Posee una amplia experiencia, adquirida durante años de ejercicio profesional, lo que le permite brindar un servicio de calidad, rápido y eficiente.</p>
            </div>
            <div class="col-md-5">
              <img class=" img-fluid mx-auto" src="images/FONDO3R.jpg" alt="Generic placeholder image">
            </div>
          </div>
          
          
        </div>
        
        `;
        
          servicio.innerHTML = `
          

          `;
        }
      });
}
observador();

function aparece(user){
    var user = user;
    var contenido = document.getElementById('contenido');
    if(user.emailVerified){
        contenido.innerHTML = `
      
        <button class="btn btn-outline-danger mx-2" onclick="cerrar()">Cerrar sesión</button> 

        `;
        contenido2.innerHTML = `
        <section class="container my-8">
        <div class="row">
            <div class="col-md-6 ">
              <h1>Registrar servicio</h1>
                <div class="card-body first">
                    
                      
                      
                      <input type="text" id="nombre" placeholder="nombre" class="form-control my-3">
                      <input type="text" id="apellido" placeholder="apellido" class="form-control my-3">
                      <input type="text" id="direccion" placeholder="direccion" class="form-control my-3">
                      <input type="text" id="telefono" placeholder="telefono" class="form-control my-3">
                      <input type="text" id="fecha" placeholder="fecha" class="form-control my-3">
                      
                      
                      
                      <button class="btn btn-info my-3" id="boton" HTMLButtonElement.onclick="guardar()">Guardar</button>
                      
                    </div>
                  
                     
    
    
    
    
    
    
    
                  
                
              </div>
    
              <section class=" col-md-6" >
                <div class="container my-5 py-5 ">
              <div class="card-header first ">
                <div class="card-body">
                     
           <div class="container ">
            <div class="row ">
                <div class="col-lg-12">
                <div class="card shadow-lg p-2 mb-5 bg-white  ">
                     <div class="card-header second">Realiza el pago del servicio seleccionado </div>
                    <div class="card-body ">
                      <div class="modal-footer justify-content-center">
                        
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                          <input type="hidden" name="cmd" value="_s-xclick">
                          <input type="hidden" name="hosted_button_id" value="B57FVTEQ7RXT8">
                          <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                          <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
                          </form>
                        
                      </div>
    
                </div>
              </div>
            </div>
              </section>
        </div>
       </section> 
        `;




    } 




}


//Agregar documentos
function guardar(){
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var fecha = document.getElementById('fecha').value;

  db.collection("users").add({
      first: nombre,
      last: apellido,
      born: fecha,
      direccion: direccion,
      telefono: telefono,

  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('direccion').value = '';
      document.getElementById('telefono').value = '';
      document.getElementById('fecha').value = '';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}

function verficar(){
    var user = firebase.auth().currentUser;  
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log('Enviando correo...');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    }); 
}