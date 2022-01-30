function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });

}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio() {
timer = setInterval(() => {
    segundos ++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
   
}

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
    relogio.classList.add('iniciado');
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', function (event) {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('zerado');
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('iniciado');
    relogio.classList.add('zerado');
    clearInterval(timer);

    relogio.innerHTML = '00:00:00';
    segundos = 0;

});