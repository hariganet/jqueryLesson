$(function(){
  $("ul.menu").hide();
  $("div.category").click(function(){
    $("ul.menu").slideUp();
    $("div.category").removeClass("open");
    if($("+ul",this).css("display")=="none"){
      $("+ul",this).slideDown();
      $(this).addClass("open");
    }
  });

  $("ul.menu li").mouseover(function(){
    $(this).addClass("rollover");
  }).mouseout(function(){
    $(this).removeClass("rollover");
  });
});
