const clock=document.getElementById('clock')
// const clock=document.querySelector('clock')



setInterval(()=>{
    let date=new Date()
    clock.innerHTML= date.toLocaleString()
},1000)
