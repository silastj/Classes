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

setInterval(() => {
    console.log(diasParaONatal.total);
}, 1000);