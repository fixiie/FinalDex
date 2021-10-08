

var dexEventListener = document.querySelectorAll('#dexswitch input');
for (var i = 0; i < dexEventListener.length; i++) {
    dexEventListener[i].addEventListener("click", dexSwitch);

    function dexSwitch() {
       if (this.value == fdataRegionalDex.length + 1) {
           this.nextElementSibling.style.display = "none";
           this.parentElement.firstChild.nextElementSibling.style.display = "flex";
       }
       else {
        this.nextElementSibling.style.display = "none";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
       }
    

    
     
       var contdiv = document.querySelectorAll('#contain-inner div');
        for (u = 0; u < contdiv.length; u++) {
            contdiv[u].style.display = "inline-block";
        }
      /*
        var unobtainablediv = document.querySelectorAll('#contain-inner div[data-filter="Unobtainable"');
        for (u = 0; u < unobtainablediv.length; u++) {
            unobtainablediv[u].style.display = "none";
        }
     */

       let contid = document.querySelectorAll('#contain main p');
       for (u = 0; u < contid.length; u++) {
            contid[u].style.display = "none";
       }
        let pokdataid = document.querySelectorAll('.pokdata-idname span');
        for (u = 0; u < pokdataid.length; u++) {
            pokdataid[u].style.display = "none";
        }
        let pokdataidevoto = document.querySelectorAll('.evolve-to h6');
        for (u = 0; u < pokdataidevoto.length; u++) {
            pokdataidevoto[u].style.display = "none";
        }
        let pokdataidevofrom = document.querySelectorAll('.evolve-from h6');
        for (u = 0; u < pokdataidevofrom.length; u++) {
            pokdataidevofrom[u].style.display = "none";
        }


        if(this.value == fdataRegionalDex.length + 1) {
            let contnat = document.querySelectorAll('.contain-nationalID');
            for (u = 0; u < contnat.length; u++) {
                contnat[u].style.display = "flex";
            }
            let pokdatanat = document.querySelectorAll('.pokdata-nationalID');
            for (u = 0; u < pokdatanat.length; u++) {
                pokdatanat[u].style.display = "block";
            }
            let pokdatanatevofrom = document.querySelectorAll('.evolvefrom-nationalID');
            for (u = 0; u < pokdatanatevofrom.length; u++) {
                pokdatanatevofrom[u].style.display = "block";
            }
            let pokdatanatevoto = document.querySelectorAll('.evolveto-nationalID');
            for (u = 0; u < pokdatanatevoto.length; u++) {
                pokdatanatevoto[u].style.display = "block";
            }
            var divList = $('#contain-inner div');
            divList.sort(function(a, b) {
                return $(a).data("national") - $(b).data("national")
            });
            $("#contain-inner").html(divList);
            
        }

       
        for (q = 0; q < fdataRegionalDex.length; q++) {
            var x = this.value;
            let contreg = document.querySelectorAll('.contain-regionalID-' + x);
            for (u = 0; u < contreg.length; u++) {
                contreg[u].style.display = "flex";
            }
            let pokdatareg = document.querySelectorAll('.pokdata-regionalID-' + x);
            for (u = 0; u < pokdatareg.length; u++) {
                pokdatareg[u].style.display = "block";
            }
            let pokdataregevoto = document.querySelectorAll('.evolveto-regionalID-' + x);
            for (u = 0; u < pokdataregevoto.length; u++) {
                pokdataregevoto[u].style.display = "block";
            }
            let pokdataregevofrom = document.querySelectorAll('.evolvefrom-regionalID-' + x);
            for (u = 0; u < pokdataregevofrom.length; u++) {
                pokdataregevofrom[u].style.display = "block";
            }
            var contregdiv = document.querySelectorAll('#contain-inner div[data-regional-' + x + '=""]');
            for (u = 0; u < contregdiv.length; u++) {
                contregdiv[u].style.display = "none";
            }
        

            var divList = $('#contain-inner div');
            divList.sort(function(a, b) {
                return $(a).data("regional-" + x) - $(b).data("regional-" + x)
            });
            $("#contain-inner").html(divList);
        }

    }
}








