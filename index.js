;(function(){
   document.body.appendChild(
     Object.assign(
       document.createElement("script"),
       {src: 'https://unpkg.com/requirejs/require.js', onload: Main}
     )
   );

   function Main(){
      document.querySelector("pre[lang='videoframe']").forEach(function(f){
         var code = f.querySelector("code").innerText;
         var e = document.createElement("iframe");
         e.src = code;
         f.insertAdjacentElement("afterEnd", e);
      })
   }
})();