
var weather = $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json");
function blop(){
	var arrayofweather=weather.responseJSON;
	var toop=document.getElementById("weather")
	freshHTML="";
	for (i=0;i<arrayofweather.length;i++){ 
		freshHTML+= '<div  onclick="chant(this)">';
		freshHTML+= '<p>'+arrayofweather[i].borough +'</p>';
		freshHTML+= '<p>'+arrayofweather[i].day_s +'</p>';
		freshHTML+= '<p>'+arrayofweather[i].hours +'</p>';
		freshHTML+= '<p>'+arrayofweather[i].market_name +'</p>';
		freshHTML+= '<p>'+arrayofweather[i].street_address +'</p>';
		freshHTML+='</div>';
	}
	toop.innerHTML= freshHTML;
}

function chant(thisdiv){

	if (thisdiv.style.color==="red"){
		thisdiv.style.color="black";
	}
	else{
		thisdiv.style.color="red";
	}
	console.log(thisdiv);
}