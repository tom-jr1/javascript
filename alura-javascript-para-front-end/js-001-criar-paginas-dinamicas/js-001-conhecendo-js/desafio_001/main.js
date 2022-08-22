elementoTelefone = document.querySelector('#elementoTelefone');

console.log(elementoTelefone.value);

function obterValue(el){
    elementoTelefone.value += el.value;
    console.log(elementoTelefone.value);
}