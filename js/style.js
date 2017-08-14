$(document).ready(function(){


    var i = 1;
    $(".fa-arrow-right").click(function(){
            i = i+1;
            if(i >= 4){
                i = 1;
            }
            $('.ima.europa').attr('src','image/europa'+i+'.jpg');
            $('.ima.dollywo').attr('src','image/dolly'+i+'.jpg');
            $('.ima.cedar').attr('src','image/cedar-'+i+'.jpg');
            $('.ima.amu').attr('src','image/amusement-'+i+'.jpg');
    });
    $(".fa-arrow-left").click(function(){
                i = i-1;
                if(i <= 0){
                    i = 3;
                }
                $('.ima.europa').attr('src','image/europa'+i+'.jpg');
                $('.ima.dollywo').attr('src','image/dolly'+i+'.jpg');
                $('.ima.cedar').attr('src','image/cedar-'+i+'.jpg');
                $('.ima.amu').attr('src','image/amusement-'+i+'.jpg');

    });
});
