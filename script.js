function initElement()
{
    var magic = document.getElementById("magicbutton");
    var se = new Audio('boom.mp3');

    magic.onclick = playSound;

    function playSound()
    {
        se.play();
    }
}

