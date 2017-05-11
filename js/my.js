$(document).ready(function() {
    $(".skill-data").each(function() {
      $(this).find(".skill-bar").animate({
            width:$(this).attr("data")},6000);
          });

    $(function(){
          $(".hello").typed({
            strings:["Hi! I am Emmanuel Arias"],
            typeSpeed:100,
            startDelay:100,
            shuffle:false,
            backDelay: 500,
            loop: false,
            showCursor: false,
          });
        });
});
