var navegacao = document.getElementById('buttonNavegacao');
var redes = document.getElementById('buttonRedes');
var buttonMenu = document.getElementById('buttonMenu');
buttonMenu.value = 0;

function menu() {
    if(buttonMenu.value === '0') {
        navegacao.classList.remove('nPosition1');
        navegacao.classList.remove('animationNavegacao2');
        navegacao.classList.add('animationNavegacao1');
        navegacao.classList.add('nPosition2');
        
        redes.classList.remove('animationRedes2');
        redes.classList.remove('rPosition1');
        redes.classList.add('rPosition2');
        redes.classList.add('animationRedes1');

        buttonMenu.classList.remove('semiHidden2')
        buttonMenu.classList.add('semiHidden1')

        buttonMenu.value = 1;
    }
    else{
        navegacao.classList.remove('animationNavegacao1');
        navegacao.classList.remove('nPosition2');
        navegacao.classList.add('animationNavegacao2');
        navegacao.classList.add('nPosition1');

        redes.classList.remove('rPosition2');
        redes.classList.remove('animationRedes1');
        redes.classList.add('rPosition1');
        redes.classList.add('animationRedes2');

        buttonMenu.classList.remove('semiHidden1')
        buttonMenu.classList.add('semiHidden2')

        buttonMenu.value = 0;
    }

    if(box1.classList !=='hidden') {
        box1.classList.add('hidden');
        box1.classList.remove('box1Position2');
        box1.classList.remove('show')
        box1.classList.add('box1Position1');
    }

    if(box2.classList !=='hidden') {
        box2.classList.add('hidden');
        box2.classList.remove('box2Position2');
        box2.classList.remove('show')
        box2.classList.add('box2Position1');
    }
        
}

var naveBox = document.getElementById('buttonNavegacao');
var box1 = document.getElementById('box1');
naveBox.value = 0;

function navegacaoBox() {
    if(naveBox.value === '0') {
        box1.classList.remove('hidden');
        box1.classList.remove("box1Position1");
        box1.classList.add('box1Position2');
        box1.classList.add('show')
        naveBox.value = 1;
    }
    else{
        box1.classList.add('hidden');
        box1.classList.remove('box1Position2');
        box1.classList.remove('show')
        box1.classList.add('box1Position1');
        naveBox.value = 0;
    }
}

var redeBox = document.getElementById('buttonRedes');
var box2 = document.getElementById('box2');
redeBox.value = 0;

function redesBox() {
    if(redeBox.value === '0') {
        box2.classList.remove('hidden');
        box2.classList.remove('box2Position1');
        box2.classList.add('box2Position2');
        box2.classList.add('show')
        redeBox.value = 1;
    }
    else{
        box2.classList.add('hidden');
        box2.classList.remove('box2Position2');
        box2.classList.remove('show')
        box2.classList.add('box2Position1');
        redeBox.value = 0;
    }
}

