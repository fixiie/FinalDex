function modalReset() {

    function openModal() {

        var modalTrigger = document.getElementsByClassName('reset-modal-open');


        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
                var modalWindow = document.getElementById("reset-modal");

                $("body").addClass("modal-open");

                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {

        var closeButton = document.getElementsByClassName('reset-modal-close');

        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function() {
                var modalWindowActive = document.querySelector(".reset-modal-outer.open");

                $("body").removeClass("modal-open");

                modalWindowActive.classList ? modalWindowActive.classList.remove('open') : modalWindowActive.className = modalWindowActive.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
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
}



