window.onload=function(){
    document.getElementById("esp").onmouseover = function(){document.getElementById("op1").classList.remove('esconder');};
    document.getElementById("esp").onmouseout = function(){document.getElementById("op1").classList.add('esconder');};
    document.getElementById("asesoramiento").onmouseover = function(){document.getElementById("op2").classList.remove('esconder');};
    document.getElementById("asesoramiento").onmouseout = function(){document.getElementById("op2").classList.add('esconder');};
    document.getElementById("op1").onmouseout = function(){document.getElementById("esp").classList.remove('lis');};
    document.getElementById("op1").onmouseover = function(){document.getElementById("esp").classList.add('lis');};
    document.getElementById("op2").onmouseout = function(){document.getElementById("asesoramiento").classList.remove('lis');};
    document.getElementById("op2").onmouseover = function(){document.getElementById("asesoramiento").classList.add('lis');};
    
}
let celular = document.getElementById('celular')
let celul = document.getElementById('dni')
let celula = document.getElementById('area')
celular.addEventListener('keypress', (event) => {
  event.preventDefault()
  // console.log(event.keyCode)
  let valorTecla = String.fromCharCode(event.keyCode)
  console.log(valorTecla)
  let valorParsed = parseInt(valorTecla)
  // console.log(valorParsed)
  if(valorParsed) {
    celular.value = celular.value + valorParsed
  }
})
celul.addEventListener('keypress', (event) => {
    event.preventDefault()
    // console.log(event.keyCode)
    let valorTecla = String.fromCharCode(event.keyCode)
    console.log(valorTecla)
    let valorParsed = parseInt(valorTecla)
    // console.log(valorParsed)
    if(valorParsed) {
      celul.value = celul.value + valorParsed
    }
  })
  celula.addEventListener('keypress', (event) => {
    event.preventDefault()
    // console.log(event.keyCode)
    let valorTecla = String.fromCharCode(event.keyCode)
    console.log(valorTecla)
    let valorParsed = parseInt(valorTecla)
    // console.log(valorParsed)
    if(valorParsed) {
      celula.value = celula.value + valorParsed
    }
  })