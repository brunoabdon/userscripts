// ==UserScript==
// @name       Limpuol
// @namespace  http://org.abdon.userscript/
// @version    0.1
// @description  limpa links do uol que comeca com click.uol...
// @match      http://*.uol.com.br/*
// @copyright  2012+, Bruno Abdon
// ==/UserScript==


(function(){
   var links = document.getElementsByTagName('a');
   var i;
   for (i=0; i< links.length; i++){
      var link = links[i];
      link.href = link.href.replace(/^http:\/\/click.uol.com.br\/\?rf=.*\&u=/,"");
   }
})();
