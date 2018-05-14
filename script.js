$(document).ready(function () {
    $(".about__bar--span").each(function () {
        var percentage = parseInt($(this).html());
        if (percentage > 0) {
            $(this).animate({
                'width': '' + percentage + 'px'
            }, 800);
        } else {
            $(this).css({
                'color': '#212121',
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