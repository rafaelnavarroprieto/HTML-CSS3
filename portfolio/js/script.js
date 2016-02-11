$(function () {
    //evento de desplazamiento
    $(".inicio").on("click", function(){
        var posicion = $("#inicio").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500); 
    });

    $(".about").on("click", function(){
        var posicion = $("#about").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });

    $(".think").on("click", function(){
        var posicion = $("#think").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });

    $(".contact").on("click", function(){
        var posicion = $("#contact").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });

  var $win = $(window);

  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento

  var $pos = $(window).height()/2;

  $win.scroll(function () {

     if ($win.scrollTop() >= $pos){
       $('.p1').addClass("animacion"); 
       $('.p2').addClass("animacion"); 
       $('.p3').addClass("animacion"); 
        }


     

   });


});


$(function () {

  var $win = $(window);

  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento

  var $pos = ($(window).height()*3)/2;

  $win.scroll(function () {

     if ($win.scrollTop() >= $pos){
        $('.l1').animate({opacity:1},1000);
        $('.l2').animate({opacity:1},2000);
        $('.l3').animate({opacity:1},3000);
        $('.l4').animate({opacity:1},1000);
        $('.l5').animate({opacity:1},2000);
        $('.l6').animate({opacity:1},3000);

        }


     

   });
});

$(function(){


  resizable();
  $(window).resize(resizable);
});

function resizable(){
  var alto = $(window).height();
  var inicio = $("#inicio");
  var about = $("#about");
  var think = $("#think");
  var contact = $("#contact");
  var parrafos = $("#about>*");
  var altoParrafos = 0;
  var video = $("#video");

  parrafos.each(function(){
    altoParrafos += $(this).height();

  });

if (($(window).innerHeight() < $(window).innerWidth() && $(window).innerWidth()<668)|| $(window).innerWidth()<668) {
      if (altoParrafos+$("picture > img").height() > alto) {
          about.css("top","110%");
          about.css("height","190%");
          $("#inicio .info").css("margin-top","5%");
          think.css("top","270%");
          contact.css("top","370%");
      }else {
        $("div.info").css("margin-top","5%;");
          about.css("height","190%");
          think.css("top","205%");
          contact.css("top","285%");
          contact.css("height","75%");

      }
  }else if($(window).innerWidth()>1300){
    $("video").prop("autoplay" , true);
  }
 
}