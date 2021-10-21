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

        var closeButton1 = document.getElementsByClassName('reset-modal-close1');
        var closeButton2 = document.getElementsByClassName('reset-modal-close2');
        var closeOverlay = document.getElementsByClassName('reset-modal-overlay');



        for (var i = 0; i < closeButton1.length; i++) {
            closeButton1[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode.parentNode;

                $("body").removeClass("modal-open");

                CheckAll();
                count();

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        for (var i = 0; i < closeButton2.length; i++) {
            closeButton2[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode.parentNode;

                $("body").removeClass("modal-open");

                UncheckAll();
                count();

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

    function UncheckAll() {
        var uncheck = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden) input:checked');
        for (var i = 0; i < uncheck.length; i++) {
            uncheck[i].click();
        }
    }

    function CheckAll() {
        var check = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden) input:not(:checked)');
        for (var i = 0; i < check.length; i++) {
            check[i].click();
        }
    }
}



