const operaciones = document.querySelectorAll('.operacion');

operaciones.forEach(operacion => {
    operacion.addEventListener('mouseover', function() {
        this.querySelector('.opciones').style.display = 'block';
    });

    operacion.addEventListener('mouseout', function() {
        this.querySelector('.opciones').style.display = 'none';
    });
});