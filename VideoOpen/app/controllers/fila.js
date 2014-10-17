var args = arguments[0] || {};

if(args.fila % 2) {
	$.fila.backgroundColor = "#DDD";	
}

$.fila.datos = args.info;
$.poster.image = args.info.posters.thumbnail;
$.titulo.text = args.info.title;

if(args.info.alternate_ids && args.info.alternate_ids.imdb) {
	this.urlIMDB = 'http://www.imdb.com/title/' + args.info.alternate_ids.imdb.toString();
} else {
	$.btIMDB.visible = false;
}

function navegarIMDB() {
	Ti.Platform.openURL(this.urlIMDB);
}
