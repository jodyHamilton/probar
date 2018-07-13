// Include CSS.
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://rawgit.com/jodyHamilton/probar/master/probar.css\" />");

// Add the Probar.
var probar = document.createElement("div");
probar.setAttribute("id", "probar-closed");
probar.addEventListener('click', function(e) {
  this.setAttribute("id", "probar-open");
});
document.getElementsByTagName('body')[0].appendChild(probar);
