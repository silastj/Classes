// SUB CLASSES COM EXTENDS

// class Veiculo {
//     constructor(rodas){
//         this.rodas = rodas;
//     }
//     acelerar() {
//         console.log('Acelerou');
//     }
// }

// class Moto extends Veiculo {
//     acelerar() {
//         super.acelerar();
//         console.log('Acelerou rapido');
//     }
//     empinar() {
//         console.log('Moto empinou com ' + this.rodas + 'rodas');
//     }
// }

// const honda = new Moto(2);
// const civic = new Veiculo(4);

// Parei 4 minutos

import Countdown from './countdown.js';

const diasParaONatal = new Countdown('24 December 2020 23:59:59 GMT-0300');


console.log(diasParaONatal._futureDate.getDay());
console.log(diasParaONatal._timeStampDiff);
console.log(diasParaONatal.days);
console.log(diasParaONatal.total);


// dados.innerText = diasParaONatal.total.days;

setInterval(() => {
    const dados = document.querySelector('#dados p:first-child');    
    const dados1 = document.querySelector('#dados p:nth-child(2)');
    const dados2 = document.querySelector('#dados p:nth-child(3)');
    const dados3 = document.querySelector('#dados p:last-child');
    dados.innerText = diasParaONatal.total.days;
    dados1.innerText = diasParaONatal.total.hours;
    dados2.innerText = diasParaONatal.total.minutes;
    dados3.innerText = diasParaONatal.total.seconds;
}, 1000);