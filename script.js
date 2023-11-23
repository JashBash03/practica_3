function calc(){
  const inputA = document.querySelector("#valorA")
  const inputB = document.querySelector("#valorB")
  const textoSuma = document.querySelector("#resultadoSuma")
  const textoResta = document.querySelector("#resultadoResta")
  const textoMulti = document.querySelector("#resultadoMulti")
  const textoDivision = document.querySelector("#resultadoDivision")
  const textoModulo = document.querySelector("#resultadoModulo")
  const textoMenorQue = document.querySelector("#resultadoMenorQue")
  const textoMayorQue = document.querySelector("#resultadoMayorQue")
  const textoMenorIgual = document.querySelector("#resultadoMenorIgual")
  const textoMayorIgual = document.querySelector("#resultadoMayorIgual")
  
  
  const valorA = parseFloat(inputA.value)
  const valorB = parseFloat(inputB.value)
  
  const resultadoSuma = valorA + valorB
  const resultadoResta = valorA - valorB
  const resultadoMulti = valorA * valorB
  const resultadoDivision = valorA / valorB
  const resultadoModulo = valorA % valorB
  const resultadoMenorQue = valorA < valorB
  const resultadoMayorQue = valorA > valorB
  const resultadoMenorIgual = valorA <= valorB
  const resultadoMayorIgual = valorA >= valorB
  
  textoSuma.innerHTML = `${valorA} + ${valorB} = ${resultadoSuma}`
  textoResta.innerHTML = `${valorA} - ${valorB} = ${resultadoResta}`
  textoMulti.innerHTML = `${valorA} * ${valorB} = ${resultadoMulti}`
  textoDivision.innerHTML = `${valorA} / ${valorB} = ${resultadoDivision}`
  textoModulo.innerHTML = `${valorA} % ${valorB} = ${resultadoModulo}`
  textoMenorQue.innerHTML = `${valorA} < ${valorB} = ${resultadoMenorQue}`
  textoMayorQue.innerHTML = `${valorA} > ${valorB} = ${resultadoMayorQue}`
  textoMenorIgual.innerHTML = `${valorA} <= ${valorB} = ${resultadoMenorIgual}`
  textoMayorIgual.innerHTML = `${valorA} >= ${valorB} = ${resultadoMayorIgual}`
  
}