$(document).ready(function(){

	$(".fa-arrow-right").click(function(){

		if ( $(".up").css("display") == "block" ){
			$(".up").hide("slow");
			$(".mid").show("slow");
		}else if ( $(".mid").css("display") == "block" ){
			$(".mid").hide("slow");
			$(".down").show("slow");
		}else{
			$(".down").hide("slow");
			$(".up").show("slow");
		}
	});

	$(".fa-arrow-left").click(function(){

		if ( $(".up").css("display") == "block" ){
			$(".up").hide("slow");
			$(".down").show("slow");
		}else if ( $(".mid").css("display") == "block" ){
			$(".mid").hide("slow");
			$(".up").show("slow");
		}else{
			$(".down").hide("slow");
			$(".mid").show("slow");
		}
	});

});
