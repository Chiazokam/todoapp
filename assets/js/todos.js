

//Strike off and restore items on click
//(Apply the click function to ul and specify the li inside the ul. Listen
//on an event that exists when the page loads 

$("ul").on("click", "li", function(){

	if($(this).css("color") === "rgb(128, 128, 128)"){

		$(this).css("color", "black");

	}

	else{

		$(this).css("color", "gray");

	}

})

//Click on X to delete
//.fa-trash-alt specifies that it's the span with "fa-trash-alt" class that is to be deleted

$("ul").on("click", ".fa-trash-alt", function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});

	event.stopPropagation();              //Stops the parent from executing the code
});



//Check to take item to completed tasks

$("ul").on("click", "#check", function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});

	event.stopPropagation();              //Stops the parent from executing the code
});

//Capturing the user's input
$("input").on("keypress", function(event){

	if(event.which === 13){

		$("ul").append("<li><span id ='check'><input type='checkbox'><span><i class='fa fa-trash-alt'></i></span> " + "&nbsp; &nbsp; &nbsp" + $(this).val() + "</li>");

		$("input").val("");
	}
})


$(".fa-plus").on("click", function(){

	$("input").fadeToggle();
})