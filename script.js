function initElement()
{
    var magic = document.getElementById("magicbutton");
    var se = new Audio('./assets/sounds/boom.mp3');   
    se.volume = 0.1;                                                                 

    magic.onclick = playSound;

    function playSound()
    {
        se.play();
        console.log("Played sound.")
    }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme(themeName) {
    if (localStorage.getItem('theme') === 'edward'){
        setTheme('alphonse');
    } else {
        setTheme('edward');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'edward') {
        setTheme('alphonse');
    } else {
        setTheme('edward');
    }
})();