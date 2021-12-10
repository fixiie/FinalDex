function memoryRadio() {
    var radios1 = document.getElementsByName("finaldex-imgtype" + GameID);
    var val1 = localStorage.getItem("finaldex-imgtype" + GameID);
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].value == val1) {
            radios1[i].click();
        }
        else if (val1 == null) {
            radios1[0].click();
        }
    }
    $('input[name="finaldex-imgtype' + GameID + '"]').on('change', function() {
        localStorage.setItem('finaldex-imgtype' + GameID, $(this).val());
    });

    var radios2 = document.getElementsByName("finaldex-dexswitch" + GameID);
    var val2 = localStorage.getItem("finaldex-dexswitch" + GameID);
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].value == val2) {
            radios2[i].click();
        }
        else if (val2 == null) {
            radios2[radios2.length - 1].click();
        }
    }
    
    $('input[name="finaldex-dexswitch' + GameID + '"]').on('change', function() {
        localStorage.setItem('finaldex-dexswitch' + GameID, $(this).val());
    });
}