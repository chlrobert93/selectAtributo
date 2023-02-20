
/*document-- se refiere a que la 
pagina web este bien cargada
 */

jQuery(document).ready(function(){
    console.log("Estamos listo!!");
});

$(document).ready(function(){
   console.log("Estamos listos!!");
});


/* Selectores ID*/



$(document).ready(function(){

    //Selectores de ID
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");

   $("#amarillo").css("background", "yellow")
                 .css("color", "green");

    $("#verde").css("background","green")
               .css("color","white");

    console.log(rojo);

   //Selectores de clase
   //var mi_clase = $('.zebra');
   //mi_clase.css("border", "5px dashed black");
   //console.log(mi_clase[ 0]);
   //Seleccionar un elemento de un array
   //console.log(mi_clase.eq[ 0]);

   //Selectores de clases
   var mi_clase = $('.zebra').css("padding","5px");

   $('.sin_borde').click(function(){
     console.log("Click dato!!");
     $(this).addClass('zebra');
   });


   //Selectores de etiqueta
   var parrafos = $('p').css("cursor", "pointer");

   parrafos.click(function(){
    // hasClass si existe la clase  zebra 

    //var tis = $(this);
    //if(tis.hasClass('zebra')){
         //Remueve la clase zebra
        // $(this).removeClass("zebra");
        // $(tis.addClass('grande'));
     //}


     var that = $(this);
      
      //Si no tiene la clase grande
      if(!that.hasClass('grande')){
        //Que le ponga la clase grande
        that.addClass('grande');
      }else {
        that.removeClass('grande');
      }
   });

    
    //Selectores de atributo
    $('[title="Facebook"]').css('background','blue');

    $('[title="f"]').css('background','#ccc');


    //otros find parent
    $('p, a').addClass('margen-superior');

    //var parrafos = $('.resaltado').css("background", "blue");
    
    //find nos sirve para buscar etiquetas
    var busqueda = $('#caja').find('.resultado');


    //parent salir un nivel arriba
    //eq(0)---> En que elemento me estoy posicionando

    //var busqueda = $('#caja .resultado').eq(0).parent().parent().parent().find('[title="f"]')
    var busqueda2 = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda2);


});
