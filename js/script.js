var element = document.getElementById("commentaires");


function commenter(){
    var commentaire = document.getElementById("message-text");
    var enfant = document.createElement("div");
    enfant.innerHTML=commentaire.value;
element.appendChild(enfant);
commentaire.value ="";

return false;
}