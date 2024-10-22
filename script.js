   let letters = ['valete']
   let pick2 = prompt(`O jogo começou,\nEscreva 1 para iniciar`)
   while(pick2 !=3) {
     
    let pick = prompt(`VOCÊ TEM ${letters.length} CARTA NO SEU BARALHO\n\n1-ADICIONAR CARTA\n2-PUXAR CARTA\n3-SAIR `)
    if(pick==1){
        let name = prompt('qual o nome da carta que vai ser adicionada?')
        letters.unshift(name)
    }
    else if(pick == 2){
        let name2 = letters.shift()
        alert(`a carta retirada foi ${name2}`)
    }
    else{ pick=3
        alert('programa encerrado')
        break
    }
 }
    