const form = document.getElementById('form-valid');

function validarFomulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

    const valorA = document.getElementById('campoA').value;
    const valorB = document.getElementById('campoB').value;
    const messagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;


    formValid = validarFomulario(valorA, valorB)
    if (formValid) {
        alert(messagemSucesso);

        valorA.value = '';
        valorB.value = '';
    
    } else if (valorB == valorA) {
    alert("Não é valido pois B é igual A!");
    } else {
        alert("Não é valido pois B é igual B!");
    }
})

console.log(form);
