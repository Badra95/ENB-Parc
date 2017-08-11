$(document).ready(function(){


    var i = 1;
    $(".fa-arrow-right.euro").click(function(){
            i = i+1;
            if(i >= 4){
                i = 1;
            }
            $('.europa').attr('src','image/europa'+i+'.jpg');
        });
        $(".fa-arrow-left.euro").click(function(){
                i = i-1;
                if(i <= 0){
                    i = 3;
                }
                $('.euro').attr('src','image/europa'+i+'.jpg');
        });

    $(".fa-arrow-right.dolly").click(function(){
            i = i+1;
            if(i >= 4){
                i = 1;
            }
            $('.dollywo').attr('src','image/dolly'+i+'.jpg');
        });
        $(".fa-arrow-left.dolly").click(function(){
                i = i-1;
                if(i <= 0){
                    i = 3;
                }
                $('.dollywo').attr('src','image/dolly'+i+'.jpg');
        });
});
