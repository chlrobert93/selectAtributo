<!DOCTYPE html>
<html lang="es">
    <head>
      <meta charset="utf-8">
    <!--Importacion del jQuery-->
    <script src="js\lib\jquery-3.6.3.min.js"></script>  
    <script src="js\01-selectoresAtributo.js"></script>  
    
    
     <script>
       $(document).ready(function(){
           console.log("jQuery y l web")
       });
     </script>

     <style>
         .zebra{
           border: 5px dashed black;
           /*visibility:hidden;*/
         }

         .grande {
           font-size: 30px;
         }

         .margen-superior{
            display:block;
            margin-top:45px;
         }

         .resaltado{
            border-bottom: 2px  solid green;
         }
     </style>

    </head>
    <body>
      <h1>Aprendiendo jQuery </h1>

       <ul>
     
         <li><a href="https://www.facebook.com" title="Facebook">Ir a Facebook</a></li>
          <li><a href="https://www.google.com" title="f">Ir a google</a></li>
       </ul>
      <p>Ejercicios de jQuery</p>

       <p id="rojo" class="sin_borde">Ejercicios de jQuery</p>
       <p id="amarillo" class="zebra">Practicando con selectores</p>
       <p id="verde" class="sin_borde">Quiero se un parrafo verde</p>
       <p class="zebra">Soy un parrafo blanco</p>

       <div id="caja">
         <p>Hola soy una caja</p>
         <ul>
           <li>Elemento 1</li>
           <li id="elemento2">Elemento 2</li>
         </ul>
          <span class="resaltado">Soy un span</span>
       </div>
      <%
       response.write"hhh"
      %>
    </body>
</html>
