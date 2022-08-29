let porEstado = [
  {Estado: 'SP', valor: 67836.43, Porcentagem: "" },
  {Estado: 'RJ', valor: 36678.66, Porcentagem: "" },
  {Estado: 'MG', valor: 29229.88, Porcentagem: "" },
  {Estado: 'ES', valor: 27165.48, Porcentagem: ""},
  {Estado: 'Outros', valor: 19849.53, Porcentagem: ""}

]
let total = 0


porEstado.forEach(obj => {  total += obj.valor
})
console.log(total)

let rep = porEstado.map(function(obj){
  return  ( (obj.valor * 100) / total).toFixed(2) 
})



function porcentagem(){
  let teste = document.getElementById('estado')
  
  for(let i =0; i<porEstado.length; i++){
    let tr =teste.insertRow()

    let td_estado = tr.insertCell()
    let td_fat = tr.insertCell()
    let td_porce = tr.insertCell()
    

    td_estado.innerText = porEstado[i].Estado
    td_fat.innerText = `R$: ${porEstado[i].valor}`
    td_porce.innerText = `${rep[i]}%`
    

  }
 

}
  


porcentagem()
