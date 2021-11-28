$(".menu-icon").click(function(){
    $(this).toggleClass("active");
    $("main").toggleClass("active");
    if($(".dropdown").hasClass("drop")){
        $(".dropdown").children(".nav-second").hide();
    }
})

$(".dropdown").click(function(){
    $(this).children(".nav-second").slideToggle(300);
    $(this).toggleClass("drop");
})

$(".search-btn").click(function(){
    $(this).parents(".search-box").addClass("active");
})

$(".check-box").click(function(){
    $(this).toggleClass("active");
})

$(".main-edit").click(function(){
    $(this).hide();
    let name = $(this).parents(".classify-content_main").find(".name_p").text();
    $(this).parents(".classify-content_main").find(".name_input").val(name);
    $(this).parents(".classify-content_main").find(".normal").hide();
    $(this).parents(".classify-content_main").find(".edit").show();
    $(this).parents(".icon").children(".main-check").show();
})
$(".main-check").click(function(){
    $(this).hide();
    let input_name =  $(this).parents(".classify-content_main").find(".name_input").val();
    $(this).parents(".classify-content_main").find(".name_p").text(input_name);
    $(this).parents(".classify-content_main").find(".normal").show();
    $(this).parents(".classify-content_main").find(".edit").hide();
    $(this).parents(".classify-content_main").find(".main-edit").show();
})

$(".second-edit").click(function(){
    $(this).hide();
    $(this).parents(".classify-content_second").find(".second-input").attr("disabled",false);
    $(this).parents(".icon").children(".second-check").show();
})
$(".second-check").click(function(){
    $(this).hide();
    $(this).parents(".classify-content_second").find(".second-input").attr("disabled",true);
    $(this).parents(".icon").children(".second-edit").show();
})

$(".main-delete").click(function(){
    $(this).parents(".classify-content_inner").remove();
})

$(".second-delete").click(function(){
    $(this).parents(".classify-content_second").remove();
})

$(".classify-content_main").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".classify-content_inner").children(".classify-content_second-box").slideToggle(300);
})