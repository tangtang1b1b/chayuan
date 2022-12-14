$(window).on("mousemove",function(e){ 
    let pageX = e.pageX;
    let pageY = e.pageY;
    let x = pageX - $("#special_group .derivative_list").offset().left;
    let y = pageY - $("#special_group .derivative_list").offset().top;
    if(y<0 || x<0 || y>$("#special_group").outerHeight() || x>$("#special_group").outerWidth()){
        $("#followbtn").css("opacity","0");
    }else{
        $("#followbtn").css("opacity","1");
    }  
       
    $("#followbtn").css("left",x);
    $("#followbtn").css("top",y);
});
// $('#special_group').mousemove(function(e){ 
//     let x = e.pageX - $("#special_group").offset().left;
//     let y = e.pageY - $("#special_group").offset().top;
//     $("#followbtn").css({
//         left:x,
//         top:y,
//         opacity:'1',
//     });
//     }).mouseleave(function(){
//         $("#followbtn").css("opacity","0");
//     });


let rowbox = document.querySelector("#special_group");
let downpagex = 0;
let offsetpagex = 0;
let checktop = $(rowbox).offset().top;
let checkdown = $(rowbox).outerHeight();
let numb = document.querySelector(".derivative_number_var");

if($(window).width()>1024){
    $(rowbox).mousedown(function (e) {
        $(this).css("cursor","grabbing");
        $(".tea_img").css("cursor","grabbing");
        downpagex = e.pageX;
        e.preventDefault();

        $(rowbox).mousemove(move);
    });

    $(rowbox).mouseup(function (e) {
        if(e.pageY>checktop && e.pageY<(checktop+checkdown)){
            $(this).css("cursor","pointer");
            $(".tea_img").css("cursor","pointer");
            offsetpagex += e.pageX - downpagex;
        }
        
        $(rowbox).off("mousemove");
    });

    let shake = document.querySelectorAll(".derivative_list .derivative_list_card .tea_img_name .derivative_car");

    $(shake[0]).addClass("shake");
    function move(e){
        if(e.pageY>checktop && e.pageY<(checktop+checkdown)){
            let x = e.pageX - downpagex;
            if((offsetpagex + x)*2.3 < 180 && (offsetpagex + x)*2.3 > -3500){
                $(rowbox).css("transform","translateX("+(offsetpagex + x)*2.3 +"px)");
                
                
                for(let i = 0;i<=8;i++){
                    
                    if(((offsetpagex + x)*2.3) < -300 && ((offsetpagex + x)*2.3) > -750){
                        $(numb).text("02");
                        $(shake[i]).removeClass("shake");
                        $(shake[1]).addClass("shake");
                    }else if(((offsetpagex + x)*2.3) < -750 && ((offsetpagex + x)*2.3) > -1200){
                        $(numb).text("03");
                        $(shake[i]).removeClass("shake");
                        $(shake[2]).addClass("shake");
                        
                    }else if(((offsetpagex + x)*2.3) < -1200 && ((offsetpagex + x)*2.3) > -1650){
                        $(numb).text("04");
                        $(shake[3]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }else if(((offsetpagex + x)*2.3) < -1650 && ((offsetpagex + x)*2.3) > -2100){
                        $(numb).text("05");
                        $(shake[4]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }else if(((offsetpagex + x)*2.3) < -2100 && ((offsetpagex + x)*2.3) > -2550){
                        $(numb).text("06");
                        $(shake[5]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }else if(((offsetpagex + x)*2.3) < -2550 && ((offsetpagex + x)*2.3) > -3000){
                        $(numb).text("07");
                        $(shake[6]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }else if(((offsetpagex + x)*2.3) < -3000 && ((offsetpagex + x)*2.3) > -4000){
                        $(numb).text("08");
                        $(shake[7]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }else{
                        $(numb).text("01");
                        $(shake[0]).addClass("shake");
                        $(shake[i]).removeClass("shake");
                    }
                    
                }
            }
        }
        
    }
}
$(window).resize(function(){
    if($(window).width()<1024){
        $(".derivative_car").removeClass("shake");
    }
});

// console.log(checkdown)