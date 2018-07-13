// Include CSS.
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://rawgit.com/jodyHamilton/probar/master/probar.css\" />");

// Close button.
var probarClose = document.createElement("div");
probarClose.setAttribute("id", "probar-close");
probarClose.addEventListener('click', function(e) {
  probar.setAttribute("id", "probar-closed");
  probar.innerHTML('');
});

// Add the Probar.
var probar = document.createElement("div");
probar.setAttribute("id", "probar-closed");

probar.addEventListener('click', function(e) {
  if (this.getAttribute("id") == "probar-closed") {
    this.setAttribute("id", "probar-open");
    this.appendChild(probarClose);
  }
});

document.getElementsByTagName('body')[0].appendChild(probar);
