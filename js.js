//la funcion es declarada con function y se le da un nombre
function escribirTexto() {
    //se almacena en la variable text el valor de #inputTexto2
    //mediante el query selector y .value
    var text = document.querySelector('#inputTexto2').value;
    //se accede al input en el que se transcribe el texto con .getElementById
    //pero se puede usar .querySelector
    document.getElementById('inputTexto').value = text.toUpperCase();
    //se accede al valor del elemento con .value y es sustituido por la variable que obtuvimos de lo que 
    //el usuario escribio
    //volvemos todo mayusculas con .toUpperCase()
}