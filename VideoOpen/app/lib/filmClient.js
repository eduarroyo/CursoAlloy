function filmClient() {
	this.getCine = function(busqueda, callback) {
 		var request = Ti.Network.createHTTPClient();
		var lista;
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=646z6btmesx3mcaaxjtw35x2&q=" + busqueda;
 
		// Si el servicio web no responde en 10 segundos nos dará error de Timeout.
		request.setTimeout(10000);
		
		// Hacemos el GET al servicio web.
		request.open("GET", url);
		
		// Se gestiona la recepción del JSON.
		request.onload = function() {
			var json = this.responseText;
			// Parseamos el JSON de respuesta
			lista = JSON.parse(json);
	 		callback(lista); 
	 	};
 
		// Se gestiona en caso de error.
		request.onerror = function(e) {
			var a = Ti.UI.createAlertDialog();
			a.message = 'Error en conexión';
			a.title = 'Atencion';
			a.show();
			callback(-1);
		};

		// Se envía.
		request.send();
	};
	
	// Otras posibles acciones del cliente contra el servicio:
	// this.nuevaCritica = function(datosPelicula, callback) {}
	// ...
}

exports.filmClient = filmClient;