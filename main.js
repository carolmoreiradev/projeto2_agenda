const form = document.getElementById('form-contact');
const contactName = [];
const contactTel = [];
const contactEmail = [];

let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
})

function addLine (){
    const inputNome = document.getElementById('nome-contato');
    const inputTel = document.getElementById('tel-contato');
    const inputEmail = document.getElementById('email-contato');

    contactName.push(inputNome.value);
    contactTel.push(inputTel.value);
    contactEmail.push(inputEmail.value);

    let line = '<tr>';
    line += `<td>${inputNome.value}</td>`;
    line += `<td>${inputTel.value}</td>`;
    line += `<td>${inputEmail.value}</td>`;
    line += `</tr>`

    lines += line

    inputNome.value = '';
    inputTel.value = '';
    inputEmail.value = '';
}

function updateTable(){

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}