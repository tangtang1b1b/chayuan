$(window).on("scroll",function(e){
    if($(window).scrollTop()>0){
        $(".nav_box").css("box-shadow","0px 0px 5px 0px #BBB");
        $("#totop").css("opacity","1");
        $("#totop").css("transform","scale(1) rotate(-90deg)");
    }else{
        $(".nav_box").css("box-shadow","none");
        $("#totop").css("opacity","0");
        $("#totop").css("transform","scale(0) rotate(-90deg)");
    }
});

let i=0;
$("#choosesubcribe").click(function(){
    if($(window).width()>1024){
        $("#subcribe").slideToggle();
        $("#go").addClass("up");
        i++;
        if(i%2==0){
            $("#go").removeClass("up");
        }
    }
});
let y=0;
$("#choosemonth").click(function(){
    if($(window).width()>1025){
        $("#month").slideToggle();
        $("#gogo").addClass("up");
        y++;
        if(y%2==0){
            $("#gogo").removeClass("up");
        }
    }
});

$("#dun").click(function(){
    $(".choosewhat p").text("使用LINE登入");
    $(".choosewhat p + p").text("使用FaceBook登入");
    $(".write_group").css("display","none");
    $(".write_group.other").css("display","block");
    $(".letgo").text("開始購物吧！");
    $(".jufr").removeClass("dunjuadd");
    $(".dunse").addClass("dunjuadd");
    $(".forget").css("display","block")
});
$("#ju").click(function(){
    $(".choosewhat p").text("使用LINE註冊");
    $(".choosewhat p + p").text("使用FaceBook註冊");
    $(".write_group").css("display","block");
    $(".write_group.other").css("display","none");
    $(".letgo").text("立即加入");
    $(".dunse").removeClass("dunjuadd");
    $(".jufr").addClass("dunjuadd");
    $(".forget").css("display","none")
});


let j =0;
$(".hamber").click(function(){
    j++;
    
    if(j%2==0){
        $(".hambox:nth-child(1)").css("animation","hambarbang2 0.4s 0.6s both");
        $(".hambox:nth-child(2)").css("animation","rotat12 0.6s both");
        $(".hambox:nth-child(3)").css("animation","rotat23 0.6s both");
        $(".hambox:nth-child(4)").css("animation","hambarbang2 0.4s 0.6s both");
        $(".list_group").removeClass("show");
        setTimeout(function(){
            $(".list_group").css("left","-100%");
        },600);
    }else{
        $(".hambox:nth-child(1)").css("animation","hambarbang1 0.4s both");
        $(".hambox:nth-child(2)").css("animation","rotat 0.6s 0.4s both");
        $(".hambox:nth-child(3)").css("animation","rotat2 0.6s 0.4s both");
        $(".hambox:nth-child(4)").css("animation","hambarbang1 0.4s both");
        $(".list_group").addClass("show");
        $(".list_group").css("left","0%");
    }
});

let check = true;
let check2 = true;
$(".all_type").click(function(){
    if(check && check2){
        $(".choose_group").slideDown();
        check =false;
    }else if(!check && check2){
        $(".choose_group").slideUp();
        check = true;
    }
});
$(".sert_big_clone").click(function(){
    if(check2 && check){
        $(".sert_group_clone").slideDown();
        check2 =false;
    }else if(!check2 && check){
        $(".sert_group_clone").slideUp();
        check2 = true;
    }
});

// 重製區
$(window).resize(function() {
    if($(window).width()>1024){
        $(".list_group").css({
            left: "",
        });
        $(".choose_group").css("display","");
    }
});
// console.log($(window).outerWidth());