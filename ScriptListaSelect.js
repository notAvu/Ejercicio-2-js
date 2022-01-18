const ggCharacters=["Millia", "Raven", "Potemkin"];
const bbCharacters=["Hibiki", "Relius", "Hazama"];
window.onload= inicializaEventos;
//inicializa los listeners de los elementos de la lista
function inicializaEventos()
{
    document.getElementById("guilty").addEventListener("change", getGgCharacterList, false);
    document.getElementById("blaz").addEventListener("change", getBbCharacterList, false);       
}
//Muestra la lista de personajes de Guilty Gear
//Asociado a la seleccion del elemento de la vista "guilty"
function getGgCharacterList()
{
    var select= document.getElementById("charList");
    empty(select);
    if(document.getElementById("guilty").checked)
    {
        document.getElementById("blaz").checked=false;
        for(var i=0;i<ggCharacters.length; i++) {
            var option=document.createElement("option");
            option.value=i;
            option.innerHTML=ggCharacters[i];
          select.appendChild(option);   
        }
    }
}
//Muestra la lista de personajes de BlazBlue
//Asociado a la seleccion del elemento de la vista "blaz"
function getBbCharacterList()
{
    var select= document.getElementById("charList");
    empty(select);
    if(document.getElementById("blaz").checked)
    {
        document.getElementById("guilty").checked=false;
        for(var i=0;i<bbCharacters.length; i++) {
            var option=document.createElement("option");
            option.value=i;
            option.innerHTML=bbCharacters[i];
            select.appendChild(option);   
          }
    }
}
//Vacia la lista
function empty(selectElement)
{
    var L = selectElement.options.length - 1;
   for(let i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}