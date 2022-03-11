function textoAdultos() 
{
	var select = document.getElementsByTagName('select')[0];
	var opciones = select.value;
	
	var texto_Adultos=document.getElementById("adultos");
	texto_Adultos.innerHTML="";
	for (i=0; i<opciones;i++){
		var objeto_input = document.createElement("input");
		objeto_input.type="text";
		objeto_input.id=i;
		texto_Adultos.appendChild(objeto_input);
	}


}

function edadNinios() {
	var obj_ninio = document.getElementById("num_ninios");
	numero_ninio = obj_ninio.value;
	var number_ninio = document.getElementById("edades");
	number_ninio.innerHTML="";
	for (i=0; i<numero_ninio;i++){
		var objeto_input = document.createElement("input");
		objeto_input.type="number";
		objeto_input.id=i;
		number_ninio.appendChild(objeto_input);
	}
}

function validar()
{
	var numero_ninios=document.getElementById("num_ninios").value;
	var numero_adultos=document.getElementsByTagName("select")[0].value;

	//El cliente NOMBRE ha reservado una habitación para X adultos y Z
//niños de edades: EDAD_a, EDAD_b...
if(numero_ninios==0 )
	{
	var nombre="";
	for(i=1;i<=numero_adultos; i++){
				
				nombre=nombre+" "+document.getElementsByTagName("input")[i-1].value;
			}
		alert("El cliente "+nombre+" ha reservado una habitación para "+numero_adultos+" adultos")
	}
	else
		{
			var edades="";
			var nombre="";
			for(i=1; i<=numero_ninios; i++)
			{
				edades=edades+" "+document.getElementsByTagName("input")[i].value;
			}
			for(i=1;i<=numero_adultos; i++){

				nombre=nombre+" "+document.getElementsByTagName("input")[i-1].value;
			}
			alert("El cliente "+nombre+" ha reservado una habitación para "+numero_adultos+" adultos "+
				"y "+numero_ninios+" niños de edades: "+edades);
		}
}
