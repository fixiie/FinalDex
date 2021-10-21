function modalPokdata() {

        var modalTrigger = document.getElementsByClassName('pokdata-modal-open');

        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].addEventListener("click", openModal);
        }
        
        function openModal() {
     
            var i = this.value - 1;
            var x = this.value;


            if (!document.body.contains(document.querySelector("#pokdata-modal" + this.value))) {
                createPokData(i,x);
                panZoomModal(x);
            }
            
            var modalWindow = document.querySelector("#pokdata-modal" + this.value);
            $("body").addClass("modal-open");

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';

            var closeButton = document.getElementsByClassName('pokdata-modal-close');
            for (var q = 0; q < closeButton.length; q++) {
                closeButton[q].addEventListener("click", closeModal);
            }

            var closeOpenButton = document.getElementsByClassName('pokdata-modal-close-open');
            for (var q = 0; q < closeOpenButton.length; q++) {
                closeOpenButton[q].addEventListener("click", closeOpenModal);
            }
            navKeeper(x);
            resetZoom(x);
            dexCheck();
            showEM(x);
            showAE(x);
        }

        function closeModal() {
            var modalWindow = this.parentNode;
        
            $("body").removeClass("modal-open");
        
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

        function closeOpenModal() {
            var modalWindow1 = this.parentNode.parentNode.parentNode;
            $("body").removeClass("modal-open");
            modalWindow1.classList ? modalWindow1.classList.remove('open') : modalWindow1.className = modalWindow1.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            
            var i = this.value - 1;
            var x = this.value;

            if (!document.body.contains(document.querySelector("#pokdata-modal" + this.value))) {
                createPokData(i,x);
                panZoomModal(x);
            }

            var modalWindow2 = document.querySelector("#pokdata-modal" + this.value);
            $("body").addClass("modal-open");

            modalWindow2.classList ? modalWindow2.classList.add('open') : modalWindow2.className += ' ' + 'open';

            var closeButton = document.getElementsByClassName('pokdata-modal-close');
            for (var q = 0; q < closeButton.length; q++) {
                closeButton[q].addEventListener("click", closeModal);
            }

            var closeOpenButton = document.getElementsByClassName('pokdata-modal-close-open');
            for (var q = 0; q < closeOpenButton.length; q++) {
                closeOpenButton[q].addEventListener("click", closeOpenModal);
            }
            navKeeper(x);
            resetZoom(x);
            dexCheck();
            showEM(x);
            showAE(x);
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


function dexCheck() {
    var ids = document.querySelectorAll(".pokdata-idname span");
    for (u = 0; u < ids.length; u++) {
        ids[u].style.display = "none";
    }


    for (q = 0; q < [JSONPath_Pokédex.length + 1]; q++) {
        var p = q + 1;
        
        if (dexChecker == p && dexChecker != JSONPath_Pokédex.length + 1) {
            var regID = document.querySelectorAll(".pokdata-regionalID-" + p);
            for (u = 0; u < regID.length; u++) {
                regID[u].style.display = "unset";
            }
        }
        else if (dexChecker == p && dexChecker == JSONPath_Pokédex.length + 1) {
            var natID = document.querySelectorAll(".pokdata-nationalID");
            for (u = 0; u < natID.length; u++) {
                natID[u].style.display = "unset";
            }
        }
    }
}

