/*============================================================================*/
// Initialize appvar myApp = new Framework7();
/*============================================================================*/
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
/*============================================================================*/
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'SmartDrive',
    // App id
    id: 'com.SmartDrive.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [{
                path: '/index/',
                url: 'index.html',
            },
            {
                path: '/about/',
                url: 'about.html',
            },
            {
                path: '/detallesApp/',
                url: 'detallesApp.html',
            },
            {
                path: '/mainMenu/',
                url: 'mainMenu.html',
            },
            {
                path: '/mapGPS/',
                url: 'mapGPS.html',
            },
            {
                path: '/selectProfile/',
                url: 'selectProfile.html',
            },
            {
                path: '/dataProfile/',
                url: 'dataProfile.html',
            },
            {
                path: '/camera/',
                url: 'camera.html',
            },
            {
                path: '/config/',
                url: 'config.html',
            },
            {
                path: '/registerUser/',
                url: 'registerUser.html',
            },
            {
                path: '/dataMaintenance/',
                url: 'dataMaintenance.html',
            },
        ]
        // ... other parameters
});
/*[Variables]===================================================================[Globales]*/
/*=============================================================[selectProfile]*/
var cantProfile = 1; // Utilizada para establecer la cantidad de perfiles creado.
var numberPerfilName = 1; // Utilizada para generar los perfiles nuevamente al regresar.
/*=============================================================[selectProfile]*/

/*[Functions]===================================================================[selectProfile]*/
function addProfile(name) { /* Agrega un perfil al menu de seleccion */

    // Declaracion de variables:
    // createElement: crear elementos dentro del DOM.
    // classList: usados para agregar clases a los elementos generados.
    var li = document.createElement("li");
    li.classList.add("swipeout");

    var div = document.createElement("div");
    div.classList.add("swipeout-content");

    var a = document.createElement("a");
    a.classList.add("item-link");
    a.classList.add("item-content");
    a.classList.add("elevation-8");
    a.classList.add("backgroundButton");
    a.classList.add("reDirec");

    var divB = document.createElement("div");
    divB.classList.add("item-media");
    divB.classList.add("textBlack");

    var img = 0;

    var divC = document.createElement("div");
    divC.classList.add("item-inner");

    var divD = document.createElement("div");
    divD.classList.add("item-title-row");

    var divE = document.createElement("div");
    divE.classList.add("item-title");
    divE.classList.add("textBlack");

    var divF = document.createElement("div");
    divF.classList.add("item-subtitle");
    divF.classList.add("textBlack");
    divF.classList.add("elevation-16");

    // Ubicar contenido dentro del id: add
    var addDoc = document.getElementById("add");
    var addDocLi = addDoc.appendChild(li); // ADD: li
    // Combinar elementos generados:
    var addDocLiDiv = addDocLi.appendChild(div);
    var addDocLiDivA = addDocLiDiv.appendChild(a);
    var addDocLiDivAB = addDocLiDivA.appendChild(divB);
    var addDocLiDivABC = addDocLiDivA.appendChild(divC);
    var addDocLiDivABCD = addDocLiDivABC.appendChild(divD);
    var addDocLiDivABCDE = addDocLiDivABCD.appendChild(divE);

    // ADD: swipeout
    var addDocLiDivABCDEF = addDocLiDivABCDE.appendChild(divF);
    // Añadir texto al DOM:
    addDocLiDivABCDE.innerHTML = "Perfil N°"+name;
    addDocLiDivABCDEF.innerHTML = "Vehiculo"; // Dentro de divF: item-subtitle

    // ADD: swipeout-actions-right:
    var divG = document.createElement("div");
    divG.classList.add("swipeout-actions-right");
    // Accion de eliminar contenido generado:
    var ab = document.createElement("a");
    ab.classList.add("swipeout-delete");
    ab.classList.add("accionDelete");
    ab.innerHTML = "Delete";

    // Combinar elementos:
    var addDocLiG = addDocLi.appendChild(divG);
    var addDocLiGab = addDocLiG.appendChild(ab);
    console.log("Perfil N°"+cantProfile);
} // End function: addProfile

/*[Functions]===================================================================[mapGPS]*/
function loadMap() { // Funcion: cargar mapas

    // Metodos de mapa:
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        console.log(
            'Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    // Initialize the platform object:
    var platform = new H.service.Platform({
        'apikey': 'ZIu78l5orD4Wbby2tfBe75FmtrDgUyqo25kLXU_Q6rA'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map, {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
        });
} // End function: loadMap

/*[Functions]===================================================================[mainMenu]*/
var ac6 = app.actions.create({ // Usada para las interacciones del menu
    grid: true,
    buttons: [
        [{
                text: 'Informes',
                icon: '<a href="/dataProfile/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconInf.ico" height="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'

            },
            {
                text: 'Mantenimientos',
                icon: '<a href="/dataMaintenance/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconMant.ico" height="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'
            },
            {
                text: 'Navegacion',
                icon: '<a href="/mapGPS/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconGPS.ico" width="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'
            },
        ],
        [{
                text: 'Ajustes',
                icon: '<a href="/config/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconConfig.ico" width="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'
            },
            {
                text: 'Perfiles',
                icon: '<a href="/selectProfile/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconLogo.png" height="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'
            },
            {
                text: 'Cerrar sesion',
                icon: '<a href="/index/" data-view=".page-content">' + '<i class="f7-icons"><img src="image/iconExit.ico" height="48" alt="details"></i>' + '<span class="ios-only">info_round</span></a>'
            },
        ]
    ]
});

/*[Event]=======================================================================[deviceReady]*/
var mainView = app.views.create('.view-main');
/*============================================================================*/
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    // Ocultar barra de progreso:
    $$('#progress').css('display', 'none');
    $$('#progress').css('visibility', 'hidden');
    console.log("The app is v0.0.9!");
});
/*[Event]=======================================================================[mainMenu]*/
$$(document).on('page:init', '.page[data-name="mainMenu"]', function(e) { // Inicializador:
    console.log("Load mainMenu complete!");
    $$('.ac-6').on('click', function() {
        ac6.open();
    });
}); // ; añadido recientemente
/*[Event]=======================================================================[selectProfile]*/
$$(document).on('page:init', '.page[data-name="selectProfile"]', function(e) { // Inicializador:
  var gen = 0; // Variable utilizada para IDentar los perfiles
  // Generador de perfiles:
  for (var i = 0; i < cantProfile; i++) {
    gen+=1;
    addProfile(gen);
  }
    // Click en añadir usuarios:
    $$('.addUser').on('click', function() { // Agregar usuarios al menu
      cantProfile = cantProfile+1;
      numberPerfilName+=1;
      addProfile(numberPerfilName);
      app.dialog.alert('Perfil creado exitosamente!');
    }); //  Fin de metodo on

    $$('.accionDelete').on('click', function() { // Quitar usuarios al menu
      cantProfile = cantProfile-1;
      console.log(cantProfile);
    });

    // Redireccionar al perfil seleccionado:
    $$('.reDirec').attr('href', '/mainMenu/');
    console.log("Load selectProfile complete!");
}); // Fin de funciones de selectProfile
/*[Event]=======================================================================[dataProfile]*/
$$(document).on('page:init', '.page[data-name="dataProfile"]', function(e) { // Inicializador:
  //============================================================================
  // Agregar datos usando iteracciones:                [INFORMACION DE VEHICULO]
  //============================================================================
  $$('#marca').on('click', function () {
    app.dialog.prompt('Ingrese la marca de su vehiculo:', function (name) {
      console.log(name);
      app.dialog.alert('Marca '+name+' añadida!');
      // Agregar marca:
      $$("#marca").text(name);
    });
  });
  //============================================================================
  $$('#modelo').on('click', function () {
    app.dialog.prompt('Ingrese el modelo de su vehiculo:', function (name) {
      console.log(name);
      app.dialog.alert('Modelo '+name+' añadido!');
      // Agregar marca:
      $$("#modelo").text(name);
    });
  });
//============================================================================
  $$('#año').on('click', function () {
    app.dialog.prompt('Ingrese el año de fabricacion de su vehiculo:', function (name) {
      console.log(name);
      var numero = parseInt(name);

      if(!(isNaN(numero))){
        app.dialog.alert('Año de fabricacion ('+name+') añadido!');
        // Agregar marca:
        $$("#año").text(name);
      }
      else{
        app.dialog.alert('El dato '+name+' no es un numero!');
      }
    });
  });
  //============================================================================
  $$('#matricula').on('click', function () {
    app.dialog.prompt('Ingrese la matricula de su vehiculo:', function (name) {
      console.log(name);
      app.dialog.alert('Matricula '+name+' añadida!');
      // Agregar marca:
      $$("#matricula").text(name);
    });
  });
  //============================================================================
  $$('#deposito').on('click', function () {
    app.dialog.prompt('Ingrese la cantidad de Km recorridos de su vehiculo:', function (name) {
      console.log(name);
      var numero = parseInt(name);

      if(!(isNaN(numero))){
        app.dialog.alert('Dato añadido!');
        // Agregar marca:
        $$("#deposito").text(name);
      }
      else{
        app.dialog.alert('El dato '+name+' no es un numero!');
      }
    });
  });
  //============================================================================
  $$('#odometro').on('click', function () {
    app.dialog.prompt('Ingrese la cantidad de Km recorridos de su vehiculo:', function (name) {
      console.log(name);
      var numero = parseInt(name);

      if(!(isNaN(numero))){
        app.dialog.alert('Dato añadido!');
        // Agregar marca:
        $$("#odometro").text(name);
      }
      else{
        app.dialog.alert('El dato '+name+' no es un numero!');
      }
    });
  });
  //============================================================================
  // Agregar datos usando iteracciones:         [ABASTECIMIENTO DE COMBUSTIBLE]
  //============================================================================
  $$('#recarga').on('click', function () {
    app.dialog.prompt('Ingrese la cantidad de litros:', function (name) {
      console.log(name);
      var numero = parseFloat(name);

      if(!(isNaN(numero))){
        app.dialog.alert('Dato añadido!');
        app.dialog.alert('Es recomendado que ingrese el precio de la recarga'+
        ' para un correcto funcionamiento del sistema!');
        // Agregar marca:
        $$("#recarga").text(name);

        app.dialog.prompt('Ingrese el costo de la recarga:', function (costo) {
          console.log(costo);
          var numero = parseFloat(costo);

          if(!(isNaN(numero))){
            app.dialog.alert('Dato añadido!');
            // Agregar marca:
            $$("#precio").text(costo);
          }
          else{
            app.dialog.alert('El dato '+costo+' no es un numero!');
          }
        });
      }
      else{
        app.dialog.alert('El dato '+name+' no es un numero!');
      }
    });

  });
  //============================================================================
  $$('#precio').on('click', function () {
    app.dialog.prompt('Ingrese el costo de la recarga:', function (name) {
      console.log(name);
      var numero = parseFloat(name);

      if(!(isNaN(numero))){
        app.dialog.alert('Dato añadido!');
        // Agregar marca:
        $$("#precio").text(name);
      }
      else{
        app.dialog.alert('El dato '+name+' no es un numero!');
      }
    });
  });
  //============================================================================
  console.log("Load dataProfile complete!");
});
/*[Event]=======================================================================[mapGPS]*/
$$(document).on('page:init', '.page[data-name="mapGPS"]', function(e) { // Inicializador:
    // Invocacion de mapa:
    loadMap();
    console.log("Load mapGPS complete!");
});
