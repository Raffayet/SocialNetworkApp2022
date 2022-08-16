	
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("data/users.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});


function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

/*
 * Šalje AJAX zahtev ka testjson REST servisu.
 * Kao parametar POST metode, šalje objekat klase Student, zapakovan u JSON.
 * Prima takođe JSON string, koji je takođe objekat klase Student, a koji 
 * vraća testjson REST servis.
 */
function sendStudent() {
	var $form = $("#jsonform");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	$.ajax({
		url: "rest/demo/testjson",
		type:"POST",
		data: s,
		contentType:"application/json",
		dataType:"json",
		complete: function(data) {
			$( "#result" ).html( data.responseText );
		}
	});
}

function login() {
	var $form = $("#login");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	console.log(data)
	$.ajax({
		url: "rest/demo/login",
		type:"POST",
		data: s,
		contentType:"application/json",
		dataType:"json",
		complete: function(data) {
			$( "#resultLogin" ).html( data.responseText );
		}
	});
}
