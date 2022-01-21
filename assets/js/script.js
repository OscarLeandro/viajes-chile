$(()=>{

    //Habilita el uso de tooltip para bootstrap 5

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    
    //Envia un alert al enviar el mensaje de contacto
    $('#enviarMensaje').click(()=>{
        
        alert('El Mensaje ha sido enviado exitosamente');
        
    });
    

    //Al presionar el titulo de las card realiza la animacion toggle 
    $('.card-title').click(
        ()=>{
            $('.card-text').animate({'height':'toggle'},'slow')

        }
    )

    //Al hacer scroll el Navbar cambia de transparente a color desde los 50px hacia abajo
    $(window).scroll(()=>{
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50)
    });

    

    

     



})