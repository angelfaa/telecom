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
  function radios(){
    let elemento= document.getElementById("estados")
    let elemento1= document.getElementById("estados2")
    let selecto=document.getElementById("select")
    if(elemento.checked){
      selecto.removeAttribute("disabled");
      if(selecto.length>1){
        selecto.remove(0);
        selecto.remove(1);
      }
      if(selecto.length<2){
        selecto.options[0]=new Option("Consulta Escrita")
        selecto.options[1]=new Option("Consulta Oral")
      }
      
    }
    if(elemento1.checked){
      selecto.removeAttribute("disabled");
      if(selecto.length>1){
        selecto.remove(0);
        selecto.remove(1);
      }
      if(selecto.length<2){
        selecto.options[0]=new Option("Consulta Por llamada")
        selecto.options[1]=new Option("Consulta Videollamada")
      }
    }
  }