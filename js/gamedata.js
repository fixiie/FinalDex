function modalGamedata() {

    function openModal() {

        var modalTrigger = document.getElementsByClassName('gamedata-modal-open');


        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
                var modalWindow = document.getElementById("gamedata-modal-outer");

                $("body").addClass("modal-open");

                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {

        var closeButton = document.getElementsByClassName('gamedata-modal-close');
        var closeOverlay = document.getElementsByClassName('gamedata-modal-overlay');



        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode;

                $("body").removeClass("modal-open");
                showDefaults();

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }


        for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function() {
                var modalWindow = this.parentNode;

                $("body").removeClass("modal-open");
                showDefaults();

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }


    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }


    ready(openModal);
    ready(closeModal);


(function() {
    $('#map-panzoom').panzoom({
      $zoomIn: $(".zoom-in"),
      $zoomOut: $(".zoom-out"),
      $reset: $("#zoom-reset"),
      startTransform: 'scale(1)',
      duration: 200,
      easing: 'ease-in-out',
      increment: 0.5,
      minScale: 1,
      contain: 'invert'
    }).panzoom('zoom');
  })();

function zoomReset() {
    $('#zoom-reset').click();
}

function showDefaults() {
    sleep(500).then(() => {
        document.querySelector('.gamedata-nav').firstChild.nextElementSibling.click();
    });
}



$('.zoom-fullscreen').click(function(e){
	$('#map-contain').toggleClass('fullscreen');
    $('.zoom-fullscreen').toggleClass('fullscreen');
});

$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 27) {
	$('#map-contain').removeClass('fullscreen');
    $('.zoom-fullscreen').removeClass('fullscreen');
   }
});

$('#map-panzoom').mousedown(function(b){
	  if(b.which==1){}
	  else if(b.which==2) { 
		$('#map-contain').toggleClass('fullscreen');
        $('.zoom-fullscreen').toggleClass('fullscreen');
	  }
	  else if(b.which==3){}
});

$("#map-panzoom").mousewheel(function(turn, delta) {
	if (delta == 1) $('.zoom-in').click();
	else $('.zoom-out').click();

	return false;
});

$("#map-panzoom").dblclick(function(){
	$('.zoom-in').click();
});

function doubleClicker( handler ) {
	var timeout = 0, clicked = false;
	return function(e) {

		e.preventDefault();

		if( clicked ) {
			clearTimeout(timeout);
			clicked = false;
			return handler.apply( this, arguments );
		}
		else {
			clicked = true;
			timeout = setTimeout( function() {
				clicked = false;
			}, 300 );
		}
	};
}

$("#map-panzoom").contextmenu( doubleClicker( function(e) {
	$('.zoom-out').click();
}));

zoomReset();










$('body').click(function(event) {
    if (!$(event.target).closest('.map-up').length && !$(event.target).is('.map-up')) {
        $(".map-up").css("transform", "translateY(-50px)");
    }
    if (!$(event.target).closest('.map-down').length && !$(event.target).is('.map-down')) {
        $(".map-down").css("transform", "translateY(50px)");
    }
    if (!$(event.target).closest('.map-left').length && !$(event.target).is('.map-left')) {
        $(".map-left").css("transform", "translateX(-150px)");
    }
    if (!$(event.target).closest('.map-right').length && !$(event.target).is('.map-right')) {
        $(".map-right").css("transform", "translateX(150px)");
    }
});

var mapup = document.getElementsByClassName("map-up-toggle");
var i;

for (i = 0; i < mapup.length; i++) {
    mapup[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var mapupouter = this.parentElement;
        if (mapupouter.style.transform === "translateY(0px)") {
            mapupouter.style.transform = "translateY(-50px)";
        } else {
            mapupouter.style.transform = "translateY(0px)";
        }
    });
}


var mapdown = document.getElementsByClassName("map-down-toggle");
var i;

for (i = 0; i < mapdown.length; i++) {
    mapdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var mapdownouter = this.parentElement;
        if (mapdownouter.style.transform === "translateY(0px)") {
            mapdownouter.style.transform = "translateY(50px)";
        } else {
            mapdownouter.style.transform = "translateY(0px)";
        }
    });
}

var mapleft = document.getElementsByClassName("map-left-toggle");
var i;

for (i = 0; i < mapleft.length; i++) {
    mapleft[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var mapleftouter = this.parentElement;
        if (mapleftouter.style.transform === "translateX(0px)") {
            mapleftouter.style.transform = "translateX(-150px)";
        } else {
            mapleftouter.style.transform = "translateX(0px)";
        }
    });
}

var mapright = document.getElementsByClassName("map-right-toggle");
var i;

for (i = 0; i < mapright.length; i++) {
    mapright[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var maprightouter = this.parentElement;
        if (maprightouter.style.transform === "translateX(0px)") {
            maprightouter.style.transform = "translateX(150px)";
        } else {
            maprightouter.style.transform = "translateX(0px)";
        }
    });
}





document.querySelector(".map-cancel").addEventListener("click", mapCancel);
function mapCancel() {
    var mapCancelInput = document.querySelectorAll('#map-options input:checked');
    for (var q = 0; q < mapCancelInput.length; q++) {
        mapCancelInput[q].checked = false;
    }
    var mapMark = document.querySelectorAll('.info-img-mark');
    for (var q = 0; q < mapMark.length; q++) {
        mapMark[q].style.display = "none";
    }
}


$('#typechart-matrix-table td').bind('mouseover mouseleave', function (e) {
    var index = this.cellIndex;

    if (e.type == "mouseover") {
        $(this).parent().addClass('highlight');
        $(this).parents('table').find('tr').each(function () {
            $(this).find('th').eq(index).addClass('highlight');
        });
    } else {
        $(this).parent().removeClass('highlight');
        $(this).parents('table').find('tr').each(function () {
            $(this).find('th').eq(index).removeClass('highlight');
        });
    }
});


}


function typeSwitch(type) {

    var type;
    var typeTitle = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();


    var img = document.querySelectorAll(".type-againstopposed data img");
    for (var i = 0; i < img.length; i++) {
        img[i].remove()
    }
    var brk = document.querySelectorAll(".type-againstopposed data br");
    for (var i = 0; i < brk.length; i++) {
        brk[i].remove()
    }
    var spn = document.querySelectorAll(".type-againstopposed data span");
    for (var i = 0; i < spn.length; i++) {
        spn[i].remove()
    }

    
    let typetitle = document.querySelector(".type-description-title h1");
    let typeicon = document.querySelector(".type-symbol");
    
    let againstEffective = document.querySelector(".type-against .type-effective-content");
    let againstIneffective = document.querySelector(".type-against .type-ineffective-content");
    let againstImmune = document.querySelector(".type-against .type-immune-content");
    let againstDefault = document.querySelector(".type-against .type-default-content");

    let opposedEffective = document.querySelector(".type-opposed .type-effective-content");
    let opposedIneffective = document.querySelector(".type-opposed .type-ineffective-content");
    let opposedImmune = document.querySelector(".type-opposed .type-immune-content");
    let opposedDefault = document.querySelector(".type-opposed .type-default-content");
    
    typetitle.innerText = typeTitle;
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/' + typeTitle + '.png';
    typeicon.title = typetitle.innerText;

    var againstEffectiveBreak = document.createElement("br");
    var againstIneffectiveBreak = document.createElement("br");
    var againstImmuneBreak = document.createElement("br");
    var againstDefaultBreak = document.createElement("br");

    var opposedEffectiveBreak = document.createElement("br");
    var opposedIneffectiveBreak = document.createElement("br");
    var opposedImmuneBreak = document.createElement("br");
    var opposedDefaultBreak = document.createElement("br");

    var selectors = document.querySelectorAll(".type-selector label");
    for (var i = 0; i < selectors.length; i++) {
        if (i == 0) {
            selectors[i].setAttribute("title","When used on a " + typeTitle + "-type Pokémon");
        }
        if (i == 1) {
            selectors[i].setAttribute("title","When used by a " + typeTitle + "-type Move");
        }
    }

    againstEffective.appendChild(againstEffectiveBreak);
    againstIneffective.appendChild(againstIneffectiveBreak);
    againstImmune.appendChild(againstImmuneBreak);
    againstDefault.appendChild(againstDefaultBreak);

    opposedEffective.appendChild(opposedEffectiveBreak);
    opposedIneffective.appendChild(opposedIneffectiveBreak);
    opposedImmune.appendChild(opposedImmuneBreak);
    opposedDefault.appendChild(opposedDefaultBreak);



var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[0]).toString().split(",");
var index = finaldataTypeChartTitle.indexOf(type);






for (var i = 0; i < finaldataTypeChart.length; i++) {

    if (finaldataTypeChart[i][type] == "0×") {
        var ImmunityType = document.createElement("img");
        ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        ImmunityType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        ImmunityType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        ImmunityType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        againstImmune.appendChild(ImmunityType);

        var ImmunityTypeText = document.createElement("span");
        ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        againstImmune.appendChild(ImmunityTypeText);

        againstImmuneBreak.remove();
    }
    if (finaldataTypeChart[i][type] == "½×") {
        var IneffectivenessType = document.createElement("img");
        IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        IneffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        IneffectivenessType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        IneffectivenessType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        againstIneffective.appendChild(IneffectivenessType);

        var IneffectivenessTypeText = document.createElement("span");
        IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        againstIneffective.appendChild(IneffectivenessTypeText);

        againstIneffectiveBreak.remove();
    }
    if (finaldataTypeChart[i][type] == "1×") {
        var DefaultType = document.createElement("img");
        DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        DefaultType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        DefaultType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        DefaultType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        againstDefault.appendChild(DefaultType);

        var DefaultTypeText = document.createElement("span");
        DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        againstDefault.appendChild(DefaultTypeText);

        againstDefaultBreak.remove();
    }
    if (finaldataTypeChart[i][type] == "2×") {
        var EffectivenessType = document.createElement("img");
        EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        EffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        EffectivenessType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        EffectivenessType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        againstEffective.appendChild(EffectivenessType);

        var EffectivenessTypeText = document.createElement("span");
        EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        againstEffective.appendChild(EffectivenessTypeText);

        againstEffectiveBreak.remove();
    }
}


for (var i = 0; i < finaldataTypeChart.length; i++) {
    
    if (finaldataTypeChart[index][Object.getOwnPropertyNames(finaldataTypeChart[0])[i]] == "0×") {
        var ImmunityType = document.createElement("img");
        ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        ImmunityType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        ImmunityType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        ImmunityType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        opposedImmune.appendChild(ImmunityType);

        var ImmunityTypeText = document.createElement("span");
        ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        opposedImmune.appendChild(ImmunityTypeText);

        opposedImmuneBreak.remove();
    }

    if (finaldataTypeChart[index][Object.getOwnPropertyNames(finaldataTypeChart[0])[i]] == "½×") {
        var IneffectivenessType = document.createElement("img");
        IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        IneffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        IneffectivenessType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        IneffectivenessType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        opposedIneffective.appendChild(IneffectivenessType);

        var IneffectivenessTypeText = document.createElement("span");
        IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        opposedIneffective.appendChild(IneffectivenessTypeText);

        opposedIneffectiveBreak.remove();
    }

    if (finaldataTypeChart[index][Object.getOwnPropertyNames(finaldataTypeChart[0])[i]] == "1×") {
        var DefaultType = document.createElement("img");
        DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        DefaultType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        DefaultType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        DefaultType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        opposedDefault.appendChild(DefaultType);

        var DefaultTypeText = document.createElement("span");
        DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        opposedDefault.appendChild(DefaultTypeText);

        opposedDefaultBreak.remove();
    }

    if (finaldataTypeChart[index][Object.getOwnPropertyNames(finaldataTypeChart[0])[i]] == "2×") {
        var EffectivenessType = document.createElement("img");
        EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
        EffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
        EffectivenessType.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
        EffectivenessType.setAttribute("onclick",'typeSwitch("'+finaldataTypeChartTitle[i]+'")');
        opposedEffective.appendChild(EffectivenessType);

        var EffectivenessTypeText = document.createElement("span");
        EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
        opposedEffective.appendChild(EffectivenessTypeText);

        opposedEffectiveBreak.remove();
    }
    
}



}
