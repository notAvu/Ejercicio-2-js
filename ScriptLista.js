const ggCharacters=["Millia", "Raven", "Potemkin"];
const bbCharacters=["Hibik", "Relius", "Hazama"];
window.onload= inicializaEventos;
function inicializaEventos()
{
    const RadioButton=[document.getElementById("guilty"), document.getElementById("blaz")];
    // foreach(Element rb in RadioButton){
    //     rb.Attributes.Add("onclick", "alert('hello');");
    // }
        document.getElementById("guilty").addEventListener("change", getGgCharacterList, false);
        document.getElementById("blaz").addEventListener("change", getBbCharacterList, false);
        
}
function getGgCharacterList()
{
    if(document.getElementById("guilty").checked)
    {
        document.getElementById("blaz").checked=false;
        document.getElementById("char1").innerHTML=ggCharacters[0];
        document.getElementById("char2").innerHTML=ggCharacters[1];
        document.getElementById("char3").innerHTML=ggCharacters[2];
    }else
    {
        empty();
    }
}
function getBbCharacterList()
{
    if(document.getElementById("blaz").checked)
    {
        document.getElementById("guilty").checked=false;
        document.getElementById("char1").innerHTML=bbCharacters[0];
        document.getElementById("char2").innerHTML=bbCharacters[1];
        document.getElementById("char3").innerHTML=bbCharacters[2];
    }else
    {
        empty();
    }
}
function empty()
{
    document.getElementById("char1").innerHTML=""
    document.getElementById("char2").innerHTML=""
    document.getElementById("char3").innerHTML=""
}