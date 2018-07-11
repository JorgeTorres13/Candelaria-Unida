var images = ["images/universidades.jpg", "images/grupos.jpg", "images/participacion.jpg"];
var num = 0;
var carousel = document.getElementById("carousel");

function before()
{
    num --;
    if(num < 0)
    {
        num = images.length - 1;
    }
    carousel.src = images[num];
}

function after()
{
    num ++;
    if(num >= images.length)
    {
        num = 0;
    }
    carousel.src = images[num];
}

var loguni = document.getElementById("loginuni");
var reguni = document.getElementById("registraruni");

function loginuni()
{
    loguni.style.display = 'block';
    reguni.style.display = 'none';
}

function registraruni()
{
    loguni.style.display = 'none';
    reguni.style.display = 'block';
}