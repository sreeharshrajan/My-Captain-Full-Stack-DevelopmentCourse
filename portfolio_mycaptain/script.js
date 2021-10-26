//External Script for toggling the sidebar

const selectElement = (s) => document.querySelector(s);

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle")
    })
});


let words = ['MERN Stack', 'PHP', 'Python', 'C']

function titleAnim(word){
  
  let d = $('.dynamic')
  let i = document.querySelector('.inner')
  i.innerHTML = word
  let w = i.offsetWidth
  i.innerHTML = ''
  d.animate({ width: w }, 500)
  setTimeout(() => {
    i.innerHTML = word
    d.animate({ opacity: 1 }, 500)
  }, 500)
  setTimeout(() => {
    d.animate({ opacity: 0 })
  }, 4000)
}

function start(arr){
  setTimeout(function go(){
    let delay = 5000
    titleAnim(arr[0])
    for( let i = 1; i < arr.length; i++ ){
      setTimeout(titleAnim, delay*i, arr[i])
    }  
    setTimeout(go, (delay * (arr.length)))
  }, 0)
}

start(words);






