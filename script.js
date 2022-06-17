function Contar(){
    let inicio = document.querySelector('#txtinicio')
    let numInicio = Number(inicio.value)
    let fim = document.querySelector('#txtfim')
    let numFim = Number(fim.value)
    let passo = document.querySelector('#txtpasso')
    let numPasso = Number(passo.value)
    let res = document.querySelector("div#res")
   
    if(numInicio < 1){
        alert("Defina um numero para iniciar!")
        return
    }if( numFim < numInicio){
        alert("Numero do fim inválido, ou não inserido!")
        return
    }if(numPasso > numFim || numPasso < 1){
        alert(`Numero do passo inválido, ou não inserido!`)
        return
    } else {
        res.innerHTML = ""
        for(let count = numInicio; count <= numFim; count += numPasso){  
                res.innerHTML += (`${count}` )
                if(count  < 6){
                    res.innerHTML += "😃 "
                }else if(count < 12){
                    res.innerHTML += "😁 "
                }else {
                    res.innerHTML += "🤣 "
                }
                res.style.textAlign = 'center'  
            }
    }  
    
}