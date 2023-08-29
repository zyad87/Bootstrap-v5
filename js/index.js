$(document).ready(function(){
    $("#first-list").addClass("active");
$(".nav-item").click(function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});
$('#toggler').click(function(event){
    $('#wrap').toggleClass('toggled');



    var right = $(".sidebar").css("right");
    if (right == "0px") {
        $(".sidebar").css({ right: "-17rem" });
        $(".layer").fadeOut();
    } else {
        $(".sidebar").css({ right: "0" });
        $(".layer").fadeIn();
    }
    });
    
    $(".layer").click(function () {
    $(".sidebar").css({ right: "-17rem" });
    $(".layer").fadeOut();
    });

    $('.search-icon').click(function () {
        $('.search-input').slideToggle('slow');
        });   


        $("input:checkbox").click(function(){
            var $box = $(this);
            if($box.is(':checked') ){
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                $(group).prop("checked", false);
                $box.prop("checked", true)
            }
        });
});

