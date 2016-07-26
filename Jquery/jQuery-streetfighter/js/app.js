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
});

function onenter(){
	console.log("onenter triggered");
	$("img").removeClass("imgstart");
	$("img").addClass("imgbounce");
};

function onexit(){
	console.log("onexit triggered");
	$("img").removeClass("imgbounce");
	$("img").addClass("imgstart");
};

function pressX(){
	console.log("pressX triggered");
	if ($("img").hasClass("imgcool") == false)
	{
		console.log("look cool triggered");
		$("img").removeClass("imgbounce");
		$("img").removeClass("imgstart");
		$("img").addClass("imgcool");
		
	}
	else {
		console.log("look cool inactive, now uncool");
		$("img").removeClass("imgcool");
		$("img").addClass("imgstart");
		
	}
	
};