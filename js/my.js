$(document).ready(function() {
    $(".skill-data").each(function() {
      $(this).find(".skill-bar").animate({
            width:$(this).attr("data")},6000);
          });
    });
