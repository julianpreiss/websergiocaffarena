'use strict';

const d = document;

let bloguno = d.querySelector('#bloguno');

bloguno.firstElementChild.onclick = () => {
    this.location.href='blog.html';
};

let imgclickuno = d.querySelector('#casona');
let imgclickdos = d.querySelector('#dongodoy');

let IrGaleria = () => {
    this.location.href='galeria.html';
};

imgclickuno.onclick = IrGaleria;
imgclickdos.onclick = IrGaleria;




