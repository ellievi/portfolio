// pre/nxt btn function
const productsContainer = document.querySelectorAll('.carousel-portfolio');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productsContainer.forEach((item,i) => { // '' => '' reduct the ''function'' 
    let containerDimensions = item.getBoundingClientRect(); // retorna o tamanho de um elemento e sua relativa posição do viewport
    let containerWidht = containerDimensions.width; // lendo a largura das dimensões do container para que se possa efeturar
                                                    // o deslize dos cards.

    nxtBtn[i].addEventListener('click',() => { // adicionando um evento click
        item.scrollLeft +=  500;               // a quantidade do mover do deslize
    })
    
    preBtn[i].addEventListener('click', () => { // adicionando um evento click
        item.scrollLeft -= 500;                 // a quantidade do mover do deslize
    })
})