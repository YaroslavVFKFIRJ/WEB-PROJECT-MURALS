/**
 * Created by User-ПК on 23.08.2023.
 */
'use strict';
let section=document.querySelector('.section');
let wind=document.querySelector('.wind');
let background=document.querySelector('.background');
let but=document.querySelector('.but');
section.onclick=()=>{
    wind.classList.add('viswind');
    background.classList.add('visback');
}
but.onclick=()=>{
    wind.classList.remove('viswind');
    background.classList.remove('visback');
    // wind.removeAttribute;
    // background.removeAttribute;
}
