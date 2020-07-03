const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const containerAll = document.querySelector('.container-all')

const contAllStyle = containerAll.style
const bodyClassList = document.body.classList



navToggle.addEventListener('click', _ =>{
    contAllStyle.transition = 'transform 250ms ease-in-out'

    
  
    bodyClassList.toggle('nav-is-open')
    
   
})


nav.addEventListener('click', _=>{
    
    contAllStyle.transition = '0ms'
    bodyClassList.remove('nav-is-open')
    
    
})