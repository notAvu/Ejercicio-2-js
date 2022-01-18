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
    if(document.getElementById("guilty").checked)
    {
        document.getElementById("blaz").checked=false;
        document.getElementById("char1").innerHTML=ggCharacters[0];
        document.getElementById("char2").innerHTML=ggCharacters[1];
        document.getElementById("char3").innerHTML=ggCharacters[2];
    }
    else { empty(); }
}
//Muestra la lista de personajes de BlazBlue
//Asociado a la seleccion del elemento de la vista "blaz"
function getBbCharacterList()
{
    if(document.getElementById("blaz").checked)
    {
        document.getElementById("guilty").checked=false;
        document.getElementById("char1").innerHTML=bbCharacters[0];
        document.getElementById("char2").innerHTML=bbCharacters[1];
        document.getElementById("char3").innerHTML=bbCharacters[2];
    }
    else { empty(); }
}
//Vacia la lista
function empty()
{
    document.getElementById("char1").innerHTML=""
    document.getElementById("char2").innerHTML=""
    document.getElementById("char3").innerHTML=""
}