// Include CSS.
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://rawgit.com/jodyHamilton/probar/master/probar.css\" />");

// Add the Probar.
var probar = document.createElement("div");
probar.setAttribute("id", "probar-closed");

// Close button.
var probarClose = document.createElement("div");
probarClose.setAttribute("id", "probar-close");
probarClose.innerHTML = '&#10006;';
probarClose.addEventListener('click', function(e) {
  // TO FIX
  document.getElementById("probar-open").innerHTML = '';
  document.getElementById("probar-open").setAttribute("id", "probar-closed");
});

probar.addEventListener('click', function(e) {
  if (this.getAttribute("id") == "probar-closed") {
    this.setAttribute("id", "probar-open");
    this.appendChild(probarClose);
  }
});

document.getElementsByTagName('body')[0].appendChild(probar);
