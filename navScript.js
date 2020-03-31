window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var nav = document.getElementsByTagName("nav")[0];
	var links = document.getElementsByClassName("links");


	if (document.body.scrollTop > 80  || document.documentElement.scrollTop > 80) {
	    nav.style.height = "50px";
	    nav.style.transition = "0.3s ease";
	    for(i = 0; i < links.length; i++) {
	    	links[i].style.transform = "translateY(-50px)";
	    	links[i].style.transition = "0.3s ease";

	    }

	} else {
	    nav.style.height = "70px";
		for(i = 0; i < links.length; i++) {
	    	links[i].style.transform = "translateY(-40px)";

	    }
	}

}

