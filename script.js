
// create an xhr object
var request=new XMLHttpRequest();
// request a connection(which data you require?)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// sending a connection request
request.send();
// once the data successfully received
// from the server 200
request.onload=function(){
	var data=JSON.parse(request.response);
	console.log(data);
	// for(var i=0;i<data.length;i++){
	// 	console.log(`name: ${data[i].name} Capital:${data[i].capital}`)
	// }

	// for(var i=0; i<10;i++){
	// 	console.log(`flag:${data[i].flag}`)
	// }
	for(var i=0;i<data.length;i++){
	 	console.log(`name: ${data[i].name} Lat:${data[i].latlng[0]} Long:${data[i].latlng[1]}`)
	 }
}



