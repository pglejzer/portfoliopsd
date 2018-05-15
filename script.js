$(document).ready(function () {
    $(".about__bar--span").each(function () {
        var percentage = parseInt($(this).html());
        if (percentage > 0) {
            $(this).animate({
                'width':  '' + percentage + 'px'
            }, 800);
        } else {
            $(this).css({
                'color': 'black',
                'background': 'none'
            }, 800);
        }
    });
});

var second = 0;
var element = document.getElementById('funfact-counting');

function counting() {
    second += 1;
    element.innerText = second;
}

var cancel = setInterval(counting, 1000);

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
});

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu"),
        menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function () {

        if (menu.className == "nav__ul") {
            menu.classList.add('nav__ul--responsive');
            this.firstChild.alt = "hide menu";
        } else {
            menu.classList.add('nav__ul--hide');
            setTimeout(function () {
                menu.classList.remove('nav__ul--responsive');
                menu.classList.remove('nav__ul--hide');
            }, 600);
            this.firstChild.alt = "show menu";
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        var currentPosition = pageYOffset;
        if (currentPosition > 10) {
            nav.classList.add('nav__sticky');
        } else {
            nav.classList.remove('nav__sticky');
        }
    });
});

$(document).ready(function ($) {
    $('.nav__link').on('click', function () {
        $(".nav__button--toggle").trigger('click');
    });
});
window.sr = ScrollReveal();
sr.reveal('.portoflio__img', {duration: 2000 }, 50);