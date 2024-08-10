const form = document.querySelector('form')


form.addEventListener('submit',(e)=>{

    e.preventDefault()   //this method stops to default submit the form

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    
    const results=document.querySelector('#results')

    if(height ==='' || height<0 ||  isNaN(height)){
        results.innerHTML= "Please give a valid Height"
    }else if(weight ==='' || weight<0 ||  isNaN(weight)){
        results.innerHTML= "Please give a valid Weight"
    }else{

        const BMI=(weight/((height*height)/10000)).toFixed(2)

        if(weight<18.6){
            results.innerHTML= `<span>${BMI}</span>  Under Weight`
        }else if(weight<24.9){
            results.innerHTML= `<span>${BMI}</span>  Normal Range`
        }else{
            results.innerHTML= `<span>${BMI}</span>   Over Weight`
        }
        

    }




})