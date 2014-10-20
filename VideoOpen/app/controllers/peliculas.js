var args = arguments[0] || {};

function buscar() {
	var txtBuscar = $.sbBuscar.value.trim();
	if(txtBuscar !== '') {
		$.tvPeliculas.visible = false;
		$.aiEspera.show();
		$.tvPeliculas.data = [];
		var cliente = new (require("filmClient")).filmClient();
		var data = [];
		
		
		cliente.getCine(txtBuscar, function(lista) {
			if(lista === -1) {
				alert("Error al cargar las películas");
			} else {
				for(var i = 0; i < lista.movies.length; i++) {
					data[i] = Alloy.createController('fila', { info: lista.movies[i], fila: i }).getView();
				}
				
				$.tvPeliculas.data = data;
			}
			
			$.aiEspera.hide();
			$.tvPeliculas.visible = true;
		});
	}
}

function clickFila(e) {
	var datos = (OS_IOS) ? e.rowData.datos : e.row.datos ;
	if(e.source.id === "btIMDB") {
		navegarIMDB(datos);
	} else {
		mostrarDetalles(datos);
	}
	
}

function mostrarDetalles(datos) {
	var vwDetalles = Alloy.createController('detalles', { datos: datos }).getView();
	vwDetalles.open({animated: true});
}

function navegarIMDB(datos) {
	var urlIMDB = 'http://www.imdb.com/title/tt' + datos.alternate_ids.imdb.toString();
	Ti.Platform.openURL(urlIMDB);
}
