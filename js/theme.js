function theme() {
	const currentTheme = localStorage.getItem("finaldex-theme");
	if(currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);
	}
}

function switchTheme(e) {
	if(e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("finaldex-theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("finaldex-theme", "light");
	}
}

theme();