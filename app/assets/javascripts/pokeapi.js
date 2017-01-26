function poke(){
	var pokeAPI= $.get("http://pokeapi.co/api/v2/pokemon/1/",function(){
		var arrayofpoke=pokeAPI.responseJSON;
		var object=document.getElementById("pokemon");
		newHTML="";
		for (i=0;i<arrayofpoke.length;i++){
			newHTML+= '<p>'+arrayofpoke[i].moves+'</p>';
			
		}
		object.innerHTML=newHTML;
		console.log(newHTML);
			
 })
}