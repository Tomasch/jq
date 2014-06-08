$(document).ready(function() {
	$('#name').on('input', function() {
		var input=$(this);
		if(input.val()){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	$('#email').on('input', function() {
		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if(re.test(input.val())){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});

$("#submit button").click(function(event){
	var form_data=$("#contact").serializeArray();
	var errors=true;
	for (var input in form_data){
		var element=$("#"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); errors=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!errors){
		event.preventDefault(); 
	}
	else{
		
	}
});



});
	
