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
        document.querySelector('.gamedata-nav input[value="1"]').click();
    });
}



function backgroundChange() {

let totalSizeCount = 30;
let totalPosCount = 5;
let totalPosYCount = 5;

let groundArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 143, 147, 148, 149, 150, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 167, 168, 170, 171, 172, 173, 174, 175, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 190, 191, 192, 194, 195, 196, 197, 198, 199, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 268, 270, 271, 272, 273, 274, 275, 276, 277, 280, 281, 282, 283, 285, 286, 287, 288, 289, 290, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 331, 332, 335, 336, 339, 340, 341, 342, 343, 345, 346, 347, 348, 349, 350, 351, 352, 354, 355, 356, 357, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 376, 377, 378, 379, 382, 383, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 417, 418, 419, 420, 421, 422, 423, 424, 427, 428, 430, 431, 432, 434, 435, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 459, 460, 461, 463, 464, 465, 466, 467, 470, 471, 473, 474, 475, 476, 477, 478, 480, 481, 482, 483, 484, 485, 486, 487, 488, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 519, 520, 521, 522, 523, 524, 525, 526, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 562, 563, 564, 565, 566, 568, 569, 570, 571, 572, 573, 574, 575, 576, 580, 581, 582, 583, 584, 585, 586, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 602, 603, 604, 605, 606, 607, 610, 611, 612, 613, 614, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 629, 630, 631, 632, 633, 634, 636, 638, 639, 640, 643, 644, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 664, 665, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 687, 688, 689, 690, 692, 693, 694, 695, 696, 697, 698, 699, 700, 702, 704, 705, 706, 707, 709, 710, 711, 712, 713, 715, 716, 718, 719, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 732, 733, 734, 735, 736, 737, 739, 740, 741, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 775, 776, 777, 778, 779, 780, 782, 783, 784, 791, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 827, 828, 829, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 869, 870, 871, 872, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 888, 889, 891, 892, 893, 895, 896, 897]
let flyArray = [12, 17, 18, 22, 41, 42, 49, 63, 65, 81, 82, 92, 93, 109, 110, 142, 144, 145, 146, 151, 166, 169, 176, 187, 188, 189, 193, 200, 226, 227, 249, 250, 251, 267, 269, 278, 279, 284, 291, 292, 330, 333, 334, 337, 338, 344, 353, 358, 374, 375, 380, 381, 384, 414, 415, 416, 425, 426, 429, 433, 436, 437, 457, 458, 462, 468, 469, 472, 479, 489, 490, 491, 518, 527, 528, 546, 561, 567, 577, 578, 579, 587, 599, 600, 601, 608, 609, 615, 628, 635, 637, 641, 642, 645, 663, 666, 686, 691, 701, 703, 708, 714, 717, 720, 731, 738, 742, 743, 774, 781, 785, 786, 787, 788, 789, 790, 792, 803, 804, 826, 830, 841, 868, 873, 885, 886, 887, 890, 894, 898];


let path1 = document.querySelector('.gamedata-modal-background-1');
let path2 = document.querySelector('.gamedata-modal-background-2');
let path3 = document.querySelector('.gamedata-modal-background-3');
let path4 = document.querySelector('.gamedata-modal-background-4');
let path5 = document.querySelector('.gamedata-modal-background-5');
let path6 = document.querySelector('.gamedata-modal-background-6');
let path7 = document.querySelector('.gamedata-modal-background-7');

let num1 = groundArray[Math.floor(Math.random()*groundArray.length)];
let num2 = flyArray[Math.floor(Math.random()*flyArray.length)];
let num3 = groundArray[Math.floor(Math.random()*groundArray.length)];
let num4 = groundArray[Math.floor(Math.random()*groundArray.length)];
let num5 = flyArray[Math.floor(Math.random()*flyArray.length)];
let num6 = flyArray[Math.floor(Math.random()*flyArray.length)];
let num7 = groundArray[Math.floor(Math.random()*groundArray.length)];

let size1 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size2 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size3 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size4 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size5 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size6 = Math.ceil( Math.random() * totalSizeCount) + 120;
let size7 = Math.ceil( Math.random() * totalSizeCount) + 120;

let pos1 = Math.ceil( Math.random() * totalPosCount) + 94;
let pos2 = Math.ceil( Math.random() * totalPosCount) + 80;
let pos3 = Math.ceil( Math.random() * totalPosCount) + 66;
let pos4 = Math.ceil( Math.random() * totalPosCount) + 48;
let pos5 = Math.ceil( Math.random() * totalPosCount) + 35;
let pos6 = Math.ceil( Math.random() * totalPosCount) + 23;
let pos7 = Math.ceil( Math.random() * totalPosCount) + 2;

let pos2Y = Math.ceil( Math.random() * totalPosYCount) + 92;
let pos5Y = Math.ceil( Math.random() * totalPosYCount) + 92;
let pos6Y = Math.ceil( Math.random() * totalPosYCount) + 92;

path1.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num1 + ".png'";
path2.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num2 + ".png'";
path3.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num3 + ".png'";
path4.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num4 + ".png'";
path5.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num5 + ".png'";
path6.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num6 + ".png'";
path7.style.background = "url('./media/Images/Pokémon/Art/PNG/HOME/" + num7 + ".png'";

path1.style.backgroundSize = size1 + "px auto";
path2.style.backgroundSize = size2 + "px auto";
path3.style.backgroundSize = size3 + "px auto";
path4.style.backgroundSize = size4 + "px auto";
path5.style.backgroundSize = size5 + "px auto";
path6.style.backgroundSize = size6 + "px auto";
path7.style.backgroundSize = size7 + "px auto";

path1.style.backgroundPosition = pos1 + "% 99%";
path2.style.backgroundPosition = pos2 + "%" + pos2Y + "%";
path3.style.backgroundPosition = pos3 + "% 99%";
path4.style.backgroundPosition = pos4 + "% 99%";
path5.style.backgroundPosition = pos5 + "%" + pos5Y + "%";
path6.style.backgroundPosition = pos6 + "%" + pos6Y + "%";
path7.style.backgroundPosition = pos7 + "% 99%";

}

function random(){
let i  = Math.floor(Math.random()*8);
if(i<=0) return random();
return i;
}

function randomBackgroundChange(){
let i = random();
eval('backgroundChange()');
}

randomBackgroundChange();











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



function typeNormal() {

    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Normal';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Normal.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingNormal.length; i++) {
        var TypeChartAttackingNormalEffective = ~~Boolean(fdataTypeChartAttackingNormal[i] == "2×");
        var TypeChartAttackingNormalEffectiveResult = TypeChartAttackingNormalEffective + TypeChartAttackingNormalEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingNormalIneffective = ~~Boolean(fdataTypeChartAttackingNormal[i] == "½×");
        var TypeChartAttackingNormalIneffectiveResult = TypeChartAttackingNormalIneffective + TypeChartAttackingNormalIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingNormalImmune = ~~Boolean(fdataTypeChartAttackingNormal[i] == "0×");
        var TypeChartAttackingNormalImmuneResult = TypeChartAttackingNormalImmune + TypeChartAttackingNormalImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingNormalDefault = ~~Boolean(fdataTypeChartAttackingNormal[i] == "1×");
        var TypeChartAttackingNormalDefaultResult = TypeChartAttackingNormalDefault + TypeChartAttackingNormalDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingNormalEffectiveResult + '.png" title="' + TypeChartAttackingNormalEffectiveResult + '" onclick="type' + TypeChartAttackingNormalEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingNormalIneffectiveResult + '.png" title="' + TypeChartAttackingNormalIneffectiveResult + '" onclick="type' + TypeChartAttackingNormalIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingNormalImmuneResult + '.png" title="' + TypeChartAttackingNormalImmuneResult + '" onclick="type' + TypeChartAttackingNormalImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingNormalDefaultResult + '.png" title="' + TypeChartAttackingNormalDefaultResult + '" onclick="type' + TypeChartAttackingNormalDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeFighting() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Fighting';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Fighting.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingFighting.length; i++) {
        var TypeChartAttackingFightingEffective = ~~Boolean(fdataTypeChartAttackingFighting[i] == "2×");
        var TypeChartAttackingFightingEffectiveResult = TypeChartAttackingFightingEffective + TypeChartAttackingFightingEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFightingIneffective = ~~Boolean(fdataTypeChartAttackingFighting[i] == "½×");
        var TypeChartAttackingFightingIneffectiveResult = TypeChartAttackingFightingIneffective + TypeChartAttackingFightingIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFightingImmune = ~~Boolean(fdataTypeChartAttackingFighting[i] == "0×");
        var TypeChartAttackingFightingImmuneResult = TypeChartAttackingFightingImmune + TypeChartAttackingFightingImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingFightingDefault = ~~Boolean(fdataTypeChartAttackingFighting[i] == "1×");
        var TypeChartAttackingFightingDefaultResult = TypeChartAttackingFightingDefault + TypeChartAttackingFightingDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingFightingEffectiveResult + '.png" title="' + TypeChartAttackingFightingEffectiveResult + '" onclick="type' + TypeChartAttackingFightingEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingFightingIneffectiveResult + '.png" title="' + TypeChartAttackingFightingIneffectiveResult + '" onclick="type' + TypeChartAttackingFightingIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingFightingImmuneResult + '.png" title="' + TypeChartAttackingFightingImmuneResult + '" onclick="type' + TypeChartAttackingFightingImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingFightingDefaultResult + '.png" title="' + TypeChartAttackingFightingDefaultResult + '" onclick="type' + TypeChartAttackingFightingDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeFlying() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Flying';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Flying.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingFlying.length; i++) {
        var TypeChartAttackingFlyingEffective = ~~Boolean(fdataTypeChartAttackingFlying[i] == "2×");
        var TypeChartAttackingFlyingEffectiveResult = TypeChartAttackingFlyingEffective + TypeChartAttackingFlyingEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFlyingIneffective = ~~Boolean(fdataTypeChartAttackingFlying[i] == "½×");
        var TypeChartAttackingFlyingIneffectiveResult = TypeChartAttackingFlyingIneffective + TypeChartAttackingFlyingIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFlyingImmune = ~~Boolean(fdataTypeChartAttackingFlying[i] == "0×");
        var TypeChartAttackingFlyingImmuneResult = TypeChartAttackingFlyingImmune + TypeChartAttackingFlyingImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingFlyingDefault = ~~Boolean(fdataTypeChartAttackingFlying[i] == "1×");
        var TypeChartAttackingFlyingDefaultResult = TypeChartAttackingFlyingDefault + TypeChartAttackingFlyingDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingFlyingEffectiveResult + '.png" title="' + TypeChartAttackingFlyingEffectiveResult + '" onclick="type' + TypeChartAttackingFlyingEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingFlyingIneffectiveResult + '.png" title="' + TypeChartAttackingFlyingIneffectiveResult + '" onclick="type' + TypeChartAttackingFlyingIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingFlyingImmuneResult + '.png" title="' + TypeChartAttackingFlyingImmuneResult + '" onclick="type' + TypeChartAttackingFlyingImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingFlyingDefaultResult + '.png" title="' + TypeChartAttackingFlyingDefaultResult + '" onclick="type' + TypeChartAttackingFlyingDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typePoison() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Poison';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Poison.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingPoison.length; i++) {
        var TypeChartAttackingPoisonEffective = ~~Boolean(fdataTypeChartAttackingPoison[i] == "2×");
        var TypeChartAttackingPoisonEffectiveResult = TypeChartAttackingPoisonEffective + TypeChartAttackingPoisonEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingPoisonIneffective = ~~Boolean(fdataTypeChartAttackingPoison[i] == "½×");
        var TypeChartAttackingPoisonIneffectiveResult = TypeChartAttackingPoisonIneffective + TypeChartAttackingPoisonIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingPoisonImmune = ~~Boolean(fdataTypeChartAttackingPoison[i] == "0×");
        var TypeChartAttackingPoisonImmuneResult = TypeChartAttackingPoisonImmune + TypeChartAttackingPoisonImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingPoisonDefault = ~~Boolean(fdataTypeChartAttackingPoison[i] == "1×");
        var TypeChartAttackingPoisonDefaultResult = TypeChartAttackingPoisonDefault + TypeChartAttackingPoisonDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingPoisonEffectiveResult + '.png" title="' + TypeChartAttackingPoisonEffectiveResult + '" onclick="type' + TypeChartAttackingPoisonEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingPoisonIneffectiveResult + '.png" title="' + TypeChartAttackingPoisonIneffectiveResult + '" onclick="type' + TypeChartAttackingPoisonIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingPoisonImmuneResult + '.png" title="' + TypeChartAttackingPoisonImmuneResult + '" onclick="type' + TypeChartAttackingPoisonImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingPoisonDefaultResult + '.png" title="' + TypeChartAttackingPoisonDefaultResult + '" onclick="type' + TypeChartAttackingPoisonDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeGround() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Ground';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Ground.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingGround.length; i++) {
        var TypeChartAttackingGroundEffective = ~~Boolean(fdataTypeChartAttackingGround[i] == "2×");
        var TypeChartAttackingGroundEffectiveResult = TypeChartAttackingGroundEffective + TypeChartAttackingGroundEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGroundIneffective = ~~Boolean(fdataTypeChartAttackingGround[i] == "½×");
        var TypeChartAttackingGroundIneffectiveResult = TypeChartAttackingGroundIneffective + TypeChartAttackingGroundIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGroundImmune = ~~Boolean(fdataTypeChartAttackingGround[i] == "0×");
        var TypeChartAttackingGroundImmuneResult = TypeChartAttackingGroundImmune + TypeChartAttackingGroundImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingGroundDefault = ~~Boolean(fdataTypeChartAttackingGround[i] == "1×");
        var TypeChartAttackingGroundDefaultResult = TypeChartAttackingGroundDefault + TypeChartAttackingGroundDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingGroundEffectiveResult + '.png" title="' + TypeChartAttackingGroundEffectiveResult + '" onclick="type' + TypeChartAttackingGroundEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingGroundIneffectiveResult + '.png" title="' + TypeChartAttackingGroundIneffectiveResult + '" onclick="type' + TypeChartAttackingGroundIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingGroundImmuneResult + '.png" title="' + TypeChartAttackingGroundImmuneResult + '" onclick="type' + TypeChartAttackingGroundImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingGroundDefaultResult + '.png" title="' + TypeChartAttackingGroundDefaultResult + '" onclick="type' + TypeChartAttackingGroundDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}


function typeRock() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Rock';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Rock.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingRock.length; i++) {
        var TypeChartAttackingRockEffective = ~~Boolean(fdataTypeChartAttackingRock[i] == "2×");
        var TypeChartAttackingRockEffectiveResult = TypeChartAttackingRockEffective + TypeChartAttackingRockEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingRockIneffective = ~~Boolean(fdataTypeChartAttackingRock[i] == "½×");
        var TypeChartAttackingRockIneffectiveResult = TypeChartAttackingRockIneffective + TypeChartAttackingRockIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingRockImmune = ~~Boolean(fdataTypeChartAttackingRock[i] == "0×");
        var TypeChartAttackingRockImmuneResult = TypeChartAttackingRockImmune + TypeChartAttackingRockImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingRockDefault = ~~Boolean(fdataTypeChartAttackingRock[i] == "1×");
        var TypeChartAttackingRockDefaultResult = TypeChartAttackingRockDefault + TypeChartAttackingRockDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingRockEffectiveResult + '.png" title="' + TypeChartAttackingRockEffectiveResult + '" onclick="type' + TypeChartAttackingRockEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingRockIneffectiveResult + '.png" title="' + TypeChartAttackingRockIneffectiveResult + '" onclick="type' + TypeChartAttackingRockIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingRockImmuneResult + '.png" title="' + TypeChartAttackingRockImmuneResult + '" onclick="type' + TypeChartAttackingRockImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingRockDefaultResult + '.png" title="' + TypeChartAttackingRockDefaultResult + '" onclick="type' + TypeChartAttackingRockDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeBug() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Bug';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Bug.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingBug.length; i++) {
        var TypeChartAttackingBugEffective = ~~Boolean(fdataTypeChartAttackingBug[i] == "2×");
        var TypeChartAttackingBugEffectiveResult = TypeChartAttackingBugEffective + TypeChartAttackingBugEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingBugIneffective = ~~Boolean(fdataTypeChartAttackingBug[i] == "½×");
        var TypeChartAttackingBugIneffectiveResult = TypeChartAttackingBugIneffective + TypeChartAttackingBugIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingBugImmune = ~~Boolean(fdataTypeChartAttackingBug[i] == "0×");
        var TypeChartAttackingBugImmuneResult = TypeChartAttackingBugImmune + TypeChartAttackingBugImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingBugDefault = ~~Boolean(fdataTypeChartAttackingBug[i] == "1×");
        var TypeChartAttackingBugDefaultResult = TypeChartAttackingBugDefault + TypeChartAttackingBugDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingBugEffectiveResult + '.png" title="' + TypeChartAttackingBugEffectiveResult + '" onclick="type' + TypeChartAttackingBugEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingBugIneffectiveResult + '.png" title="' + TypeChartAttackingBugIneffectiveResult + '" onclick="type' + TypeChartAttackingBugIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingBugImmuneResult + '.png" title="' + TypeChartAttackingBugImmuneResult + '" onclick="type' + TypeChartAttackingBugImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingBugDefaultResult + '.png" title="' + TypeChartAttackingBugDefaultResult + '" onclick="type' + TypeChartAttackingBugDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeGhost() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Ghost';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Ghost.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingGhost.length; i++) {
        var TypeChartAttackingGhostEffective = ~~Boolean(fdataTypeChartAttackingGhost[i] == "2×");
        var TypeChartAttackingGhostEffectiveResult = TypeChartAttackingGhostEffective + TypeChartAttackingGhostEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGhostIneffective = ~~Boolean(fdataTypeChartAttackingGhost[i] == "½×");
        var TypeChartAttackingGhostIneffectiveResult = TypeChartAttackingGhostIneffective + TypeChartAttackingGhostIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGhostImmune = ~~Boolean(fdataTypeChartAttackingGhost[i] == "0×");
        var TypeChartAttackingGhostImmuneResult = TypeChartAttackingGhostImmune + TypeChartAttackingGhostImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingGhostDefault = ~~Boolean(fdataTypeChartAttackingGhost[i] == "1×");
        var TypeChartAttackingGhostDefaultResult = TypeChartAttackingGhostDefault + TypeChartAttackingGhostDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingGhostEffectiveResult + '.png" title="' + TypeChartAttackingGhostEffectiveResult + '" onclick="type' + TypeChartAttackingGhostEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingGhostIneffectiveResult + '.png" title="' + TypeChartAttackingGhostIneffectiveResult + '" onclick="type' + TypeChartAttackingGhostIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingGhostImmuneResult + '.png" title="' + TypeChartAttackingGhostImmuneResult + '" onclick="type' + TypeChartAttackingGhostImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingGhostDefaultResult + '.png" title="' + TypeChartAttackingGhostDefaultResult + '" onclick="type' + TypeChartAttackingGhostDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeSteel() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Steel';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Steel.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingSteel.length; i++) {
        var TypeChartAttackingSteelEffective = ~~Boolean(fdataTypeChartAttackingSteel[i] == "2×");
        var TypeChartAttackingSteelEffectiveResult = TypeChartAttackingSteelEffective + TypeChartAttackingSteelEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingSteelIneffective = ~~Boolean(fdataTypeChartAttackingSteel[i] == "½×");
        var TypeChartAttackingSteelIneffectiveResult = TypeChartAttackingSteelIneffective + TypeChartAttackingSteelIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingSteelImmune = ~~Boolean(fdataTypeChartAttackingSteel[i] == "0×");
        var TypeChartAttackingSteelImmuneResult = TypeChartAttackingSteelImmune + TypeChartAttackingSteelImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingSteelDefault = ~~Boolean(fdataTypeChartAttackingSteel[i] == "1×");
        var TypeChartAttackingSteelDefaultResult = TypeChartAttackingSteelDefault + TypeChartAttackingSteelDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingSteelEffectiveResult + '.png" title="' + TypeChartAttackingSteelEffectiveResult + '" onclick="type' + TypeChartAttackingSteelEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingSteelIneffectiveResult + '.png" title="' + TypeChartAttackingSteelIneffectiveResult + '" onclick="type' + TypeChartAttackingSteelIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingSteelImmuneResult + '.png" title="' + TypeChartAttackingSteelImmuneResult + '" onclick="type' + TypeChartAttackingSteelImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingSteelDefaultResult + '.png" title="' + TypeChartAttackingSteelDefaultResult + '" onclick="type' + TypeChartAttackingSteelDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeFire() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Fire';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Fire.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingFire.length; i++) {
        var TypeChartAttackingFireEffective = ~~Boolean(fdataTypeChartAttackingFire[i] == "2×");
        var TypeChartAttackingFireEffectiveResult = TypeChartAttackingFireEffective + TypeChartAttackingFireEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFireIneffective = ~~Boolean(fdataTypeChartAttackingFire[i] == "½×");
        var TypeChartAttackingFireIneffectiveResult = TypeChartAttackingFireIneffective + TypeChartAttackingFireIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFireImmune = ~~Boolean(fdataTypeChartAttackingFire[i] == "0×");
        var TypeChartAttackingFireImmuneResult = TypeChartAttackingFireImmune + TypeChartAttackingFireImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingFireDefault = ~~Boolean(fdataTypeChartAttackingFire[i] == "1×");
        var TypeChartAttackingFireDefaultResult = TypeChartAttackingFireDefault + TypeChartAttackingFireDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingFireEffectiveResult + '.png" title="' + TypeChartAttackingFireEffectiveResult + '" onclick="type' + TypeChartAttackingFireEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingFireIneffectiveResult + '.png" title="' + TypeChartAttackingFireIneffectiveResult + '" onclick="type' + TypeChartAttackingFireIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingFireImmuneResult + '.png" title="' + TypeChartAttackingFireImmuneResult + '" onclick="type' + TypeChartAttackingFireImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingFireDefaultResult + '.png" title="' + TypeChartAttackingFireDefaultResult + '" onclick="type' + TypeChartAttackingFireDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeWater() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Water';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Water.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingWater.length; i++) {
        var TypeChartAttackingWaterEffective = ~~Boolean(fdataTypeChartAttackingWater[i] == "2×");
        var TypeChartAttackingWaterEffectiveResult = TypeChartAttackingWaterEffective + TypeChartAttackingWaterEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingWaterIneffective = ~~Boolean(fdataTypeChartAttackingWater[i] == "½×");
        var TypeChartAttackingWaterIneffectiveResult = TypeChartAttackingWaterIneffective + TypeChartAttackingWaterIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingWaterImmune = ~~Boolean(fdataTypeChartAttackingWater[i] == "0×");
        var TypeChartAttackingWaterImmuneResult = TypeChartAttackingWaterImmune + TypeChartAttackingWaterImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingWaterDefault = ~~Boolean(fdataTypeChartAttackingWater[i] == "1×");
        var TypeChartAttackingWaterDefaultResult = TypeChartAttackingWaterDefault + TypeChartAttackingWaterDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingWaterEffectiveResult + '.png" title="' + TypeChartAttackingWaterEffectiveResult + '" onclick="type' + TypeChartAttackingWaterEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingWaterIneffectiveResult + '.png" title="' + TypeChartAttackingWaterIneffectiveResult + '" onclick="type' + TypeChartAttackingWaterIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingWaterImmuneResult + '.png" title="' + TypeChartAttackingWaterImmuneResult + '" onclick="type' + TypeChartAttackingWaterImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingWaterDefaultResult + '.png" title="' + TypeChartAttackingWaterDefaultResult + '" onclick="type' + TypeChartAttackingWaterDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeGrass() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Grass';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Grass.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingGrass.length; i++) {
        var TypeChartAttackingGrassEffective = ~~Boolean(fdataTypeChartAttackingGrass[i] == "2×");
        var TypeChartAttackingGrassEffectiveResult = TypeChartAttackingGrassEffective + TypeChartAttackingGrassEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGrassIneffective = ~~Boolean(fdataTypeChartAttackingGrass[i] == "½×");
        var TypeChartAttackingGrassIneffectiveResult = TypeChartAttackingGrassIneffective + TypeChartAttackingGrassIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingGrassImmune = ~~Boolean(fdataTypeChartAttackingGrass[i] == "0×");
        var TypeChartAttackingGrassImmuneResult = TypeChartAttackingGrassImmune + TypeChartAttackingGrassImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingGrassDefault = ~~Boolean(fdataTypeChartAttackingGrass[i] == "1×");
        var TypeChartAttackingGrassDefaultResult = TypeChartAttackingGrassDefault + TypeChartAttackingGrassDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingGrassEffectiveResult + '.png" title="' + TypeChartAttackingGrassEffectiveResult + '" onclick="type' + TypeChartAttackingGrassEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingGrassIneffectiveResult + '.png" title="' + TypeChartAttackingGrassIneffectiveResult + '" onclick="type' + TypeChartAttackingGrassIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingGrassImmuneResult + '.png" title="' + TypeChartAttackingGrassImmuneResult + '" onclick="type' + TypeChartAttackingGrassImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingGrassDefaultResult + '.png" title="' + TypeChartAttackingGrassDefaultResult + '" onclick="type' + TypeChartAttackingGrassDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeElectric() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Electric';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Electric.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingElectric.length; i++) {
        var TypeChartAttackingElectricEffective = ~~Boolean(fdataTypeChartAttackingElectric[i] == "2×");
        var TypeChartAttackingElectricEffectiveResult = TypeChartAttackingElectricEffective + TypeChartAttackingElectricEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingElectricIneffective = ~~Boolean(fdataTypeChartAttackingElectric[i] == "½×");
        var TypeChartAttackingElectricIneffectiveResult = TypeChartAttackingElectricIneffective + TypeChartAttackingElectricIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingElectricImmune = ~~Boolean(fdataTypeChartAttackingElectric[i] == "0×");
        var TypeChartAttackingElectricImmuneResult = TypeChartAttackingElectricImmune + TypeChartAttackingElectricImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingElectricDefault = ~~Boolean(fdataTypeChartAttackingElectric[i] == "1×");
        var TypeChartAttackingElectricDefaultResult = TypeChartAttackingElectricDefault + TypeChartAttackingElectricDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingElectricEffectiveResult + '.png" title="' + TypeChartAttackingElectricEffectiveResult + '" onclick="type' + TypeChartAttackingElectricEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingElectricIneffectiveResult + '.png" title="' + TypeChartAttackingElectricIneffectiveResult + '" onclick="type' + TypeChartAttackingElectricIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingElectricImmuneResult + '.png" title="' + TypeChartAttackingElectricImmuneResult + '" onclick="type' + TypeChartAttackingElectricImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingElectricDefaultResult + '.png" title="' + TypeChartAttackingElectricDefaultResult + '" onclick="type' + TypeChartAttackingElectricDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typePsychic() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Psychic';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Psychic.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingPsychic.length; i++) {
        var TypeChartAttackingPsychicEffective = ~~Boolean(fdataTypeChartAttackingPsychic[i] == "2×");
        var TypeChartAttackingPsychicEffectiveResult = TypeChartAttackingPsychicEffective + TypeChartAttackingPsychicEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingPsychicIneffective = ~~Boolean(fdataTypeChartAttackingPsychic[i] == "½×");
        var TypeChartAttackingPsychicIneffectiveResult = TypeChartAttackingPsychicIneffective + TypeChartAttackingPsychicIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingPsychicImmune = ~~Boolean(fdataTypeChartAttackingPsychic[i] == "0×");
        var TypeChartAttackingPsychicImmuneResult = TypeChartAttackingPsychicImmune + TypeChartAttackingPsychicImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingPsychicDefault = ~~Boolean(fdataTypeChartAttackingPsychic[i] == "1×");
        var TypeChartAttackingPsychicDefaultResult = TypeChartAttackingPsychicDefault + TypeChartAttackingPsychicDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingPsychicEffectiveResult + '.png" title="' + TypeChartAttackingPsychicEffectiveResult + '" onclick="type' + TypeChartAttackingPsychicEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingPsychicIneffectiveResult + '.png" title="' + TypeChartAttackingPsychicIneffectiveResult + '" onclick="type' + TypeChartAttackingPsychicIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingPsychicImmuneResult + '.png" title="' + TypeChartAttackingPsychicImmuneResult + '" onclick="type' + TypeChartAttackingPsychicImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingPsychicDefaultResult + '.png" title="' + TypeChartAttackingPsychicDefaultResult + '" onclick="type' + TypeChartAttackingPsychicDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeIce() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Ice';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Ice.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When an " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingIce.length; i++) {
        var TypeChartAttackingIceEffective = ~~Boolean(fdataTypeChartAttackingIce[i] == "2×");
        var TypeChartAttackingIceEffectiveResult = TypeChartAttackingIceEffective + TypeChartAttackingIceEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingIceIneffective = ~~Boolean(fdataTypeChartAttackingIce[i] == "½×");
        var TypeChartAttackingIceIneffectiveResult = TypeChartAttackingIceIneffective + TypeChartAttackingIceIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingIceImmune = ~~Boolean(fdataTypeChartAttackingIce[i] == "0×");
        var TypeChartAttackingIceImmuneResult = TypeChartAttackingIceImmune + TypeChartAttackingIceImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingIceDefault = ~~Boolean(fdataTypeChartAttackingIce[i] == "1×");
        var TypeChartAttackingIceDefaultResult = TypeChartAttackingIceDefault + TypeChartAttackingIceDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingIceEffectiveResult + '.png" title="' + TypeChartAttackingIceEffectiveResult + '" onclick="type' + TypeChartAttackingIceEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingIceIneffectiveResult + '.png" title="' + TypeChartAttackingIceIneffectiveResult + '" onclick="type' + TypeChartAttackingIceIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingIceImmuneResult + '.png" title="' + TypeChartAttackingIceImmuneResult + '" onclick="type' + TypeChartAttackingIceImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingIceDefaultResult + '.png" title="' + TypeChartAttackingIceDefaultResult + '" onclick="type' + TypeChartAttackingIceDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeDragon() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Dragon';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Dragon.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingDragon.length; i++) {
        var TypeChartAttackingDragonEffective = ~~Boolean(fdataTypeChartAttackingDragon[i] == "2×");
        var TypeChartAttackingDragonEffectiveResult = TypeChartAttackingDragonEffective + TypeChartAttackingDragonEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingDragonIneffective = ~~Boolean(fdataTypeChartAttackingDragon[i] == "½×");
        var TypeChartAttackingDragonIneffectiveResult = TypeChartAttackingDragonIneffective + TypeChartAttackingDragonIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingDragonImmune = ~~Boolean(fdataTypeChartAttackingDragon[i] == "0×");
        var TypeChartAttackingDragonImmuneResult = TypeChartAttackingDragonImmune + TypeChartAttackingDragonImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingDragonDefault = ~~Boolean(fdataTypeChartAttackingDragon[i] == "1×");
        var TypeChartAttackingDragonDefaultResult = TypeChartAttackingDragonDefault + TypeChartAttackingDragonDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingDragonEffectiveResult + '.png" title="' + TypeChartAttackingDragonEffectiveResult + '" onclick="type' + TypeChartAttackingDragonEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingDragonIneffectiveResult + '.png" title="' + TypeChartAttackingDragonIneffectiveResult + '" onclick="type' + TypeChartAttackingDragonIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingDragonImmuneResult + '.png" title="' + TypeChartAttackingDragonImmuneResult + '" onclick="type' + TypeChartAttackingDragonImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingDragonDefaultResult + '.png" title="' + TypeChartAttackingDragonDefaultResult + '" onclick="type' + TypeChartAttackingDragonDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}

function typeDark() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Dark';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Dark.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingDark.length; i++) {
        var TypeChartAttackingDarkEffective = ~~Boolean(fdataTypeChartAttackingDark[i] == "2×");
        var TypeChartAttackingDarkEffectiveResult = TypeChartAttackingDarkEffective + TypeChartAttackingDarkEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingDarkIneffective = ~~Boolean(fdataTypeChartAttackingDark[i] == "½×");
        var TypeChartAttackingDarkIneffectiveResult = TypeChartAttackingDarkIneffective + TypeChartAttackingDarkIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingDarkImmune = ~~Boolean(fdataTypeChartAttackingDark[i] == "0×");
        var TypeChartAttackingDarkImmuneResult = TypeChartAttackingDarkImmune + TypeChartAttackingDarkImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingDarkDefault = ~~Boolean(fdataTypeChartAttackingDark[i] == "1×");
        var TypeChartAttackingDarkDefaultResult = TypeChartAttackingDarkDefault + TypeChartAttackingDarkDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingDarkEffectiveResult + '.png" title="' + TypeChartAttackingDarkEffectiveResult + '" onclick="type' + TypeChartAttackingDarkEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingDarkIneffectiveResult + '.png" title="' + TypeChartAttackingDarkIneffectiveResult + '" onclick="type' + TypeChartAttackingDarkIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingDarkImmuneResult + '.png" title="' + TypeChartAttackingDarkImmuneResult + '" onclick="type' + TypeChartAttackingDarkImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingDarkDefaultResult + '.png" title="' + TypeChartAttackingDarkDefaultResult + '" onclick="type' + TypeChartAttackingDarkDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}


function typeFairy() {
    
    let typetitle = document.querySelector(".type-description-title-left h1");
    let typeicon = document.querySelector(".type-symbol");
    let typeeffective = document.querySelector(".type-effective-content");
    let typeineffective = document.querySelector(".type-ineffective-content");
    let typeimmune = document.querySelector(".type-immune-content");
    let typedefault = document.querySelector(".type-default-content");

    typetitle.innerText = 'Fairy';
    typeicon.src = './media/Images/Misc/Type/Symbol/' + typeicon.alt + '/Fairy.png';
    typeicon.title = typetitle.innerText;

    typeeffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeineffective.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typeimmune.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";
    typedefault.previousElementSibling.title = "When a " + typetitle.innerText + "-type move is used against an opposing Pokémon with following types:";

    typeeffective.innerHTML = "";
    typeineffective.innerHTML = "";
    typeimmune.innerHTML = "";
    typedefault.innerHTML = "";

    for (var i = 0; i < fdataTypeChartAttackingFairy.length; i++) {
        var TypeChartAttackingFairyEffective = ~~Boolean(fdataTypeChartAttackingFairy[i] == "2×");
        var TypeChartAttackingFairyEffectiveResult = TypeChartAttackingFairyEffective + TypeChartAttackingFairyEffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFairyIneffective = ~~Boolean(fdataTypeChartAttackingFairy[i] == "½×");
        var TypeChartAttackingFairyIneffectiveResult = TypeChartAttackingFairyIneffective + TypeChartAttackingFairyIneffective ?  fdataTypes[i] : "";

        var TypeChartAttackingFairyImmune = ~~Boolean(fdataTypeChartAttackingFairy[i] == "0×");
        var TypeChartAttackingFairyImmuneResult = TypeChartAttackingFairyImmune + TypeChartAttackingFairyImmune ?  fdataTypes[i] : "";

        var TypeChartAttackingFairyDefault = ~~Boolean(fdataTypeChartAttackingFairy[i] == "1×");
        var TypeChartAttackingFairyDefaultResult = TypeChartAttackingFairyDefault + TypeChartAttackingFairyDefault ?  fdataTypes[i] : "";
        
        typeeffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeeffective.value + '/' + TypeChartAttackingFairyEffectiveResult + '.png" title="' + TypeChartAttackingFairyEffectiveResult + '" onclick="type' + TypeChartAttackingFairyEffectiveResult + '()" />';
        typeineffective.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeineffective.value + '/' + TypeChartAttackingFairyIneffectiveResult + '.png" title="' + TypeChartAttackingFairyIneffectiveResult + '" onclick="type' + TypeChartAttackingFairyIneffectiveResult + '()" />';
        typeimmune.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typeimmune.value + '/' + TypeChartAttackingFairyImmuneResult + '.png" title="' + TypeChartAttackingFairyImmuneResult + '" onclick="type' + TypeChartAttackingFairyImmuneResult + '()" />';
        typedefault.innerHTML += '<img src="./media/Images/Misc/Type/Text/' + typedefault.value + '/' + TypeChartAttackingFairyDefaultResult + '.png" title="' + TypeChartAttackingFairyDefaultResult + '" onclick="type' + TypeChartAttackingFairyDefaultResult + '()" />';
    
    }

    let typedescriptionfill = document.querySelectorAll('.type-description img[onclick="type()"]');
    for (var i = 0; i < typedescriptionfill.length; i++) {
        typedescriptionfill[i].remove();
    }
    if(typeeffective.innerHTML == "") {
        typeeffective.innerHTML = "<br>";
    }
    if(typeineffective.innerHTML == "") {
        typeineffective.innerHTML = "<br>";
    }
    if(typeimmune.innerHTML == "") {
        typeimmune.innerHTML = "<br>";
    }
    if(typedefault.innerHTML == "") {
        typedefault.innerHTML = "<br>";
    }
}
typeNormal();



var imgEventListener = document.querySelectorAll('.exclusive-content-bot img');
for (var u = 0; u < imgEventListener.length; u++) {
    imgEventListener[u].addEventListener("click", exclusiveDescription);

    
    function exclusiveDescription() {

    const num = this.alt;

    var i = this.alt - 1;

    document.getElementById("exclusive-title").style.display = "unset";
    document.getElementById("exclusive-portrait").style.display = "unset";
    document.getElementById("exclusive-description-outer").style.display = "unset";
    document.getElementById("exclusive-sidebar").style.display = "unset";

    // Form
    function formUncheck() {
        var formuncheck = document.querySelectorAll('#exclusive-form-selector input:checked');
        for (var q = 0; q < formuncheck.length; q++) {
            formuncheck[q].checked = false;
        }
    }

    function formCheck() {
        var formcheck = document.querySelectorAll('#exclusive-form-selector input:checked');
        for (var q = 0; q < formcheck.length; q++) {
            formcheck[q].click();
        }
    }
    formUncheck();

    var exclusiveformdefault = document.querySelector("#exclusive-form-default + label");
    var exclusiveformalolan = document.querySelector("#exclusive-form-alolan + label");
    var exclusiveformgalarian = document.querySelector("#exclusive-form-galarian + label");
    var exclusiveformgigantamax1 = document.querySelector("#exclusive-form-gigantamax1 + label");
    var exclusiveformgigantamax2 = document.querySelector("#exclusive-form-gigantamax2 + label");
    var exclusiveformmega1 = document.querySelector("#exclusive-form-mega1 + label");
    var exclusiveformmega2 = document.querySelector("#exclusive-form-mega2 + label");

    if (fdataFormAlolan[i] === "Alolan") {
        exclusiveformalolan.innerText = fdataFormAlolan[i];
    }
    if (fdataFormAlolan[i] === "") {
        exclusiveformalolan.innerText = "";
    }

    if (fdataFormGalarian[i] === "Galarian") {
        exclusiveformgalarian.innerText = fdataFormGalarian[i];
    }
    if (fdataFormGalarian[i] === "") {
        exclusiveformgalarian.innerText = "";
    }

    if (fdataFormMega1[i] === "Mega") {
        exclusiveformmega1.innerText = fdataFormMega1[i];
    }
    if (fdataFormMega1[i] === "") {
        exclusiveformmega1.innerText = "";
    }
    if (fdataFormMega2[i] === "Mega") {
        exclusiveformmega2.innerText = fdataFormMega2[i];
    }
    if (fdataFormMega2[i] === "") {
        exclusiveformmega2.innerText = "";
    }


    if (fdataFormGigantamax1[i] === "Gigantamax") {
        exclusiveformgigantamax1.innerText = fdataFormGigantamax1[i];
    }
    if (fdataFormGigantamax1[i] === "") {
        exclusiveformgigantamax1.innerText = "";
    }
    if (fdataFormGigantamax2[i] === "Gigantamax") {
        exclusiveformgigantamax2.innerText = fdataFormGigantamax2[i];
    }
    if (fdataFormGigantamax2[i] === "") {
        exclusiveformgigantamax2.innerText = "";
    }


    if (exclusiveformalolan.innerText == "" || exclusiveformgalarian.innerText == "" || exclusiveformmega1.innerText == "" || exclusiveformmega2.innerText == "" || exclusiveformgigantamax1.innerText == "" || exclusiveformgigantamax2.innerText == "") { 
        document.querySelector("#exclusive-form-default + label").innerText = "";
        formUncheck();
    }
    

    if (fdataFormDefault[i] == "N" && fdataFormID.includes(this.alt) || exclusiveformalolan.innerText != "" || exclusiveformgalarian.innerText != "" || exclusiveformmega1.innerText != "" || exclusiveformmega2.innerText != "" || exclusiveformgigantamax1.innerText != "" || exclusiveformgigantamax2.innerText != "") {
        document.querySelector("#exclusive-form-default + label").innerText = fdataName[i];
        formUncheck();
        document.querySelector("#exclusive-form-default").checked = true;
    }

    if (fdataFormDefault[i] == "Y") { 
        document.querySelector("#exclusive-form-default + label").innerText = "";
        formUncheck();
    }

    


    for (var q = 0; q < fdataFormID.length; q++) {
        if (fdataFormID[q] - 1 !== this.alt - 1) {
            var exclusiveform1 = document.querySelectorAll(".exclusive-form + label")
            for (var z = 0; z < exclusiveform1.length; z++) {
                exclusiveform1[z].remove();
            }
            var exclusiveform2 = document.querySelectorAll(".exclusive-form")
            for (var y = 0; y < exclusiveform2.length; y++) {
                exclusiveform2[y].remove();
            }
        }
    }
    
    for (var q = 0; q < fdataFormID.length; q++) {
        if (fdataFormID[q] - 1 === this.alt - 1) {
            if (document.getElementById("exclusive-form" + [q])) {
            }
            else {
                var creationinput = document.createElement("input");
                creationinput.setAttribute("id","exclusive-form" + [q]);
                creationinput.setAttribute("type","radio");
                creationinput.setAttribute("name","info-options");
                creationinput.setAttribute("value",fdataFormAbbreviation[q]);
                creationinput.classList.add("exclusive-form");
                var creationlabel = document.createElement("label");
                creationlabel.innerHTML = fdataFormName[q];
                creationlabel.setAttribute("type","radio");
                creationlabel.setAttribute("for","exclusive-form" + [q]);
                creationlabel.setAttribute("name","info-options");
                document.getElementById("exclusive-form-selector").appendChild(creationinput);
                document.getElementById("exclusive-form-selector").appendChild(creationlabel);
            }
        }
    }
    
    

    if (fdataFormDefault[i] === "Y") {
        formUncheck();
        document.querySelector(".exclusive-form").checked = true;
    }


    
    // NationalID
    var x = this.alt;
    var pad = "000"
    var natID = pad.substring(0, pad.length - x.length) + x
    document.getElementById("exclusive-title-natID").innerHTML = "#" + natID;
    
    // Title
    document.getElementById("exclusive-title-name").innerHTML = fdataName[i];

    // Debut
    document.getElementById("exclusive-title-debut").innerHTML = 'Introduced in ' + fdataDebut[i];

    // Category
    document.getElementById("exclusive-title-category").innerHTML = '"' + fdataCategory[i] + '"';

    // Portrait
    var exclusivePortrait = document.getElementById("exclusive-portrait-img");
    var exclusivePortraitPathDefault = exclusivePortrait.setAttribute("name",portraitPath);
  
   
    exclusivePortraitPathDefault
    exclusivePortrait.alt =  this.alt;
    exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + exclusivePortrait.getAttribute("name") + "/" + exclusivePortrait.alt + ".png";


    

    document.getElementById("exclusive-form-default").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-default').checked) {
            exclusivePortrait.alt =  num;
            removeForm();
        }
    });

    document.getElementById("exclusive-form-alolan").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-alolan').checked) {
            addFormAlolan();
        }
    });

    document.getElementById("exclusive-form-galarian").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-galarian').checked) {
            addFormGalarian();
        }
    });

    document.getElementById("exclusive-form-mega1").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-mega1').checked) {
            addFormMega();
        }
        if (document.getElementById('exclusive-form-mega1').checked && num == 6) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Mega/6X.png";
        }
        if (document.getElementById('exclusive-form-mega1').checked && num == 150) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Mega/150X.png";
        }
    });
    document.getElementById("exclusive-form-mega2").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-mega2').checked) {
            addFormMega();
        }
        if (document.getElementById('exclusive-form-mega2').checked && num == 6) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Mega/6Y.png";
        }
        if (document.getElementById('exclusive-form-mega2').checked && num == 150) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Mega/150Y.png";
        }
    });



    document.getElementById("exclusive-form-gigantamax1").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-gigantamax1').checked) {
            addFormGigantamax();
        }
        if (document.getElementById('exclusive-form-gigantamax1').checked && num == 892) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Gigantamax/892S.png";
        }
    });
    document.getElementById("exclusive-form-gigantamax2").addEventListener("click", function() {
        if (document.getElementById('exclusive-form-gigantamax2').checked) {
            addFormGigantamax();
        }
        if (document.getElementById('exclusive-form-gigantamax2').checked && num == 892) {
            exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Gigantamax/892R.png";
        }
    });
    


 
    
    var exclusiveform = document.querySelectorAll(".exclusive-form");
    for (var vfs = 0; vfs < exclusiveform.length; vfs++) {

       exclusiveform[vfs].addEventListener("click", function() {
           var path = exclusivePortrait.getAttribute("name");
          exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + path + "/Form/" + exclusivePortrait.alt + this.value +  ".png";
          
          exclusivePortrait.onload = function(e) {
            exclusivePortraitPathDefault
        };
        });
    }

    

    
    if (this.alt == 892) {
        exclusiveformgigantamax1.innerText = "Gigantamax Single Strike Style";
        exclusiveformgigantamax2.innerText = "Gigantamax Rapid Strike Style";
    }
    if (this.alt == 150 || this.alt == 6) {
        exclusiveformmega1.innerText = "Mega X";
        exclusiveformmega2.innerText = "Mega Y";
    }

    function addFormAlolan() {
        exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Alolan/" + exclusivePortrait.alt + ".png";
    }
    function addFormGalarian() {
        exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Galarian/" + exclusivePortrait.alt + ".png";
    }
    function addFormMega() {
        exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Mega/" + exclusivePortrait.alt + ".png";
    }
    function addFormGigantamax() {
        exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/Gigantamax/" + exclusivePortrait.alt + ".png";
    }

    function removeForm() {
        exclusivePortrait.src =  "./media/Images/Sprite/PNG/" + portraitPath + "/" + exclusivePortrait.alt + ".png";
    }



    // Type Primary
    document.getElementById("exclusive-sidebar-type-primary").src =  "./media/Images/Misc/Type/Text/" + iconTypePath + "/" + fdataTypePrimary[i] + ".png";
    document.getElementById("exclusive-sidebar-type-primary").title = fdataTypePrimary[i];
    // Type Secondary
    document.getElementById("exclusive-sidebar-type-secondary").src =  "./media/Images/Misc/Type/Text/" + iconTypePath + "/" + fdataTypeSecondary[i] + ".png";
    document.getElementById("exclusive-sidebar-type-secondary").title = fdataTypeSecondary[i];
    
    // Hide Secondary if Single-type
    var z = fdataType[i]
    if (z === "Single-type") {
        document.getElementById("exclusive-sidebar-type-secondary").style.display = "none";
    }

    // Show Secondary if Dual-type
    if (z === "Dual-type") {
        document.getElementById("exclusive-sidebar-type-secondary").style.display = "block";
    }

    // Ability Primary
    document.getElementById("exclusive-sidebar-ability-primary").innerHTML = fdataAbilityPrimary[i];

    // Ability Secondary
    document.getElementById("exclusive-sidebar-ability-secondary").innerHTML = fdataAbilitySecondary[i];

    // Ability Hidden
    document.getElementById("exclusive-sidebar-ability-hidden").innerHTML = fdataAbilityHidden[i];
    
    var pa = fdataAbilityPrimary[i]
    var sa = fdataAbilitySecondary[i]
    var ha = fdataAbilityHidden[i]

    if (sa != "" & ha === "") { // Primary & Secondary Ability
        document.getElementById("exclusive-sidebar-ability-primary").style.width = "45%";
        document.getElementById("exclusive-sidebar-ability-primary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.padding = "30px 1px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderTopRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomLeftRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderRight = "unset"
        document.getElementById("exclusive-sidebar-ability-secondary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.borderBottomRightRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-secondary").style.padding = "30px 1px";
        document.getElementById("exclusive-sidebar-ability-hidden").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-hidden").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-secondary").style.display = "flex";
        document.getElementById("exclusive-sidebar-ability-hidden").style.display = "none";
    }
    if (sa === "" & ha != "") { // Primary & Hidden Ability
        document.getElementById("exclusive-sidebar-ability-primary").style.width = "90%";
        document.getElementById("exclusive-sidebar-ability-primary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderTopRightRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomLeftRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderRight = "1px solid black"
        document.getElementById("exclusive-sidebar-ability-secondary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-hidden").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-hidden").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-secondary").style.display = "none";
        document.getElementById("exclusive-sidebar-ability-hidden").style.display = "flex";

     }
    if (sa === "" & ha === "")  { // Primary Ability Only
        document.getElementById("exclusive-sidebar-ability-primary").style.width = "90%";
        document.getElementById("exclusive-sidebar-ability-primary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.padding = "30.5px 1px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderTopRightRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomLeftRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomRightRadius = "10px";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderRight = "1px solid black"
        document.getElementById("exclusive-sidebar-ability-secondary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-hidden").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.display = "none";
        document.getElementById("exclusive-sidebar-ability-hidden").style.display = "none";
    }
    if (sa != "" & ha != "") { // All 3
        document.getElementById("exclusive-sidebar-ability-primary").style.width = "45%";
        document.getElementById("exclusive-sidebar-ability-primary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.padding = "10px 0";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderTopRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomLeftRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-primary").style.borderRight = "unset"
        document.getElementById("exclusive-sidebar-ability-secondary").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.borderBottomRightRadius = "unset";
        document.getElementById("exclusive-sidebar-ability-secondary").style.padding = "10px 0";
        document.getElementById("exclusive-sidebar-ability-hidden").style.fontStyle = "unset";
        document.getElementById("exclusive-sidebar-ability-hidden").style.padding = "10px 1px";
        document.getElementById("exclusive-sidebar-ability-secondary").style.display = "flex";
        document.getElementById("exclusive-sidebar-ability-hidden").style.display = "flex";
     }

     if (pa === "Varies") {
        document.getElementById("exclusive-sidebar-ability-primary").style.fontStyle = "italic";
     }
     if (sa === "Varies") {
        document.getElementById("exclusive-sidebar-ability-secondary").style.fontStyle = "italic";
     }
     if (ha === "Varies") {
        document.getElementById("exclusive-sidebar-ability-hidden").style.fontStyle = "italic";
     }

    // Catch Rate
    document.getElementById("exclusive-sidebar-catchrate").innerHTML = fdataCatchRate[i];
    document.getElementById("exclusive-sidebar-catchrate").title = "When thrown at a full health " + fdataName[i] + " with an ordinary Poké Ball.";

    // Leveling Rate
    document.getElementById("exclusive-sidebar-levelrate").innerHTML = fdataLevelingRate[i];
    
    // Held Item
    document.getElementById("exclusive-sidebar-helditem-img").src = "./media/Images/Item/Sprite/VIII/" + fdataHeldItem[i] + ".png";

    // Hide if Nonexistant
    var hi = document.getElementById("exclusive-sidebar-helditem-img")

    hi.onload = function(e){
        document.getElementById("exclusive-sidebar-helditem").style.display = "unset";
    };
    hi.onerror = function(e) {
        document.getElementById("exclusive-sidebar-helditem").style.display = "none";
    };

    // Gender Ratio
    document.getElementById("exclusive-sidebar-genderratio").innerHTML = fdataGenderRatio[i];

    grm = fdataGenderRatioMale[i];
    grf = fdataGenderRatioFemale[i];

    if (grm === "0%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "none";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "12.5%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "25%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "50%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "75%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "87.5%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grm === "100%") {
        document.getElementById("exclusive-sidebar-genderratio-male").title = grm + " Male";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     
     if (grf === "0%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "none";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "12.5%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "25%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "50%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "75%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "87.5%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     if (grf === "100%") {
        document.getElementById("exclusive-sidebar-genderratio-female").title = grf + " Female";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
     }
     
     if (grm === "0%" & grf === "0%") {
        document.getElementById("exclusive-sidebar-genderratio-genderless").title = "Genderless";
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "unset";
        document.getElementById("exclusive-sidebar-genderratio-male").title = "";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "none";
        document.getElementById("exclusive-sidebar-genderratio-female").title = "";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "none";
     }

     if (document.getElementById("exclusive-sidebar-genderratio").innerHTML === "undefined") {
        document.getElementById("exclusive-sidebar-genderratio-genderless").style.display = "none";
        document.getElementById("exclusive-sidebar-genderratio-male").style.display = "none";
        document.getElementById("exclusive-sidebar-genderratio-female").style.display = "none";
     }

    // Egg Group 1
    document.getElementById("exclusive-sidebar-egggroup1").innerHTML = fdataEggGroupPrimary[i];
    document.getElementById("exclusive-sidebar-egggroup1").setAttribute("name",fdataEggGroupPrimary[i]);

    // Egg Group 2
    document.getElementById("exclusive-sidebar-egggroup2").innerHTML = fdataEggGroupSecondary[i];
    document.getElementById("exclusive-sidebar-egggroup2").setAttribute("name",fdataEggGroupSecondary[i]);

    if (fdataEggGroupSecondary[i] === "") {
        document.getElementById("exclusive-sidebar-egggroup1").classList.add("SingleEggGroup");
        document.getElementById("exclusive-sidebar-egggroup2").style.display = "none";
     }
    if (fdataEggGroupSecondary[i] != "") {
        document.getElementById("exclusive-sidebar-egggroup1").classList.remove("SingleEggGroup");
        document.getElementById("exclusive-sidebar-egggroup2").style.display = "inline-block";
    }

    // Hatch Rate
    document.getElementById("exclusive-sidebar-hatchrate").innerHTML = fdataHatchRateEggCycle[i];
    document.getElementById("exclusive-sidebar-hatchrate").title = "Steps required to hatch an egg containing " + fdataName[i] + ".";

    // Experience Yield
    document.getElementById("exclusive-sidebar-expyield").innerHTML = fdataExperienceYield[i];

    // Dex Entry
    document.getElementById("exclusive-description").innerHTML = fdataPokédexEntry[i];

    var formSelectorLabel = document.querySelectorAll("#exclusive-form-selector label")
    for (var q = 0; q < formSelectorLabel.length; q++) {
        if (formSelectorLabel[q].innerText == "") {
            formSelectorLabel[q].style.display = "none";
        }
        else {
            formSelectorLabel[q].style.display = "flex";
        }
    }


    var get_fdataEvolutionSpeciePrevious = getAllIndexes(fdataName, fdataEvolutionSpeciePrevious[i]);
    var fdataEvolutionSpeciePreviousResult = [];
    fdataEvolutionSpeciePreviousResult.push((get_fdataEvolutionSpeciePrevious.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext1 = getAllIndexes(fdataName, fdataEvolutionSpecieNext1[i]);
    var fdataEvolutionSpecieNext1Result = [];
    fdataEvolutionSpecieNext1Result.push((get_fdataEvolutionSpecieNext1.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext2 = getAllIndexes(fdataName, fdataEvolutionSpecieNext2[i]);
    var fdataEvolutionSpecieNext2Result = [];
    fdataEvolutionSpecieNext2Result.push((get_fdataEvolutionSpecieNext2.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext3 = getAllIndexes(fdataName, fdataEvolutionSpecieNext3[i]);
    var fdataEvolutionSpecieNext3Result = [];
    fdataEvolutionSpecieNext3Result.push((get_fdataEvolutionSpecieNext3.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext4 = getAllIndexes(fdataName, fdataEvolutionSpecieNext4[i]);
    var fdataEvolutionSpecieNext4Result = [];
    fdataEvolutionSpecieNext4Result.push((get_fdataEvolutionSpecieNext4.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext5 = getAllIndexes(fdataName, fdataEvolutionSpecieNext5[i]);
    var fdataEvolutionSpecieNext5Result = [];
    fdataEvolutionSpecieNext5Result.push((get_fdataEvolutionSpecieNext5.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext6 = getAllIndexes(fdataName, fdataEvolutionSpecieNext6[i]);
    var fdataEvolutionSpecieNext6Result = [];
    fdataEvolutionSpecieNext6Result.push((get_fdataEvolutionSpecieNext6.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext7 = getAllIndexes(fdataName, fdataEvolutionSpecieNext7[i]);
    var fdataEvolutionSpecieNext7Result = [];
    fdataEvolutionSpecieNext7Result.push((get_fdataEvolutionSpecieNext7.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext8 = getAllIndexes(fdataName, fdataEvolutionSpecieNext8[i]);
    var fdataEvolutionSpecieNext8Result = [];
    fdataEvolutionSpecieNext8Result.push((get_fdataEvolutionSpecieNext8.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var get_fdataEvolutionSpecieNext9 = getAllIndexes(fdataName, fdataEvolutionSpecieNext9[i]);
    var fdataEvolutionSpecieNext9Result = [];
    fdataEvolutionSpecieNext9Result.push((get_fdataEvolutionSpecieNext9.map(i => fdataPokédexIDNational[i]).join(",")));
    
    var fdataEvolutionSpecieNextCount = ~~Boolean(fdataEvolutionSpecieNext1[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext2[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext3[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext4[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext5[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext6[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext7[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext8[i] !== "") + ~~Boolean(fdataEvolutionSpecieNext9[i] !== "");

        
    let exclusiveEvolutionPrevious = document.getElementById("exclusive-evolvefrom");
    let evolveFromImg = document.getElementById("exclusive-evolvefrom");
    
    let pokdataEvolveFromDescription = document.querySelector('#pokdata-modal' + x + ' .evolve-from p');


    for ( var q = 0; q < fdataEvolutionSpeciePreviousResult.length; q++ ) {
        exclusiveEvolutionPrevious.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpeciePreviousResult[q] - 1] + ".png";
        exclusiveEvolutionPrevious.setAttribute("title",pokdataEvolveFromDescription.innerText)
    }

    if (evolveFromImg.src.includes("undefined.png")) {
        evolveFromImg.parentElement.parentElement.style.visibility = "hidden";
    }
    else {
        evolveFromImg.parentElement.parentElement.style.visibility = "unset";
    }


    let exclusiveEvolutionNext1 = document.getElementById("exclusive-evolveto-1");
    let exclusiveEvolutionNext2 = document.getElementById("exclusive-evolveto-2");
    let exclusiveEvolutionNext3 = document.getElementById("exclusive-evolveto-3");
    let exclusiveEvolutionNext4 = document.getElementById("exclusive-evolveto-4");
    let exclusiveEvolutionNext5 = document.getElementById("exclusive-evolveto-5");
    let exclusiveEvolutionNext6 = document.getElementById("exclusive-evolveto-6");
    let exclusiveEvolutionNext7 = document.getElementById("exclusive-evolveto-7");
    let exclusiveEvolutionNext8 = document.getElementById("exclusive-evolveto-8");
    let exclusiveEvolutionNext9 = document.getElementById("exclusive-evolveto-9");
    let evolveToImg1 = document.getElementById("exclusive-evolveto-1");
    let evolveToImg2 = document.getElementById("exclusive-evolveto-2");
    let evolveToImg3 = document.getElementById("exclusive-evolveto-3");
    let evolveToImg4 = document.getElementById("exclusive-evolveto-4");
    let evolveToImg5 = document.getElementById("exclusive-evolveto-5");
    let evolveToImg6 = document.getElementById("exclusive-evolveto-6");
    let evolveToImg7 = document.getElementById("exclusive-evolveto-7");
    let evolveToImg8 = document.getElementById("exclusive-evolveto-8");
    let evolveToImg9 = document.getElementById("exclusive-evolveto-9");
    let pokdataEvolveToDescription1 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-1"] p');
    let pokdataEvolveToDescription2 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-2"] p');
    let pokdataEvolveToDescription3 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-3"] p');
    let pokdataEvolveToDescription4 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-4"] p');
    let pokdataEvolveToDescription5 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-5"] p');
    let pokdataEvolveToDescription6 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-6"] p');
    let pokdataEvolveToDescription7 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-7"] p');
    let pokdataEvolveToDescription8 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-8"] p');
    let pokdataEvolveToDescription9 = document.querySelector('#pokdata-modal' + x + ' .evolve-to[name="' + fdataEvolutionSpecieNextCount + '-9"] p');


    for ( var q = 0; q < fdataEvolutionSpecieNext1Result.length; q++ ) {
        exclusiveEvolutionNext1.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext1Result[q] - 1] + ".png";
        exclusiveEvolutionNext1.setAttribute("title",pokdataEvolveToDescription1.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext2Result.length; q++ ) {
        exclusiveEvolutionNext2.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext2Result[q] - 1] + ".png";
        exclusiveEvolutionNext2.setAttribute("title",pokdataEvolveToDescription2.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext3Result.length; q++ ) {
        exclusiveEvolutionNext3.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext3Result[q] - 1] + ".png";
        exclusiveEvolutionNext3.setAttribute("title",pokdataEvolveToDescription3.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext4Result.length; q++ ) {
        exclusiveEvolutionNext4.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext4Result[q] - 1] + ".png";
        exclusiveEvolutionNext4.setAttribute("title",pokdataEvolveToDescription4.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext5Result.length; q++ ) {
        exclusiveEvolutionNext5.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext5Result[q] - 1] + ".png";
        exclusiveEvolutionNext5.setAttribute("title",pokdataEvolveToDescription5.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext6Result.length; q++ ) {
        exclusiveEvolutionNext6.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext6Result[q] - 1] + ".png";
        exclusiveEvolutionNext6.setAttribute("title",pokdataEvolveToDescription6.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext7Result.length; q++ ) {
        exclusiveEvolutionNext7.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext7Result[q] - 1] + ".png";
        exclusiveEvolutionNext7.setAttribute("title",pokdataEvolveToDescription7.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext8Result.length; q++ ) {
        exclusiveEvolutionNext8.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext8Result[q] - 1] + ".png";
        exclusiveEvolutionNext8.setAttribute("title",pokdataEvolveToDescription8.innerText);
    }

    for ( var q = 0; q < fdataEvolutionSpecieNext9Result.length; q++ ) {
        exclusiveEvolutionNext9.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataPokédexIDNational[fdataEvolutionSpecieNext9Result[q] - 1] + ".png";
        exclusiveEvolutionNext9.setAttribute("title",pokdataEvolveToDescription9.innerText);
    }


    if (evolveToImg1.src.includes("undefined.png")) {
        evolveToImg1.parentElement.parentElement.style.visibility = "hidden";
        evolveToImg1.parentElement.parentElement.setAttribute("name","0");
    }
    else {
        evolveToImg1.parentElement.parentElement.style.visibility = "unset";
        evolveToImg1.parentElement.parentElement.setAttribute("name","1");
    }

    if (evolveToImg2.src.includes("undefined.png")) {
        evolveToImg2.style.display = "none";
    }
    else {
        evolveToImg2.style.display = "unset";
        evolveToImg2.parentElement.parentElement.setAttribute("name","2");
    }

    if (evolveToImg3.src.includes("undefined.png")) {
        evolveToImg3.style.display = "none";
    }
    else {
        evolveToImg3.style.display = "unset";
        evolveToImg3.parentElement.parentElement.setAttribute("name","3");
    }

    if (evolveToImg4.src.includes("undefined.png")) {
        evolveToImg4.style.display = "none";
    }
    else {
        evolveToImg4.style.display = "unset";
        evolveToImg4.parentElement.parentElement.setAttribute("name","4");
    }

    if (evolveToImg5.src.includes("undefined.png")) {
        evolveToImg5.style.display = "none";
    }
    else {
        evolveToImg5.style.display = "unset";
        evolveToImg5.parentElement.parentElement.setAttribute("name","5");
    }

    if (evolveToImg6.src.includes("undefined.png")) {
        evolveToImg6.style.display = "none";
    }
    else {
        evolveToImg6.style.display = "unset";
        evolveToImg6.parentElement.parentElement.setAttribute("name","6");
    }

    if (evolveToImg7.src.includes("undefined.png")) {
        evolveToImg7.style.display = "none";
    }
    else {
        evolveToImg7.style.display = "unset";
        evolveToImg7.parentElement.parentElement.setAttribute("name","7");
    }

    if (evolveToImg8.src.includes("undefined.png")) {
        evolveToImg8.style.display = "none";
    }
    else {
        evolveToImg8.style.display = "unset";
        evolveToImg8.parentElement.parentElement.setAttribute("name","8");
    }

    if (evolveToImg9.src.includes("undefined.png")) {
        evolveToImg9.style.display = "none";
    }
    else {
        evolveToImg9.style.display = "unset";
        evolveToImg9.parentElement.parentElement.setAttribute("name","9");
    }


    }
}





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

}