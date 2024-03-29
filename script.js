function mostrar() {
    let nom = document.getElementById('nombre').value;
    let fechInicio = new Date(document.getElementById('fechaInicio').value);
    let fechFinal = new Date(document.getElementById('fechaFinal').value);
    let hoy = new Date(); //obtiene la fecha actual
    if (fechFinal < hoy) {
        alert('La fecha de fin no puede ser anterior a la fecha de inicio.');
        return;
    }
    //verifica si la fecha es anterior a la del inicio
    if (fechFinal <= fechInicio) {
        alert('la fecha final no puede ser igual o menor a la de inicio');
        return;
    }
    alert('Ingresó el nombre: ' + nom);
    alert('La fecha de inicio es: ' + fechInicio);
    alert('La fecha de fin es: ' + fechFinal);
    //verifica si la fecha final es una fecha pasada
    document.getElementById('miFormulario').submit();
}
