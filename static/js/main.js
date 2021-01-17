function activateMenu(){
	var menuBtn = document.querySelector("#bars-menu-icon");
	var sidebar = document.querySelector("#side-nav-wrapper");
	var body = document.querySelector("body");
	if(menuBtn.classList.contains("open")){
	    sidebar.style.display = "block";
	    menuBtn.classList.replace("open", "close");
	    menuBtn.innerHTML = '<i class="fas fa-times fa-2x"></i>';
	    body.style.overflow = "hidden";
    }
	else{
		sidebar.style.display = "none";
		menuBtn.classList.replace("close", "open");
		menuBtn.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
		body.style.overflow = "initial";
	}
}