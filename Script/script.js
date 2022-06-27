let valor = document.querySelector('#textview')

equal.addEventListener('click', result)
delet.addEventListener('click', del)
clear.addEventListener('click', cle)

document.addEventListener('keyup', e => {
    if(e.key === 'Enter') {
        valor.innerHTML = valor.innerHTML.slice(0, -1)
        return result()
    }
})

function insert(num) { 
    let n = typeof num
    if(valor.innerHTML != '+' && valor.innerHTML != '-' && valor.innerHTML != '*' && valor.innerHTML != '/' && valor.innerHTML != '' || n == 'number' || valor.innerHTML == '' && num == '-') {
        valor.innerHTML += num
    }
}

function result() {
    if(valor.innerHTML.slice(-1) == '+' || valor.innerHTML.slice(-1) == '-' || valor.innerHTML.slice(-1) == '*' || valor.innerHTML.slice(-1) == '/'){
        valor.innerHTML = valor.innerHTML.slice(0, -1)
    }else if(valor.innerHTML) {
        valor.innerHTML = eval(valor.innerHTML)
    } else {
        alert('[ERRO]Entrada inválida')
    }
}

function del() {
    valor.innerHTML = valor.innerHTML.slice(0, -1)
}

function cle() {
    valor.innerHTML = null
}