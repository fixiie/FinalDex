


function load() {
    const loaddescription = document.querySelector("#load-description");
    const load = document.querySelector("#load");
    document.body.style.overflowY = "unset";
    sleep(1000).then(() => {
        document.documentElement.scrollTop = 0;
        load.className += "hidden";
        document.getElementById('resize').click();
    });
}