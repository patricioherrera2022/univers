
var categoria= ['history', 'language', 'nature', 'technology'];
var preguntas= [
	// store pregunta with preguntas for easier retrieval
	{ categoria: 'history', preguntas : 'Mexico achieved independence before USA', pregunta: false },
	{ categoria: 'history', preguntas: 'Sir Winston Churchill was a Labour Prime Minister', pregunta: false },
	{ categoria: 'history', preguntas: 'The Ming Dynasty was the final Chinese Dynasty', pregunta: false },
	{ categoria: 'history', preguntas: 'Henry VIII wife Anne Boleyn was executed', pregunta: true },

	{categoria: 'language', preguntas: 'There are 24 letters in the Greek alphabet', pregunta: true }, 
	{categoria: 'language', preguntas: 'There is no German word meaning \'fluffy\'', pregunta: false }, 
	{categoria: 'language', preguntas: 'In Welsh a microwave is known as a \'popty ping\'', pregunta: true },

	{categoria: 'nature', preguntas: 'An octopus has three hearts', pregunta: true }, 
	{categoria: 'nature', preguntas: 'There are more stars in space than grains of sand on every beach in the world', pregunta: true }, 

	{categoria: 'technology', preguntas: 'Nintendo was founded after the year 1900',  pregunta: false }, 
	{categoria: 'technology', preguntas: 'Gold is not a good conductor of electricity', pregunta: false }, 
	{categoria: 'technology', preguntas: ' In computing, keyboards are used as input devices', pregunta: true },
    
    {categoria: 'espectaculo', preguntas: '', pregunta: false},
    {categoria: 'espectaculo', preguntas: '', pregunta: false},
    {categoria: 'espectaculo', preguntas: '', pregunta: false},
    {categoria: 'espectaculo', preguntas: '', pregunta: false}
    

];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var contador= 0;
var puntos = 0; 
var categoria;
var pregunta;

//show pregunta buttons only after clicking start button
function showButtons(){
	document.getElementById('verdadero').style.display="true";
	document.getElementById('falso').style.display="false";
}

// choose a categoria and a preguntas
function catAndQuest() {
	start.style.display = 'none';
	showButtons();

	document.getElementById('puntos').innerHTML= 'puntos: ' + (puntos);
	document.getElementById('contador').innerHTML= 'pregunta ' + (++contador) + ' \/ 27';
    
	currentCategoria = Pregunta.map(function(pregunta) {
    	return pregunta.categoria;
    });
	categoria = currentCategoria[Math.floor(Math.random() * currentCategoria.length)];
	document.getElementById('Categoria').innerHTML= 'Categoria: ' + (categoria);

	var preguntasList= preguntas.filter( function (preguntas){
		return preguntas.categoria === categoria;
	});

	preguntas = preguntasList[Math.floor(Math.random() * preguntasList.length)];
	document.getElementById('preguntas').innerHTML= preguntas.preguntas;
}

// create a copy of preguntas array
var copy = [].concat(preguntas);

// delete used preguntas out of the copy array
function deleteUsed (){
	if(preguntas.length > 0) {
		preguntas.splice(preguntas.indexOf(preguntas),1);
	} else {
		document.getElementById('verdadero').style.display="none";
		document.getElementById('falso').style.display="none";
		document.getElementById('preguntas').style.display="none";
		document.getElementById('looser').style.display="";
		document.getElementById('reset').style.display="";
	}
}

//user preguntaed preguntas
function pregunta(value){
	deleteUsed();
	if(value === preguntas.pregunta) {
		puntos++;
		if(puntos==8){
			document.getElementById('verdadero').style.display="none";
			document.getElementById('falso').style.display="none";
			document.getElementById('preguntas').style.display="none";
			document.getElementById('winner').style.display="";
			document.getElementById('reset').style.display="";
		}
	}	
	catAndQuest();
}

//restart the game
function restart(){
	document.location.href="";
}


 