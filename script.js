function clock () {
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const houras = horaAgora.getHours ();
    const minutos = horaAgora.getMinutes ();
    const segundos = horaAgora.getSeconds ();
    const formatoHoras = houras.toString ().padStart(2, "0");
    const formatoMinutos = minutos.toString ().padStart(2, "0");
    const formatoSegundos = segundos.toString ().padStart(2, "0");
    
    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

}

setInterval (clock, 1000);
