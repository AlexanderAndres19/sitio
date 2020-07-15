//configuración personal de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBvSrgVBQS61SixeHR4UHjXWAe-ETyoPDc",
authDomain: "elite-thunder-194318.firebaseapp.com",
projectId: "elite-thunder-194318"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

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

//Leer documentos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
      tabla.innerHTML += `
      <tr>
      
      <td>${doc.data().first}</td>
      <td>${doc.data().last}</td>
      <td>${doc.data().direccion}</td>
      <td>${doc.data().telefono}</td>
      <td>${doc.data().born}</td>
      <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
      </tr>
      `
  });
});

//borrar documentos
function eliminar(id){
  db.collection("users").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//editar documentos
function editar(id,nombre,apellido,fecha){

  document.getElementById('nombre').value = nombre;
  document.getElementById('apellido').value = apellido;
  document.getElementById('fecha').value = fecha;
  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';

  boton.onclick = function(){
      var washingtonRef = db.collection("users").doc(id);
      // Set the "capital" field of the city 'DC'

      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var fecha = document.getElementById('fecha').value;

      return washingtonRef.update({
          first: nombre,
          last: apellido,
          born: fecha
      })
      .then(function() {
          console.log("Document successfully updated!");
          boton.innerHTML = 'Guardar';
          document.getElementById('nombre').value = '';
          document.getElementById('apellido').value = '';
          document.getElementById('fecha').value = '';
      })
      .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
  }
}




