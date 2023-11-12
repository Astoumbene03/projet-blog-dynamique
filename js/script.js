var element = document.getElementById("commentaires");

function commenter() {
  var commentaire = document.getElementById("message-text");
  var enfant = document.createElement("div");
  enfant.innerHTML = commentaire.value;
  element.appendChild(enfant);
  commentaire.value = "";

  return false;
}

function mode() {
  var body = document.getElementsByTagName("html");
  if (body[0].getAttribute("data-bs-theme") == "light")
    body[0].setAttribute("data-bs-theme", "dark");
  else body[0].setAttribute("data-bs-theme", "light");
}
