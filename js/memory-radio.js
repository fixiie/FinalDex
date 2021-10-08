function memoryRadio1() {
    var radios = document.getElementsByName("finaldex-imgType" + currentGen);
    var val = localStorage.getItem("finaldex-imgType" + currentGen);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].click();
        }
        else if (val == null) {
            radios[0].click();
        }
    }
    $('input[name="finaldex-imgType' + currentGen + '"]').on('change', function() {
        localStorage.setItem('finaldex-imgType' + currentGen, $(this).val());
    });
}


function memoryRadio2() {
    var radios = document.getElementsByName("finaldex-dexSwitch" + gameid);
    var val = localStorage.getItem("finaldex-dexSwitch" + gameid);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].click();
        }
        else if (val == null) {
            radios[radios.length - 1].click();
        }
    }
    
    $('input[name="finaldex-dexSwitch' + gameid + '"]').on('change', function() {
        localStorage.setItem('finaldex-dexSwitch' + gameid, $(this).val());
    });
}







function memoryRadio3(finaldataDefaultGame) {
    for (var i = 0; i < finaldataDefaultGame.length; i++) {
        let x = i + 1;
        var radios = document.getElementsByName("finaldex-pokDataNav" + x);
        var val = localStorage.getItem("finaldex-pokDataNav"  + x);
        for (var u = 0; u < radios.length; u++) {
            if (radios[u].value == val) {
                radios[u].click();
            }
            else {
                radios[0].click();
            }
        }
        $('input[name="finaldex-pokDataNav' + x +'"]').on('change', function() {
            localStorage.setItem("finaldex-pokDataNav" + x, $(this).val());
        });
    }
}