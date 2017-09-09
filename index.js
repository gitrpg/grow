;(function(){
   function Main(){
      document.querySelectorAll("pre[lang='videoframe']").forEach(function(f){
         var code = f.querySelector("code").innerText;
         var button = document.createElement("button");
         button.className = 'btn btn-primary btn-sm';
         button.innerText = "Play";
         button.addEventListener('click', function(){
            window.open(code, '_blank','width=640,height=480');
         }, false);
         f.querySelector("code").insertAdjacentElement('beforeEnd', button);
      })
   }

   Main();
})();