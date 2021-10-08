const loaddescription = document.querySelector("#load-description");
const load = document.querySelector("#load");


window.addEventListener("load", function() {
    document.body.style.overflowY = "unset";
    sleep(1000).then(() => {
        document.documentElement.scrollTop = 0;
        load.className += "hidden";
        document.getElementById('resize').click();
    });
});