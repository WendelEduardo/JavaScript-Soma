function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    
    if(n1 == ""){
        window.alert("Digite o primeiro Valor!")
    }else if(n2 == ""){
        window.alert("Digite outro Valor!")
    }else{
        res.innerHTML = "O resultado da operação "+n1+ " + "+ n2 + " é: <br><br><strong>"+ s +"</strong>"
    }
}