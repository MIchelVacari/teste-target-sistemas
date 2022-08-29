
fetch('dados.json')
  .then(resposta => resposta.json())
  .then(json => menorValor(json))

function menorValor(json) {
  const listaValor = []
  const listaSoma = []
  const ordem = []

  for (let faturamento of json) {
    let valor = faturamento.valor
    let dia = faturamento.dia
    
    listaValor.push(faturamento)
    listaSoma.push(valor)
    ordem.push(faturamento)

  }




  //************* Removendo os dias com valor ZERO **************
  var semZero = []
  var semZero = listaSoma.filter(checaValor)

  function checaValor(valor) {
    return valor > 0
  }

  /// ****** calculo média ***************** //
  function media(semZero) {
    var i = 0, summ = 0, arrayLen = semZero.length;
    while (i < arrayLen) {
      summ = summ + semZero[i++]
    }
    return summ / arrayLen

  }

  var calculoMedia = media(semZero)
  var md = calculoMedia.toFixed(2)
 
console.log(md)
let acima = [] 
  // *** valores acima da média ******//
  listaValor.forEach(valor => {
    if (valor.valor >= md)
      acima.push(valor)  

  })


  //*********** coloca os valores em ordem crescente  *********
  


  ordem.sort(function (a, b) {
    if (a.valor > b.valor) {
      return 1;
    }
    if (a.valor < b.valor) {
      return - 1
    }
    
  })
  
  

  // *********** calculo maior valor ***********
  const maiorValor = ordem.reduce(function (acumulator, valor) {
    if (acumulator.valor > valor.valor) return acumulator
    return valor

  })


  // *********** calculo menor valor ***********
  const menorValor = ordem.reduce(function (acumulator, valor) {
    if (acumulator.valor < valor.valor && acumulator.valor !== 0) return acumulator
    return valor
  })



  // ******* tabela de faturamento ********* 
  function listaTabala() {
    let tBody = document.getElementById('tBody')

    for (let i = 0; i < listaValor.length; i++) {
      let tr = tBody.insertRow()

      let td_dia = tr.insertCell();
      let td_fat = tr.insertCell()

      td_dia.innerText = listaValor[i].dia
      td_fat.innerText = `R$: ${listaValor[i].valor.toFixed(2)}`
    }
  }

  listaTabala();

  // ****** tabela menor valor ********
  function menor() {
    listaMenor = []
    listaMenor.push(menorValor)

    let dois = document.getElementById('dois')

    for (let j = 0; j < listaMenor.length; j++) {
      let tr = dois.insertRow()

      let td_dia = tr.insertCell()
      let td_fatu = tr.insertCell()

      td_dia.innerText = listaMenor[j].dia
      td_fatu.innerText = `R$: ${listaMenor[j].valor.toFixed(2)}`
    }

  }
  menor()

  // ***** tabela maior valor *******
  function maior() {
    listaMaior = []
    listaMaior.push(maiorValor)

    let max = document.getElementById('maior')

    for (let x = 0; x < listaMaior.length; x++) {
      let tr = max.insertRow()

      let td_dia = tr.insertCell()
      let td_fatura = tr.insertCell()

      td_dia.innerText = listaMaior[x].dia
      td_fatura.innerText = `R$: ${listaMaior[x].valor.toFixed(2)}`
    }
  }
  maior()



  function acimaMedia(){
    let acimaDaMeida = document.getElementById('acima')

    for(let m = 0; m<acima.length; m ++){
      let tr = acimaDaMeida.insertRow()
      

      let td_dia = tr.insertCell()
      let td_faturamento = tr.insertCell()
     

      td_dia.innerText = acima[m].dia
      td_faturamento.innerText = `R$: ${acima[m].valor.toFixed(2)}`
      
    }
    
  }

acimaMedia()
}






