// Include CSS.
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://rawgit.com/jodyHamilton/probar/master/probar.css\" />");

// Add the Probar.
var probar = document.createElement("div");
probar.setAttribute("id", "probar");
document.getElementsByTagName('body')[0].appendChild(probar);
