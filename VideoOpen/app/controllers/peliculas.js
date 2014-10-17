var args = arguments[0] || {};

function buscar() {
	var txtBuscar = $.sbBuscar.value.trim();
	if(txtBuscar !== '') {
		var cliente = new (require("filmClient")).filmClient();
		cliente.getCine(txtBuscar, function(lista) {
			if(lista === -1) {
				alert("Error al cargar las películas");
			} else {
				for(var p in lista.movies) {
					Ti.API.info(lista.movies[p].title);
				}
			}
		});
	}
}
