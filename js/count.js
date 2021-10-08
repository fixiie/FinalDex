function count() {

    var containLabel = document.querySelectorAll('#contain-inner label');
    var dexSwitchLabel = document.querySelectorAll('#dexswitch label');
    var filterLabel = document.querySelectorAll('#filter-outer label');
    for (var i = 0; i < containLabel.length; i++) {
        containLabel[i].addEventListener("click", showChecked);
    }
    for (var i = 0; i < dexSwitchLabel.length; i++) {
        dexSwitchLabel[i].addEventListener("click", showTotal);
    }
    for (var i = 0; i < filterLabel.length; i++) {
        filterLabel[i].addEventListener("click", count);
    }
    document.getElementById('showall').addEventListener("click", count);

    function showChecked() {
        sleep(10).then(() => {
            document.querySelector('#count-current').innerText = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden) input:checked').length;
        });
    }

    function showTotal() {
        sleep(10).then(() => {
            document.querySelector('#count-total').innerText = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden)').length;
        });

    }
    showChecked();
    showTotal();
}



