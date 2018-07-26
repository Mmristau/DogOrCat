$(document).ready(function(){
	console.log("Ready!");
	
	
	$("#enter_button").click(function() {
		
    var Enter =$("#CatOrDog").val();
	var cat = "cat1.jpg";
	var dog = "dog.jpeg";
	
	if(Enter == "cat"){ 
		$("#result").html(cat);
		console.log("cat");
		$("img").attr("src", "cat1.jpg");
	}
	else if(Enter == "dog"){
		$("#result").html(dog);
		console.log("dog");
		$("img").attr('src','dog.jpeg');
	}
	else {
		console.log("butts");
		$("img").attr('src','anger.jpg');
	}
		
		
		
		
		
	});
	
});