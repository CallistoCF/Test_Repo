$(document).ready(function() {
	console.log("ready!");

	$( "body" ).mouseenter(function() {
		onenter();	
	})
	$( "body" ).mouseleave(function() {
		onexit();
	})
	
	$( "body" ).keypress(function( event ){
		if(event.which == 120)
		{
			console.log("x pressed");  	
       		pressX(); 
		}		     	
    })

    $( "body ").click(function(event){
    	hadouken();
    	
    });
});

function hadouken(){
	$("audio").attr("src", "sound/hadouken.mp3");
	$(".imga").removeClass("imgbounce");
	$(".imga").removeClass("imgstart");
	$(".imga").addClass("imgthrow");
	//$(".firebox").removeClass("firebox");
	//$(".firebox").addClass("fireball");
	//$(".imgb").removeClass("imgb");
	$(".imgb").addClass("fireball");
	$(".imgb").animate({
		left:"+=1000",
	}, 1000, function() {
		$(".imga").removeClass("imgthrow");
		$(".imga").removeClass("imgbounce");
		$(".imgb").removeClass("fireball");
		$(".imga").addClass("imgstart");
		$(".imgb").removeAttr("style");
		$(".imga").removeClass("imgbounce");
		$(".imgb").removeClass("fireball");
		$(".imgb").addClass("imgb");
		
	});
	

};


function onenter(){
	console.log("onenter triggered");
	$(".imga").removeClass("imgstart");
	$(".imga").addClass("imgbounce");

};

function onexit(){
	console.log("onexit triggered");
	$(".imga").removeClass("imgbounce");
	$(".imga").addClass("imgstart");
};

function pressX(){
	console.log("pressX triggered");
	if ($(".imga").hasClass("imgcool") == false)
	{
		console.log("look cool triggered");
		$(".imga").removeClass("imgbounce");
		$(".imga").removeClass("imgstart");
		$(".imga").addClass("imgcool");
		
		
	}
	else {
		console.log("look cool inactive, now uncool");
		$(".imga").removeClass("imgcool");
		$(".imga").addClass("imgstart");
		
	}
	
};