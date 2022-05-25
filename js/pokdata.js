function modalPokdata() {

    var int;
    var id;
    var def;



    int = this.value
    def = true;

    for (var i = 0; i < finaldataPokémon.length; i++) {
        if (int != undefined) {
            if (i == int) {
                id = finaldataPokémon[i]["ID"];
                if (!finaldataPokémon[i]["Variant"].includes("Default")) {
                    def = false;
                }
            }
        }
    }


    var activeWindow;
    activeWindow = document.querySelector(".pokdata-modal-outer.open");

    if (activeWindow != null) {
        activeWindow.classList.remove("open");
    }

    var activeSecondWindow;
    activeSecondWindow = document.querySelector(".gamedata-modal-outer.open");

    if (activeSecondWindow != null) {
        activeSecondWindow.classList.remove("open");
    }
console.log(def)

    if (id != undefined) {

        var currentWindow;
        var formSpec;
        var formFirst;

        currentWindow = document.querySelector("#pokdata-modal" + id);

        if (currentWindow == null) {
            createPokData(id,int);
            panZoomModal(id);

            if (int != undefined) {
                formSpec = document.querySelector("#pokdata-modal" + id + " .pokdata-form > input[value='"+int+"'");
                formFirst = document.querySelector("#pokdata-modal" + id + " .pokdata-form > input:first-child");
        
                if (def == false) {
                    if (formSpec != null) {
                        formSpec.click();
                    }
                }
                else if (def == true) {
                    if (formFirst != null) {
                        formFirst.click();
                    }
                }
            }
        }

        currentWindow = document.querySelector("#pokdata-modal" + id);

        if (currentWindow != null) {
            currentWindow.classList.add("open");
        }

        

        navKeeper(id);
        resetZoom(id);
    }



    dexCheck();
    


}







function panZoomModal(x) {
    $('#pokdata-map-panzoom-' + x).panzoom({
        $zoomIn: $(".pokdata-zoom-in"),
        $zoomOut: $(".pokdata-zoom-out"),
        $reset: $(".pokdata-zoom-reset"),
        startTransform: 'scale(1)',
        duration: 200,
        easing: 'ease-in-out',
        increment: 0.5,
        minScale: 1,
        contain: 'invert'
    })

    $('#pokdata-modal' + x + ' .pokdata-zoom-fullscreen').click(function(e){
        $('#pokdata-modal' + x + ' #pokdata-map-contain').toggleClass('fullscreen');
        $('#pokdata-modal' + x + ' .pokdata-zoom-fullscreen').toggleClass('fullscreen');
    });

    $('#pokdata-map-panzoom-' + x).keydown(function(keyPressed) {
        if (keyPressed.keyCode == 27) {
            $('#pokdata-modal' + x + ' .pokdata-zoom-fullscreen').removeClass('fullscreen');
        }
        });

        $('#pokdata-map-panzoom-' + x).mousedown(function(b){
        if(b.which==1){}
        else if(b.which==2) { 
            $('#pokdata-modal' + x + ' #pokdata-map-contain').toggleClass('fullscreen');
            $('#pokdata-modal' + x + ' .pokdata-zoom-fullscreen').toggleClass('fullscreen');
        }
        else if(b.which==3){}
    });
    
    $('#pokdata-map-panzoom-' + x).mousedown( doubleClicker( function(b,e) {
        if(b.which==1){$('#pokdata-modal' + x + ' .pokdata-zoom-in').click();}
        else if(b.which==2) {}
        else if(b.which==3) {$('#pokdata-modal' + x + ' .pokdata-zoom-out').click();}
    }));

}


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
            }, 1000 );
        }
    };
}
