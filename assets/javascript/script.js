var nome = window.document.getElementById('nome')

var email = window.document.getElementById('email')

var nomeOk = false

var emailOk = false

function validarNome(){
    let txtNome = document.querySelector('#TxtNome')
    if (nome.value.length > 2){
        txtNome.innerHTML = 'válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
    else{
        txtNome.innerHTML = 'Inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#TxtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
    txtEmail.innerHTML = 'Válido'
    txtEmail.style.color = 'green'
    emailOk = true
    }
    else{
        txtEmail.innerHTML = ' Inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function enviar(){
    if( nomeOk == true && emailOk == true){
        alert('enviado com sucesso')
    }
    else{
        alert('você digitou algo errado')
    }
}
