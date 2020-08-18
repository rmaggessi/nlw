//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField) 

//Executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value=""
    })


    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
