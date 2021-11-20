equal.addEventListener('click', result)
delet.addEventListener('click', del)
clear.addEventListener('click', cle)

function insert(num) {
        document.form.textview.value = document.form.textview.value + num
}

function result() {
    let res = document.form.textview.value
    if(res) {
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
    document.form.textview.value = ''
}