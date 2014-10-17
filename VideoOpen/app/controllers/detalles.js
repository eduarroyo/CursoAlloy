var args = arguments[0] || {};

function cerrar() {
	$.win.close({animated: true});
}

$.poster.image = args.datos.posters.original;
$.titulo.text = args.datos.title;
$.year.text = args.datos.year;
