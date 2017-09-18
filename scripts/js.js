(function($) {
$(document).ready(function() {
    var navChildren = $("#nav li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
        var h = window.innerHeight;
        var pageHeight = $('#page4').height();
        var navHeight = $('#nav').height();
        
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var secPosition = $(theID).offset().top;
            secPosition = secPosition;
            var divHeight = $(theID).height();
            divHeight = h - navHeight;
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + theID + "']").parent().addClass("active");
            } else {
                $("a[href='" + theID + "']").parent().removeClass("active");
            }
        }
    });
 
});
})(jQuery); 


var toggled = true;

$("#toggle_menu").click(function(){
    console.log("toggle menuy button clicked");
    if(toggled) {
        toggled=false;
    $(this).animate({width: "20px"}, "fast");
    }else {
        toggled=true;
            $(this).animate({width: "200px"}, "fast");
    }
});