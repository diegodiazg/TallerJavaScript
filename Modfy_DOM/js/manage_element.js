id =1;
function add(){
	//creacion del elemento/nodo input
	input = document.createElement("input");
	divParent = document.createElement("div");
	divParent.setAttribute("id", "parent_"+id);

	linkText = document.createTextNode("my title text");
	link_remove_element = document.createElement("a");
	link_remove_element.setAttribute("href","#");
	link_remove_element.setAttribute("text","remover");
	link_remove_element.setAttribute("onclick","drop_element("+id+")");
	link_remove_element.appendChild(linkText);
	//seteo de atributos para el elemnto creado
	input.setAttribute("type", "text");
	input.setAttribute("id", id);
	input.setAttribute("name", "texto[]");
	input.setAttribute("placeholder", "placeholder");
	input.setAttribute("background", "red");

	divParent.appendChild(input);
	divParent.appendChild(link_remove_element);
	//se crea el elemnto contendra el contendido
	contenido =document.getElementById("content");
	//se agrega el primer elemento creado como hijo del elemento contenedor
	br = document.createElement("br");
	contenido.appendChild(divParent);
	//contenido.appendChild(br);

	//se suma un numero al id para que no se asigne el mismo id al otro nodo creado
	id=id+1;
}

function drop_element(id){

	var parent = document.getElementById("parent_"+id);
	parent.parentNode.removeChild(parent);

}