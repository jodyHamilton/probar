
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = '/Users/jodyhamilton/Sites/probar/css/probar.css';
link.media = 'all';
document.getElementsByTagName('head')[0].appendChild(link);


var probar = document.createElement("div");
probar.setAttribute("id", "probar");
document.getElementsByTagName('body')[0].appendChild(probar);