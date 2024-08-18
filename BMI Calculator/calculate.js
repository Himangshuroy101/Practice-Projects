const form = document.querySelector('form')

form.addEventListener('submit', function (e){
      e.preventDefault()
      const height = parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#weight').value)

      const result = document.querySelector('#results')
      const advice = document.querySelector('#advice')
      if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `Invalid input ${height}`
      }else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Invalid input ${weight}`
      }else{
        const bmiValue = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI : ${bmiValue}`
        if(bmiValue < 18.6){
          advice.innerHTML = `Your are UnderWeight`
        }else if(bmiValue >18.6 && bmiValue < 24.9){
          advice.innerHTML = `Congrats!!! , You Have Normal Weight`
        }else if(bmiValue >24.9){
          advice.innerHTML = `You Are OverWeight`
        }
      }
})