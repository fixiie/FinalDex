function modalPokdata() {

        var openModalButton = document.getElementsByClassName('pokdata-modal-open');
        for (var i = 0; i < openModalButton.length; i++) {
            openModalButton[i].addEventListener("click", openModal);
        }
        var closeModalButton = document.getElementsByClassName('pokdata-modal-close');
        for (var i = 0; i < closeModalButton.length; i++) {
            closeModalButton[i].addEventListener("click", closeModal);
        }
        var closeOpenModalButton = document.getElementsByClassName('pokdata-modal-close-open');
        for (var i = 0; i < closeOpenModalButton.length; i++) {
            closeOpenModalButton[i].addEventListener("click", closeOpenModal);
        }
        
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

    modalPokdata();
    navKeeper(x);
    resetZoom(x);
    dexCheck();
}

function closeModal() {
    var modalWindowActive = document.querySelector(".pokdata-modal-outer.open");

    $("body").removeClass("modal-open");

    modalWindowActive.classList ? modalWindowActive.classList.remove('open') : modalWindowActive.className = modalWindowActive.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    modalPokdata();
}

function closeOpenModal() {
    var modalWindowActive = document.querySelector(".pokdata-modal-outer.open");
    $("body").removeClass("modal-open");
    modalWindowActive.classList ? modalWindowActive.classList.remove('open') : modalWindowActive.className = modalWindowActive.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    
    var i = this.value - 1;
    var x = this.value;

    if (!document.body.contains(document.querySelector("#pokdata-modal" + this.value))) {
        createPokData(i,x);
        panZoomModal(x);
    }

    var modalWindow = document.querySelector("#pokdata-modal" + this.value);
    $("body").addClass("modal-open");

    modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';

    modalPokdata();
    navKeeper(x);
    resetZoom(x);
    dexCheck();
}


function closeOpenModal2() {
    var modalWindowActive = document.querySelector(".gamedata-modal-outer.open");
    $("body").removeClass("modal-open");
    modalWindowActive.classList ? modalWindowActive.classList.remove('open') : modalWindowActive.className = modalWindowActive.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    
    var i = this.value - 1;
    var x = this.value;

    if (!document.body.contains(document.querySelector("#pokdata-modal" + this.value))) {
        createPokData(i,x);
        panZoomModal(x);
    }

    var modalWindow = document.querySelector("#pokdata-modal" + this.value);
    $("body").addClass("modal-open");

    modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';

    modalPokdata();
    navKeeper(x);
    resetZoom(x);
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
