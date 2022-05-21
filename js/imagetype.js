function imgTypeDrop() {
    document.getElementById("imgtype").classList.toggle("imgtype-show");

    document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(180deg)";

    var dropdowns = document.getElementsByClassName("imgtype");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('imgtype-show')) {} else {
            document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('#imgtype-toggle')) {
        var dropdowns = document.getElementsByClassName("imgtype");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('imgtype-show')) {
                openDropdown.classList.remove('imgtype-show');
                document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
            }
        }
    }
}

function imgType() {
    var imgTypeBox = document.getElementById('imgtype-toggle');
    var imgType = document.querySelectorAll('#imgtype input');
    var conimg = document.querySelectorAll('.contain-img');

    for (var i = 0; i < imgType.length; i++) {

        if(imgType[i].checked == true) {
            var dataType = imgType[i].getAttribute("data-type");
            var dataPath = imgType[i].getAttribute("data-path");
            var dataExtension = imgType[i].getAttribute("data-extension");

            imgTypeBox.innerHTML = '<span class="imgtype-arrow">▾</span>' + '<p>' + imgType[i].parentElement.innerText + '</p>' + '<div><img src="./media/Images/Misc/FinalDex/' + dataExtension + '.png" name="' + dataExtension + '" /></div>';

            if(!dataType.includes("Art")) {
                for (var q = 0; q < conimg.length; q++) {
                    if (conimg[q].getAttribute("id").includes("Shiny")) {
                        conimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataExtension + '/Shiny/Front/' + dataPath + '/' + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
                    }
                    else {
                        conimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataExtension + '/Normal/Front/' + dataPath + '/' + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
                    }
                }
            }
            else {
                for (var q = 0; q < conimg.length; q++) {
                    conimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataPath + '/' + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
                }
            }
        }
    }



}