let screen = document.querySelector(".wrapper");
let body = document.querySelector("body")
let colorRotate = 0
let styleTag = document.querySelector("style")

setInterval(()=>{
   styleTag.innerHTML = `.wrapper{filter: hue-rotate(${colorRotate++}deg)}`
   //screen.setAttribute("style",`filter: hue-rotate(${colorRotate++}deg)`)
},30)

// screen.setAttribute("style",`background:blue`)

//let getImg = "https://picsum.photos/200/300?random=1"

//screen.setAttribute("style",`background: url(https://picsum.photos/${body.offsetHeight}/${body.offsetWidth}?random=1)`)
//screen.style.background = `url(https://picsum.photos/${body.offsetHeight}/${body.offsetWidth}?random=1)`
// fetch(url)

function getHexNum(){return Math.floor(Math.random()*16).toString(16)};
function getHexColor(didgitsCount){
   let color = "#"
   for(let i = 0;i<didgitsCount;i++){
      color+= getHexNum()
   }
   return color
}

body.addEventListener("click",()=>{screen.style.background = getHexColor(6)})
