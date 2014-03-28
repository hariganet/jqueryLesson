$(function(){

  var options = {
    imglist:[
      "img/neputa/neputaup.jpg",
      "img/wirework/zebra.jpg"
    ],
    width: 640,
    height: 480,
    minWidth: 600,
    minHeight: 400,
    callback: function(){
      //thisには$("#imgContainer")が渡されている。
      this.find("img").show();
      //ローディング表示を終了
      $("#loading").hide();
      //fitterを起動
      this.fitter(options);

    }
  }

  $("#imgContainer").imgloader(options);


});
