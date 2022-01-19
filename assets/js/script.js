$(()=>{
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $('#enviarCorreo').click(()=>{
        alert('El correo ha sido enviado exitosamente');
    });

    $('#ingrediente').on("dblclick", ()=>{
       $('#ingrediente ').css({'color': 'red'})
    });
    
    //titulo preparacion
    $('#preparacion').on("dblclick", ()=>{
        $('#preparacion ').css({'color': 'red'})
    });

    $('.card-title').click(
        ()=>{
            $('.card-text').toggle()

        }
    )

     



})