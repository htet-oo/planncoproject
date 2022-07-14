$(document).ready(function(){
	//start header
		//start nav
			//start banner
	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs");
		console.log("hehe");
	});
	// for nav
	$(window).scroll(function(){
		let getscrolltop=$(this).scrollTop();

		if(getscrolltop >=200){
			$(".navbar").addClass("navmenus");
		}else{
			$(".navbar").removeClass("navmenus");
		}

	});

	//for properites
	$(".breadcrumb-item").click(function(){
		$(this).children().addClass("text-danger");
		$(this).siblings().children().removeClass("text-danger");

		let getattvalue=$(this).attr("data-filter");
		
		if(getattvalue === "all"){
			$(".filters").show("slide",500);
		}else{
			console.log(getattvalue);
			$(".filters").hide();
			$(".filters").not("."+getattvalue).hide("slide",500);
			$(".filters").filter("."+getattvalue).show("slide",500);
		}
	});

	//for adv
	$(window).scroll(function(){
		let getscrolltop=$(this).scrollTop();
		if(getscrolltop >=1300){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	})
})