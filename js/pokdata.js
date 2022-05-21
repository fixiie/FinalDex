function modalPokdata(action) {

    var action;
    var int;
    var id;
    var def;
    var target;

    target = event.currentTarget;
    int = target.value;
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


    var activeWindow = document.querySelector(".pokdata-modal-outer.open");
    var currentWindow = document.querySelector("#pokdata-modal" + id);


 

    if (action == "open") {

        if (!document.body.contains(currentWindow)) {
            createPokData(id,int);
            panZoomModal(id);
        }

        console.log("#pokdata-modal" + id)
        document.querySelector("#pokdata-modal" + id).classList.add("open");




        if (def == false) {
            document.querySelector("#pokdata-modal" + id + " .pokdata-form > input[value='"+int+"'").click();
        }
        else if (def == true) {
            document.querySelector("#pokdata-modal" + id + " .pokdata-form > input:first-child").click();
        }

        modalPokdata();
        navKeeper(id);
        resetZoom(id);
        dexCheck();
    }
    if (action == "close") {
        activeWindow.classList.remove("open");
        modalPokdata();
    }
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
