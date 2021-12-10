function count() {
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

