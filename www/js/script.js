$(document).ready(function(){
	//buscador
	$(".body form input").focus()
	$(".body form input").click(function(){
		url="#search";
		window.history.pushState("popstate", "Mp3tonic", url);
		$(".style").load("css/transition1.css");
		$(".fa").attr("class", "fa fa-arrow-left icon1");

		//ir atras buscador
		$(".fa").click(function(){
			$(".style").load("css/transition-1.css");
			$(".fa").attr("class", "fa fa-search icon1");
			$(".body form input").val("")
		});
	})

	window.history && window.history.pushState && $(window).on("popstate", function (){
		
	})
})