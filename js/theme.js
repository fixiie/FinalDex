const toggleSwitch = document.querySelector('#theme input[type="checkbox"]');
const currentTheme = localStorage.getItem('finaldex-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('finaldex-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('finaldex-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);