

//Strike off and restore items on click
//(Apply the click function to ul and specify the li inside the ul. Listen
//on an event that exists when the page loads 

$("ul").on("click", "li", function(){

	if($(this).css("color") === "rgb(128, 128, 128)"){

		$(this).css({
			color: "black",
			textDecoration: "none"
		});

	}

	else{

		$(this).css( {
			color: "gray",
			textDecoration: "line-through"
		});

	}

})

//Click on X to delete

$("ul").on("click", "span", function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});

	event.stopPropagation();
});

//Capturing the user's input
$("input").on("keypress", function(event){

	if(event.which === 13){

		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + $(this).val() + "</li>");

		$("input").val("");
	}
})


$(".fa-plus").on("click", function(){

	$("input").fadeToggle();
})