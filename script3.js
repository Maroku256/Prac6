'use strict';
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
let elems = document.getElementsByTagName('input')
for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener('blur', func)
}
function func(){
    let correct = this.dataset.length
    let input = this.value.length
    if(input == correct){
        this.style.borderColor = 'green'
    }else{
        this.style.borderColor = 'red'
    }
}