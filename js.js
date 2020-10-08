let screen = document.querySelector(".wrapper");
let color = 0

setInterval(()=>{
   screen.setAttribute("style",`filter: hue-rotate(${color++}deg)`)
},10)
// screen.setAttribute("style",`background:blue`)