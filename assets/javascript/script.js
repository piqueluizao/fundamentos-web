var nome = window.document.getElementById('nome')

var email = window.document.getElementById('email')

var nomeOk = false

var emailOk = false

function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length > 2){
    TxtNome.innerHTML = 'Valid'
    TxtNome.style.color = 'green'
    nomeOk = true
    }
    else{
        TxtNome.innerHTML = ' Invalid'
        TxtNome.style.color = 'red'
        nomeOk = false
    }
}

function validarEmail(){
    let TxtEmail = document.querySelector('#TxtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
    TxtEmail.innerHTML = 'Valid'
    TxtEmail.style.color = 'green'
    emailOk = true
    }
    else{
        TxtEmail.innerHTML = ' Invalid'
        TxtEmail.style.color = 'red'
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
