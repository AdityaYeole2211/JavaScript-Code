let button = document.getElementById('submit')

button.addEventListener('click', calculateAge);

function calculateAge(){
    console.log('clicked');
    
    const inputDate = document.getElementById('date').value
    console.log("Date: ",inputDate);
    
    const inputMonth = document.getElementById('month').value
    console.log("Month: ", inputMonth);
    
    const inputYear = document.getElementById('year').value
    console.log("Year: ", inputYear);
    

    if(inputDate <= 0 || inputDate > 31){
        alert('Enter correct Date')
    }
    else if(inputMonth <= 0 || inputMonth > 12){
        alert('Enter correct Month')
    }
    else if(inputYear <= 1900 || inputYear > 2024){
        alert('Enter Realistic Date')
    }


    const date =  new Date()
    let today =  new Date()
    date.setDate(inputDate);
    date.setMonth(inputMonth)
    date.setFullYear(inputYear)
    // const diffInTime = Date.now() - date;
    // console.log(diffInTime);

    // const year = diffInTime
    let years = today.getFullYear() - inputYear;
    let months = today.getMonth() - inputMonth;
    let days = today.getDay() - inputDate;

    if(months < 0){
        years--;
        months += 12;
    }
    if(days < 0 ){
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); //points to last month
        days += lastMonth.getDate(); //-6+30 = 24
    }

    displayAge(years, months, days);  
}

function displayAge(years, months,  days){
    // let div = document.createElement('div');
    // div.innerHTML = `
    // <div id ="info" >${years} <span id = "spanContent" > years</span></div>
    // <div id ="info" >${months}<span id = "spanContent"> months</span></div>
    // <div id ="info" >${days}<span id = "spanContent"> days</span></div>
    // `
    // div.id = "displayAge"
    // div.style.display = 'flex'
    // div.style.flexDirection = 'row'
    // div.style.justifyContent = 'space-evenly'
    // div.style.backgroundColor = 'black'
    // div.style.Color = '#316FF6';
    // div.style.fontSize = '1.7rem'
    // // document.getElementsByClassName('container').appendChild(div)
    // document.body.appendChild(div)
    // document.getElementById('spanContent').style.fontSize = '1rem'
    // document.getElementById('spanContent').style.color = 'black'
    // document.getElementById('Info').style.color = 'white'

    const info = document.getElementById('info');
    info.innerHTML = `
       <div id ="xyz" >${years} <span id = "spanContent" > years</span></div>
       <div id ="xyz" >${months}<span id = "spanContent"> months</span></div>
       <div id ="xyz" >${days}<span id = "spanContent"> days</span></div>
    `
    info.style.backgroundColor = 'white'
    info.style.color = '#316FF6'
    info.style.display = 'flex'
    info.style.flexDirection = 'row'
    info.style.justifyContent = 'space-evenly'

    info.style.width = '80%'
    info.style.height = '30%'
    info.style.alignItems = 'center'
    info.style.fontSize = '2rem'
    // document.getElementById('spanContent').fontSize = '2rem'
    // document.getElementById('spanContent').color = 'black'
    



}