$(document).ready(function() {
    $(".skill-data").each(function() {
      $(this).find(".skill-bar").animate({
            width:$(this).attr("data")},6000);
          });

    $(function(){
          $(".hello").typed({
            strings:["Ha!","Hi! My man", "Hi! I am Emmanuel", "And tis", "And this is my resume"],
            typeSpeed:100,
            startDelay:100,
            shuffle:false,
            backDelay: 500,
            loop: true,
            showCursor: false,
          });
        });
});
