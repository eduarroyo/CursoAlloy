var args = arguments[0] || {};

function llamar(e) {
	if(OS_IOS) {
		alert("Llamando por teléfono");
	} else {
		Ti.Platform.openURL("tel:555555555");
	}
}

function componerEmail(e) {
	var emailDlg = Titanium.UI.createEmailDialog();
	emailDlg.subject = "Información sobre el videoclub";
	emailDlg.toRecipients = ["info@VideoOpen.com"];
	emailDlg.messageBody = "Escribe tu consulta aquí.";
	emailDlg.open();
}

function navegarWeb(e) {
	Ti.Platform.openURL('http://www.google.es');
}
