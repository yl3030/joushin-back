$(".menu-icon").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        if($(window).width()>991){
            $("main").removeClass("active");
            if($(".dropdown").hasClass("drop")){
                $(".dropdown").removeClass("drop");
                $(".dropdown").children(".nav-second").hide();
            }
        }else {
            $(".nav-box").removeClass("active");
        }
    }else {
        $(this).addClass("active");
        $(".dropdown").addClass("drop");
        $(".dropdown").children(".nav-second").show();
        if($(window).width()>991){
            $("main").addClass("active");
            
        }else {
            $(".nav-box").addClass("active");
        }
    }
})

$(".dropdown").click(function(){
    $(this).children(".nav-second").slideToggle(300);
    $(this).toggleClass("drop");
})

$(".search-btn").click(function(){
    $(this).parents(".search-box").addClass("active");
})
$(".search-close").click(function(){
    $(this).parents(".search-box").removeClass("active");
})

$(".check-box").click(function(){
    $(this).toggleClass("active");
})
$(".select-all").click(function(){
    $(".table-content").find(".check-box").addClass("active");
})
$(".btn-clear").click(function(){
    $(".table-content").find(".check-box").removeClass("active");
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

$(".classify-content_main").children(".name").click(function(){
    $(this).parents(".classify-content_main").toggleClass("active");
    $(this).parents(".classify-content_main").next(".classify-content_second-box").slideToggle(300);
})

let count_min = 5;
let count_sec = 0;
let set_second = count_min * 60 + count_sec;
let counter;
counter = window.setInterval(function(){
    set_second -= 1;
    let cal_min = Math.floor(Math.floor(set_second)/60);
    let cal_sec = set_second % 60;
    $(".count_min").text(cal_min);
    if(cal_sec<10){
        $(".count_sec").text("0"+cal_sec);
    }else {
        $(".count_sec").text(cal_sec);
    }
    if(set_second === 0) {
        clearInterval(counter);
    }
},1000);

if($(window).width()<576){
    $(".search-box-mobile").addClass("active");
}else {
 $(".search-box-mobile").removeClass("active");
}
$(window).on("resize scroll",function(){
   if($(window).width()<576){
       $(".search-box-mobile").addClass("active");
   }else {
    $(".search-box-mobile").removeClass("active");
   }
})

