var args = arguments[0] || {};

function buscar() {
	var txtBuscar = $.sbBuscar.value.trim();
	if(txtBuscar !== '') {
		var cliente = new (require("filmClient")).filmClient();
		var data = [];
		$.tvPeliculas.data = [];
		cliente.getCine(txtBuscar, function(lista) {
			if(lista === -1) {
				alert("Error al cargar las películas");
			} else {
				for(var i = 0; i < lista.movies.length; i++) {
					//Ti.API.info(lista.movies[p].title);
					data[i] = Alloy.createController('fila', { info: lista.movies[i] }).getView();
				}
				
				$.tvPeliculas.data = data;
			}
		});
	}
}
