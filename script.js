'use strict';
//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
let elems = document.getElementsByTagName('input');
let p = document.getElementById('test')
for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener('blur', input1)
}
function input1(){
    p.innerHTML = this.value;
}



