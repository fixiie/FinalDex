(function() {

    function openModal() {

        var modalTrigger = document.getElementsByClassName('resetcheck-modal-open');


        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
                var modalWindow = document.getElementById("resetcheck-modal");

                $("body").addClass("modal-open");

                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {

        var closeButton1 = document.getElementsByClassName('resetcheck-modal-close1');
        var closeButton2 = document.getElementsByClassName('resetcheck-modal-close2');
        var closeOverlay = document.getElementsByClassName('resetcheck-modal-overlay');



        for (var i = 0; i < closeButton1.length; i++) {
            closeButton1[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode.parentNode;

                $("body").removeClass("modal-open");

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        for (var i = 0; i < closeButton2.length; i++) {
            closeButton2[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode.parentNode;

                $("body").removeClass("modal-open");

                var uncheck = document.querySelectorAll('#contain input:checked');
                for (var i = 0; i < uncheck.length; i++) {
                    uncheck[i].click();
                }

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }


        for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function() {
                var modalWindow = this.parentNode;

                $("body").removeClass("modal-open");

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
}());