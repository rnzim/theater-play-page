var btnshow = document.getElementById('show')
var content  = document.getElementById('content')
var n  = document.getElementById('rn')
var named = "Raimundo Nonato"
var count = 0
var intervalId = setInterval(()=>{
       
        n.innerHTML += named[count]
        console.log(named[count])      
        count++
        console.log(count)
        
   
},300)
setTimeout(function() {
    clearInterval(intervalId); // Usa o clearInterval com o identificador
    console.log('setInterval interrompido');
  }, 4500);
btnshow.addEventListener('click',()=>{
   content.style.display = 'block'
   btnshow.style.display = 'none'
})