(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

document.getElementById("currentYear").textContent = new Date().getFullYear();


function handleSubmit(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    var form = event.target;

    // Envia o formulário via fetch
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            // Mostra a mensagem de sucesso
            document.getElementById('success-message').textContent = 'Mensagem enviada com sucesso!';
            document.getElementById('success-message').style.display = 'block';

            // Limpa os campos do formulário
            form.reset();
        } else {
            document.getElementById('success-message').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
            document.getElementById('success-message').style.display = 'block';
        }
    })
    .catch(error => {
        document.getElementById('success-message').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
        document.getElementById('success-message').style.display = 'block';
    });

    return false; // Garante que o formulário não recarregue a página
}