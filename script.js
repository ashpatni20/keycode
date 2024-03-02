const upperDiv = document.getElementById('upperDiv');
const lowerDiv = document.getElementById('lowerDiv');
const keyboardValue = document.getElementById('keyboardValue');
const body = document.getElementById('body');
const press = document.getElementById('press');

let flag = false;

body.addEventListener('keyup', (e) => {
    flag = true;
    if(flag ){
        upperDiv.style.display = "none";
        lowerDiv.style.display = "block";
        keyboardValue.style.display = "block";
        print(e);
    }
})

const print = (e) => {

    press.innerHTML = "";
    console.log(e);
    let data = e.key;
    let keycode =  e.keyCode;
    let controlCheck = e.ctrlKey;
    press.innerHTML = data;
    keyboardValue.innerHTML = keycode;

}