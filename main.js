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
		var data=$("#contact").serializeArray();
		var errors=true;
		for (var input in data){
			var element=$("#"+data[input]['name']);
			var valid=element.hasClass("valid");
			var error_element=$("span", element.parent());
			if (!valid){error_element.removeClass("error").addClass("error_show"); errors=false;}
			else{error_element.removeClass("error_show").addClass("error");}
		}
		if (!errors){
			event.preventDefault();
		}
		else {
			$("#result").css({'display': 'block', 'margin': '50px', 'color': 'green'});
			var submit = false;
			$("#contact").submit(function(e) {
				setTimeout(function(){
					submit = true;
					$("#contact").submit();            
				}, 2000);
				if(!submit) {
					e.preventDefault();
				}
			});
		}

	});

});
	
