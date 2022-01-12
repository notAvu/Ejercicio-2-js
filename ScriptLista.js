const ggCharacters=["Millia", "Raven", "Potemkin"];
const bbCharacters=["Hibik", "Relius", "Hazama"];
window.onload= inicializaEventos;
function inicializaEventos()
{
    const RadioButton=[document.getElementById("guilty"), document.getElementById("blaz")];
    // foreach(Element rb in RadioButton){
    //     rb.Attributes.Add("onclick", "alert('hello');");
    // }
        document.getElementById("butno").addEventListener("click", getCharacterList, false);
        
}
function getCharacterList()
{
    if(document.click('input[name="blaz"]:checked').value)
    {
        document.getElementById("char1").innerHTML=bbCharacters[0];
        document.getElementById("char2").innerHTML=bbCharacters[1];
        document.getElementById("char3").innerHTML=bbCharacters[2];
    }else
    {
        document.getElementById("char1").innerHTML=ggCharacters[0];
        document.getElementById("char2").innerHTML=ggCharacters[1];
        document.getElementById("char3").innerHTML=ggCharacters[2];
    }
    
}