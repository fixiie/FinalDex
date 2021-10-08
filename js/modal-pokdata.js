function modalPokdata(finaldataDefaultGame,finaldataFormDefault,finaldataCategoryDefault,finaldataTypeDefault,finaldataPokédexEntryDefault,finaldataAbilityDefault,finaldataLevelingRateDefault,finaldataEggGroupDefault,finaldataHatchRateDefault,finaldataExperienceYieldDefault) {



        var modalTrigger1 = document.getElementsByClassName('pokdata-modal-open');
        var modalTrigger2 = document.getElementsByClassName('pokdata-modal-close-open');


        for (var i = 0; i < modalTrigger1.length; i++) {
            modalTrigger1[i].onclick = function() {
                var i = this.value - 1;
                var x = this.value;

                if (!document.body.contains(document.querySelector("#pokdata-modal" + this.value))) {
                    createPokData(i,x,finaldataDefaultGame,finaldataFormDefault,finaldataCategoryDefault,finaldataTypeDefault,finaldataPokédexEntryDefault,finaldataAbilityDefault,finaldataLevelingRateDefault,finaldataEggGroupDefault,finaldataHatchRateDefault,finaldataExperienceYieldDefault);
                }
                
                var modalWindow = document.querySelector("#pokdata-modal" + this.value);
                $("body").addClass("modal-open");

                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';

                var closeButton = document.getElementsByClassName('pokdata-modal-close');
                for (var q = 0; q < closeButton.length; q++) {
                    closeButton[q].addEventListener("click", closeModal);
                }
              
            }
        }

        for (var i = 0; i < modalTrigger2.length; i++) {
            modalTrigger2[i].onclick = function() {
                var modalWindow1 = document.querySelector("#pokdata-modal" + this.value);
                var modalWindow2 = this.parentNode.parentNode.parentNode.parentNode;

                modalWindow2.classList ? modalWindow2.classList.remove('open') : modalWindow2.className = modalWindow2.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                modalWindow1.classList ? modalWindow1.classList.add('open') : modalWindow1.className += ' ' + 'open';
            }
        }

        function closeModal() {
            var modalWindow = this.parentNode;
        
            $("body").removeClass("modal-open");
        
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
        
}







