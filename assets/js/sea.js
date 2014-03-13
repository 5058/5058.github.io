define(function(require, exports, module) {
  var $ = require('gallery/jquery/1.8.2/jquery');
  $(document).ready(function() {
      setTimeout(function() {
          $(".z, .p, .main").css({
              "opacity":"1"
          });
      }, 800);
      setInterval(function() {
          if($(".z").attr("class") === "z") {
              $(".z").addClass("z-p");
              setTimeout(function() {
                  $(".z").html("50");
              }, 400);
          } else {
              $(".z").removeClass("z-p");
                setTimeout(function() {
                $(".z").html("58");
              }, 400);
          }
          if($(".p").attr("class") === "p") {
              $(".p").addClass("p-z");
              setTimeout(function() {
              $(".p").html("58");
              }, 400);
          } else {
              $(".p").removeClass("p-z");
              setTimeout(function() {
              $(".p").html("50");
              }, 400);
          }
      }, 2400)
  });
});