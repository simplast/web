
$(function() {
    var oImg = $(".bg-link");
    var oLi = $(".tip-turn li");
    var oDiv = $(".pcr-right div");
    var oNli = $('.table-big-body ul li');
    var tempA = setInterval(function() {turning1(oImg, oLi, oDiv);}, 2500);
    var tempB = setInterval(function() {turning2(oNli.find('a'));}, 3000);
    function turning1(img, li, div) {
        for (var i = 0; i < img.length; i++) {
            if (img.eq(i).css('display') != 'none') {
                img.eq(i).hide();
                div.eq(i).hide();
                li.eq(i).removeClass("white");
                if (i < img.length - 1) {
                    li.eq(i + 1).addClass("white");
                    img.eq(i + 1).show();
                    div.eq(i + 1).show();
                    break;
                } else {
                    li.eq(0).addClass("white");
                    img.eq(0).show();
                    div.eq(0).show();
                }
            }
        }
    }
    function turning2(a) {
        for (var i = 0; i < a.length; i++) {
            if (a.eq(i).css('display') != 'none') {
                a.eq(i).hide();
                a.eq(i).parent().removeClass();
                if (i < a.length - 1) {
                    a.eq(i+1).show();
                    a.eq(i+1).parent().addClass("to-green");
                    break;
                } else {
                    a.eq(0).show();
                    a.eq(0).parent().addClass("to-green");
                }
            }
        }
    }

    function handle(obj) {
      if(obj.data.name == 'white'){
        oDiv.hide();
        oDiv.eq($(this).index()).show();

      }
      $(this).addClass(obj.data.name).siblings().removeClass();
      $(this).siblings().find('a').hide();
      $(this).find('a').show();
    }

    function autoMove(temp) {
      clearInterval(temp);
      if(temp == tempA){
        tempA = setInterval(function() {turning1(oImg, oLi, oDiv);}, 2500);
      }
      else{
        tempB = setInterval(function() {turning2(oNli.find('a'));}, 3000);
      }
    }

    function autoStop(temp,obj,color) {
        clearInterval(temp);
        obj.mouseover({name:color},handle)


    }
    $(".bgbg").hover(function(){autoStop(tempA,oLi,'white')},function(){autoMove(tempA)});
     $(".table-big").hover(function(){autoStop(tempB,oNli,'to-green')},function(){autoMove(tempB)});

})