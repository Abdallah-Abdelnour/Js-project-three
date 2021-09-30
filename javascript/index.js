let myInput  = document.querySelector('input');

let myImgOne = document.querySelector('.img-one'); 
let myImgTwo = document.querySelector('.img-two');
let myP = document.querySelector('.visble');

console.log(myImgOne);

myImgOne.onclick = function(){
    console.log(typeof myInput.value);
    if(myInput.value === ''){
        myInput.style.cssText = 'border: 2px solid #f19193;';
        myImgTwo.style.cssText = 'display: block;';
        myP.style.cssText = 'display: block;';
    }else if(myInput.value.search('@email.com')===-1){
        myInput.style.cssText = 'border: 2px solid #f19193;';
        myImgTwo.style.cssText = 'display: block;';
        myP.style.cssText = 'display: block;';
    }else{
        myInput.value = '';
        myImgTwo.style.cssText = 'display: none;';
        myP.style.cssText = 'display: none;';
    }
}


