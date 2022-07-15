var createNav = function() {
	var navOptions = ["Pokémon","Moves","Abilities","Items","Map","Mechanics","Type Advantage","Tools"];
	if(Ability.length <= 0) {
		for(var q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}

	for(var q = 0; q < navOptions.length; q++) {
		if(navOptions[q].includes("Mechanics")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
	}

	for(var q = 0; q < navOptions.length; q++) {
		var x = q + 1;
		var navigationInput = document.createElement("input");
		var navigationLabel = document.createElement("label");
		navigationInput.setAttribute("type", "radio");
		navigationInput.setAttribute("name", "navigation");
		navigationInput.setAttribute("id", "navigation-" + x);
		navigationInput.setAttribute("value", navOptions[q]);
		navigationInput.setAttribute("autocomplete", "off");
		navigationLabel.setAttribute("for", "navigation-" + x);
		navigationLabel.innerText = navOptions[q];
		document.querySelector("#navigation").appendChild(navigationInput);
		document.querySelector("#navigation").appendChild(navigationLabel);
		if(q == 0) {
			navigationInput.setAttribute("checked", "");
		}
		navigationInput.addEventListener("change", navSelector);
	}

	var fullscreenButtonLeft = document.createElement("button");
	var fullscreenButtonLeftText = document.createElement("p");
	var fullscreenOverlay = document.createElement("span");
	var fullscreenDiv = document.createElement("div");
	var fullscreenUl = document.createElement("ul");
	var fullscreenButtonRight = document.createElement("button");
	var fullscreenButtonRightText = document.createElement("p");
	fullscreenButtonLeftText.innerText = "«";
	fullscreenButtonRightText.innerText = "»";
	fullscreenButtonLeftText.value = 0;
	fullscreenButtonRightText.value = 0;
	var fullscreen = document.querySelector("#fullscreen");
    fullscreen.setAttribute("tabindex","0");
	fullscreen.appendChild(fullscreenButtonLeft);
	fullscreenButtonLeft.appendChild(fullscreenButtonLeftText);
	fullscreen.appendChild(fullscreenOverlay);
	fullscreen.appendChild(fullscreenDiv);
	fullscreenDiv.appendChild(fullscreenUl);
	fullscreen.appendChild(fullscreenButtonRight);
	fullscreenButtonRight.appendChild(fullscreenButtonRightText);


	fullscreen.addEventListener("keyup",function(event){if(event.which === 37){fullscreenMove(fullscreenButtonLeftText)}else if(event.which === 39){fullscreenMove(fullscreenButtonRightText)}});
	fullscreen.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){fullscreenMove(fullscreenButtonLeftText)}else if(!delta.includes("-")){fullscreenMove(fullscreenButtonRightText)}});

	fullscreenOverlay.addEventListener("click",exitFullscreen);
	fullscreenButtonLeftText.addEventListener("click",fullscreenMove);
	fullscreenButtonRightText.addEventListener("click",fullscreenMove);
}

function navSelector() {
    var navContents = document.querySelectorAll('#contain > div');
    var navContent = document.querySelectorAll('#contain > div[name="' + this.value + '"]');
    for(var u = 0; u < navContents.length; u++) {
        navContents[u].style.display = "none";
    }
    for(var u = 0; u < navContent.length; u++) {
        navContent[u].style.display = "block";
    }

	if (this.value == "Map") {
		mapifyMap();
	}
}



function mapifyMap() {
	var base = document.querySelector(".map-inner"); 
	var mapAside3MapImg = base.querySelector(":scope img[usemap]");
	var mapAside3Map = base.querySelector(":scope map")
	var mapAside3MapFullscreen = base.querySelector(':scope span[name="fullscreen"]');
	var mapAside3MapZoomIn = base.querySelector(':scope span[name="zoom"]');
	var mapAside3MapZoomReset = base.querySelector(':scope span[name="reset"]');
	var mapAside3MapInner2 = base.querySelector(":scope > div > div");
	var mapAside3MapOuter2 = base;
	var mapAside1OptionsInput = document.querySelector("#map-options > input:first-child");

	if (!mapAside3MapImg.classList.contains("mapify")) {

		MapArea = excludeDuplicateAreas(MapArea);

		var defaultHeight = mapAside3MapImg.naturalHeight;
		var defaultWidth = mapAside3MapImg.naturalWidth;
		var height = mapAside3MapImg.getBoundingClientRect().height;
		var width = mapAside3MapImg.getBoundingClientRect().width;



		mapAside3MapImg.setAttribute("height",height+"px");
		mapAside3MapImg.setAttribute("width",width+"px");

	
		resizeAreas();


		function resizeAreas() {

			var height = mapAside3MapImg.offsetHeight;
			var width = mapAside3MapImg.offsetWidth;

			var relative = (defaultHeight+defaultWidth) / (height+width);
		
			for (var i = 0; i < MapArea.length; i++) {
				var coords = MapArea[i]["coords"].split(",");
				var coordNew = [];
				for (var q = 0; q < coords.length; q++) {
				var coord = parseInt(coords[q].replaceAll(" ",""));
				coordNew.push(coord/relative);
				MapArea[i]["coords"].split(",")[q] = coord;
				}
				MapArea[i]["coords"] = coordNew.join(",");
			}
	
			afterResize();
		}

		function afterResize() {
			complete = true;
	
			for (var i = 0; i < MapArea.length; i++) {
				var area = document.createElement("area");
				area.setAttribute("shape",MapArea[i]["type"])
				area.setAttribute("coords",MapArea[i]["coords"])
				area.setAttribute("title",MapArea[i]["id"])
				mapAside3Map.appendChild(area);
			}


			$(mapAside3MapImg).mapify({
				popOver: {
				content: function(zone){ 
					var zones = [];
					if (zone.attr("data-title").includes("<br>")) {
					zones = zone.attr("data-title").split("<br>");
					}
					else {
					zones = [zone.attr("data-title")];
					}
					for (var i = 0; i < zones.length; i++) {
					zones[i] = '<button name="Map" onclick="dataRedirect()">'+zones[i]+'</button>';
					}
					return zones.join("<br>");
				},
				margin: "15px"
			}
			});

			var scaleY = defaultHeight/height;
			var scaleX = defaultWidth/width;
			var scale = (scaleX+scaleY) * 0.8;

			var active = false;
			var minDuration = 0.1;
			var maxDuration = 1;
			var duration = (0.25*scale);
		
			if (duration > maxDuration) {
				duration = maxDuration;
			}
			if (duration < minDuration) {
				duration = minDuration;
			}
		

		
			if (scale < 1) {
				scale = scale * 2;
			}
		
		
			mapAside3MapFullscreen.addEventListener("click",function(){fullscreenIMG([mapAside3MapImg],0)});
		
			//mapAside3MapInner2.style.height = height+"px";
			//mapAside3MapInner2.style.width = width+"px";
			mapAside3MapInner2.setAttribute("data-scale",scale);
			mapAside3MapInner2.style.transitionDuration = duration+"s";
			mapAside3MapInner2.style.transitionProperty = "transform";
			
			var activeZoom;
		
			mapAside3MapZoomIn.addEventListener("click",function() {zoomIn(true)});
			mapAside3MapZoomReset.addEventListener("click",function() {zoomReset(false)});
			mapAside3MapOuter2.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){zoomIn(true)}else if(!delta.includes("-")){zoomReset(false)}});
			mapAside3MapOuter2.addEventListener("mouseleave", function() {zoomReset(undefined)});
			mapAside3MapOuter2.addEventListener("mouseenter", function() {zoomIn(undefined)});
			mapAside3MapOuter2.addEventListener("mousemove", function() {zoomPan()});



			
			function zoomIn(condition) {
				if (activeZoom) {
					$(mapAside3MapInner2).css({'transform': 'scale('+ $(mapAside3MapInner2).attr('data-scale') +')'});
				}
				if (condition != undefined) {
					activeZoom = condition;
				}
			}
			function zoomReset(condition) {
				$(mapAside3MapInner2).css({'transform': 'scale(1)'});
				if (condition != undefined) {
					activeZoom = condition;
				}
			}
			function zoomPan() {
				$(mapAside3MapInner2).css({'transform-origin': ((event.pageX - $(mapAside3MapOuter2).offset().left) / $(mapAside3MapOuter2).width()) * 100 + '% ' + ((event.pageY - $(mapAside3MapOuter2).offset().top) / $(mapAside3MapOuter2).height()) * 100 +'%'});
			}
		}
	

		mapAside1OptionsInput.click();
	}
}


