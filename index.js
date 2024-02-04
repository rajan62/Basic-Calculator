let string = "";
let display = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            display.value = string;
        } 
        else if (e.target.innerHTML == 'del') {
            string =string.substring(0, string.length-1);
            display.value = string;
        } 
        else {
            string = string + e.target.innerHTML;
            display.value = string;
        }



    })
})

