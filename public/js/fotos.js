var config = {
    apiKey: "AIzaSyACg2z3JQODfTcOfIl97_uUhQkGtWJJJaI",
    authDomain: "x-app-a4675.firebaseapp.com",
    databaseURL: "https://x-app-a4675.firebaseio.com",
    projectId: "x-app-a4675",
    storageBucket: "x-app-a4675.appspot.com",
    messagingSenderId: "657424766858"
  };
  firebase.initializeApp(config);


var authService = firebase.auth();
var storageService = firebase.storage();

 window.onload = function() {
    
      authService.signInAnonymously()
        .catch(function(error) {
          console.error('Detectado error de autenticación', error);
        });

      
      document.getElementById('campoarchivo').addEventListener('change', function(evento){
        evento.preventDefault();
        var archivo  = evento.target.files[0];
        subirArchivo(archivo);
      });
    }

    function subirArchivo(archivo) {
      
      var refStorage = storageService.ref('micarpeta').child(archivo.name);
     
      var uploadTask = refStorage.put(archivo);

     
      uploadTask.on('state_changed', null,
        function(error){
          console.log('Error al subir el archivo', error);
        },
        function(){
          console.log('Subida completada');
          mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
        }
      );
    }




/*var file = ... // use the Blob or File API
ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});*/
