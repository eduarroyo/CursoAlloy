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
					data[i] = Alloy.createController('fila', { info: lista.movies[i] }).getView();
				}
				
				$.tvPeliculas.data = data;
			}
		});
	}
}

function mostrarDetalles(e) {
	var datos = (OS_IOS) ? e.rowData.datos : e.row.datos ;
	var vwDetalles = Alloy.createController('detalles', { datos: datos }).getView();
	vwDetalles.open({animated: true});
}
