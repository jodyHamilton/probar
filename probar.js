// Include CSS.
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://rawgit.com/jodyHamilton/probar/master/probar.css\" />");

// Add the Probar.
var probar = document.createElement("div");
probar.setAttribute("id", "probar-closed");

var probarClose = document.createElement("div");
probarClose.setAttribute("id", "probar-close");

probar.addEventListener('click', function(e) {
  if (this.getAttribute("id") == "probar-closed") {
    this.setAttribute("id", "probar-open");
    this.appendChild(probarClose);
  }
});
document.getElementsByTagName('body')[0].appendChild(probar);
