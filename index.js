//METODO ANTIGO ( CONSTRUCTOR FUNCTION)
function Button(text, background){
    this.text = text;
    this.background = background;
}
Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.classList.add('ativo');
    return buttonElement;
}
const blueButton = new Button('Comprar', 'blue');
console.log(blueButton.element());


// METODO NOVO ( CLASS )
class Buttonn {
    constructor (text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonnElement = document.createElement('button');
        buttonnElement.innerText =  this.text;
        buttonnElement.style.background = this.background;
        buttonnElement.style.color = this.color;
        buttonnElement.classList.add('active');
        return buttonnElement;
    }
    appendTo(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const blueButtonn = new Buttonn('Clique', 'red', 'white');

console.log(blueButtonn.appendTo('body'));
console.log(blueButtonn.element());


//MERODO NOVO DE OUTRO MODO

class Caixa {
    constructor(option) {
        this.options = this.options;
    }
}
const blueOptions = {
    backgroundColor: 'Green',
    color: 'white',
    text: 'Clique',
    borderRadius: '4px',
}

// const blueButton = new Button(blueOptions);
// blueOptions.options;



//GET E SET
// obs=> podemos deixar com default  uma propriedade no element por exemplo (div)


const frutas = {
    lista:[],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';

console.log(frutas);