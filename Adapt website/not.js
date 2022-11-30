var openNav=document.querySelector('.sel .open')
var closeNav=document.querySelector('.close')
var navList=document.querySelector('.navlist')

openNav.onclick=()=>{
    navList.classList.add('show')

}
closeNav.onclick=()=>{
    navList.classList.remove('show')

}