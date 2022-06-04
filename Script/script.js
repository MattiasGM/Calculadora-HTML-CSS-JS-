equal.addEventListener('click', result)
delet.addEventListener('click', del)
clear.addEventListener('click', cle)

function insert(num) {
    let valor = document.form.textview.value.slice(-1)
    let n = typeof num

    if(valor != '+' && valor != '-' && valor != '*' && valor != '/' && valor != '' || n == 'number' || valor == '' && num == '-') {
        document.form.textview.value = document.form.textview.value + num
    }
}

function result() {
    let res = document.form.textview.value
    if(res.slice(-1) == '+' || res.slice(-1) == '-' || res.slice(-1) == '*' || res.slice(-1) == '/'){
        let res = document.form.textview.value
        document.form.textview.value = res.substring(0, res.length-1)
    }else if(res) {
        document.form.textview.value = eval(res)
    } else {
        alert('[ERRO]Entrada inválida')
    }
}

function del() {
    let res = document.form.textview.value
    document.form.textview.value = res.substring(0, res.length-1)
}

function cle() {
    document.form.textview.value = null
}