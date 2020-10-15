let picsumUrl = "https://picsum.photos/v2/list"
let counter = 0;
//fetch(picsumUrl)
//   .then((response)=>{
//      return response.json()
//   }).then((response) => {
//   console.log(response);
//})
let imgList;
let screen = document.querySelector(".wrapper")
function sendRequest(url) {
   return fetch(url).then(response => {
      return response.json()
   })
}

sendRequest(picsumUrl)
   .then(response => {
      imgList = response;
      console.log(response)
   })

document.body.addEventListener("click",()=>{
   console.log("next img")
   // screen.style.backgroundImage = `url(${imgList[counter++].download_url})`
   screen.style.backgroundImage = `url(https://picsum.photos/${screen.offsetWidth}/${screen.offsetHeight}?random=${counter++})`

})