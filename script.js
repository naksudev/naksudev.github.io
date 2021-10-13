function initElement()
{
    var magic = document.getElementById("magicbutton");
    var se = new Audio('./assets/boom.mp3');   
    se.volume = 0.1;                                                                 

    magic.onclick = playSound;

    function playSound()
    {
        se.play();
        console.log("Played sound.")
    }
}
