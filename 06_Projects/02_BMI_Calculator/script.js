const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(e){
    //we dont want form to sent values through url , so stop default action taken thru submit button
    e.preventDefault()

    //take height and weight 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results')
    const remark = document.querySelector('#category')

    //put checks to esure valid vlaue 
    if(height < 0 || isNaN(height) || height === ''){
        // const addText = document.createTextNode(`Please enter valid Height ${height}`)
        // result.textContent = addText
        result.innerHTML = `Please enter valid Height ${height}`

    }
    else if(weight < 0 || isNaN(weight) || weight === ''){
        // const addText = document.createTextNode(`Please enter valid weight ${weight}`)
        // result.textContent = addText
        result.innerHTML = `Please enter valid weight ${weight}`


    }
    else{
        const BMI = (weight / ((height*height)/ 10000)).toFixed(2)
        let category = ""
        result.innerHTML =`BMI: ${BMI}`

        if(BMI < 18.6){
            category = "Under-Weight"
        }
        else if(BMI > 18.6 && BMI < 24.9){
            category = "Normal-Range"
        }
        else{
            category = "Over-Weight"
        }


        
        remark.innerHTML = "Remark: " + category
        

    }
})
