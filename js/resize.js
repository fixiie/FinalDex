const sliderDefaultValue = 300;
const containMainDefaultDisplay = "block";
const containImgDefaultHeight = "60%";
const containImgDefaultMargin = "0 5%"
const containNameDefaultDisplay = "block";


function resizeDiv() {

    var slider = document.getElementById('resize');
	var output = document.getElementById("resize-value");

    var lis = document.querySelectorAll("#pokémon-outer > div li");
	
	const main = document.querySelectorAll("#pokémon-outer > div main:first-child");
	const img = document.querySelectorAll("#pokémon-outer > div .contain-img");
	const name = document.querySelectorAll("#pokémon-outer > div main:last-child");

	var sliderSwitch = 180;

    for (i = 0; i < lis.length; i++) {
        lis[i].style.width = slider.value + 'px';
		lis[i].style.height = slider.value + 'px';
		lis[i].style.fontSize = slider.value / 15 + 'px';
	
		
        if (slider.value <= sliderSwitch) {
			main[i].style.display = "none";
			img[i].style.height = "90%";
			img[i].style.margin = "5%";
			name[i].style.display = "none";
		}
		if (slider.value >= sliderSwitch) {
			main[i].style.display = containMainDefaultDisplay;
			img[i].style.height = containImgDefaultHeight;
			img[i].style.margin = containImgDefaultMargin;
			name[i].style.display = containNameDefaultDisplay;
		}
		
    }
	output.innerText = Math.round(slider.value / sliderDefaultValue * 100) + "%";
}