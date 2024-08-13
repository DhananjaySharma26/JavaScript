
const randomColor = function(){
    const hex = '0123456789ABCDEF'

    let color = '#'

    for(let i = 0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

const ChangingColor = function (){
    const color = randomColor()

    document.querySelector('body').style.backgroundColor = color
}



document.querySelector('#start').addEventListener('click',()=>{
    interval= setInterval(ChangingColor,1000)
})


document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(interval)
    interval = null
})






