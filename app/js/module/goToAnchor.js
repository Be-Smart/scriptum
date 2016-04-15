//
// Fix problem with missing page anchors, when 
// linking from another page
//
function goToAnchor() { 
	hash = document.location.hash;
	if (hash !="") {
		setTimeout(function() {
			if (location.hash) {
				window.scrollTo(0, 0);
				window.location.href = hash;
			}
		}, 500);
	}
	else {
			return false;
	}
}

goToAnchor();