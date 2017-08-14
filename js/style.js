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

    $("#log").click(function(){
    	$("#connexion").hide("slow");
    	$("#parc-0").show("slow");

    });

    // $(".fa-arrow-right.acc").click(function(){
    // 		$("#parc-"+i).hide("slow");
    // 		i=i+1;
    // 		if(i >= 5){
    //                 i = 1;
    //         }
    //         $("#parc-"+i).show("slow");
    // });
    //
    // $(".fa-arrow-left.acc").click(function(){
    //
    //         $("#parc-"+i).hide("slow");
    //         i=i-1;
    // 		if(i <= 0){
    //                 i = 4;
    //         }
    //         $("#parc-"+i).show("slow");
    // });


});
