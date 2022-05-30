function memoryCheckbox(what) {
	var what;
	var cbstate;
	cbstate = JSON.parse(localStorage["CBState"] || "{}");
	if(what == "contain") {
		for(var i in cbstate) {
			var el = document.querySelector('#pokémon-outer > div input[name="' + i + '"]');
			if(el) el.click();
		}
		var cb = document.querySelectorAll("#pokémon-outer > div .save-cb-state");
	} else {
		for(var i in cbstate) {
			var el = document.querySelector('input[name="' + i + '"]');
			if(el) el.click();
		}
		var cb = document.getElementsByClassName("save-cb-state");
	}
	for(var i = 0; i < cb.length; i++) {
		cb[i].addEventListener("click", function(evt) {
			if(this.checked) {
				cbstate[this.name] = true;
			} else if(cbstate[this.name]) {
				delete cbstate[this.name];
			}
			localStorage.CBState = JSON.stringify(cbstate);
		});
	}
}

function memoryRadio() {
	var radios1 = document.getElementsByName("finaldex-imgtype" + GameID);
	var val1 = localStorage.getItem("finaldex-imgtype" + GameID);
	for(var i = 0; i < radios1.length; i++) {
		if(radios1[i].value == val1) {
			radios1[i].click();
		} else if(val1 == null) {
			radios1[0].click();
		}
	}
	$('input[name="finaldex-imgtype' + GameID + '"]').on("change", function() {
		localStorage.setItem("finaldex-imgtype" + GameID, $(this).val());
	});
	var radios2 = document.getElementsByName("finaldex-dexswitch" + GameID);
	var val2 = localStorage.getItem("finaldex-dexswitch" + GameID);
	for(var i = 0; i < radios2.length; i++) {
		if(radios2[i].value == val2) {
			radios2[i].click();
		} else if(val2 == null) {
			radios2[radios2.length - 1].click();
		}
	}
	$('input[name="finaldex-dexswitch' + GameID + '"]').on("change", function() {
		localStorage.setItem("finaldex-dexswitch" + GameID, $(this).val());
	});
}

function memoryRange() {
	function setUpEventHandlers() {
		$(".save-ra-state").change(function() {
			localStorage[this.id] = $(this).val();
		});
	}

	function loadLocalStorageValues() {
		$(".save-ra-state").each(function() {
			if(typeof localStorage[this.id] !== "undefined") {
				$(this).val(localStorage[this.id]);
			}
		});
	}
	$(function() {
		setUpEventHandlers();
		loadLocalStorageValues();
        if (document.getElementById("resize") != undefined) {
            document.getElementById("resize").click();
        }
	});
}