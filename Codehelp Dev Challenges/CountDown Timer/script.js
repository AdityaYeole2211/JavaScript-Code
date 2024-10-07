let obj = document.querySelector('#inputTime');
let button = document.querySelector('#submit')


button.addEventListener('click', timeCalculation);
const date = new Date();
let timerInterval;

function timeCalculation(){
    console.log("clicked");
    // console.log(time);
    const timeInput = document.getElementById('inputTime').value;
    console.log(timeInput);
    
    const [submitHours, submitMins] = timeInput.split(":");
    console.log(submitHours);
    console.log(submitMins);
    const deadlineTime = new Date();
    deadlineTime.setHours(submitHours)
    deadlineTime.setMinutes(submitMins) 
    deadlineTime.setSeconds(0)
    // updateTimer(deadlineTime)

    timerInterval = setInterval(() => updateTimer(deadlineTime), 1000);
    updateTimer(deadlineTime)
}

function updateTimer(deadlineTime){
    const now = new Date();
    console.log(deadlineTime)
    const timeDiff = deadlineTime - now;
    console.log(timeDiff);

    if(timeDiff <= 0){
        clearInterval(timerInterval);
        const toChange = document.getElementById('toChange')
        toChange.innerHTML = `<div>Timer Limit Reached!!</div>`
        toChange.style.width = '100%'
        toChange.style.color = 'white';
        toChange.style.textAlign = 'center'

        // setTimeout(resetToDefault, 3000);
        return;
    }

    const hoursLeft = Math.floor((timeDiff/3600000)%24 );
    console.log("hours: ", hoursLeft);
    
    const  minsLeft = Math.floor((timeDiff/60000)%60)
    console.log("mins: ", minsLeft);
    
    const secLeft = Math.floor((timeDiff/1000)%60);
    console.log("sec: ", secLeft);
    

    const container = document.getElementById('toChange');
    container.innerHTML = `
     <div class = "Hours">${String(hoursLeft).padStart(2,'0')}
      <br/>
      <p>Hours</p>
     </div> 
     <div class = "mins">${String(minsLeft).padStart(2,'0')}
      <br/>
      <p>Minutes</p>
     </div> 
     <div class = "secs">${String(secLeft).padStart(2,'0')}
      <br/>
      <p>Seconds</p>
     </div> 
    `
    container.style.display =  'flex';
    container.style.flexDirection =  'row';
    container.style.justifyContent =  'space-evenly';
    container.style.alignItems =  'center';
    container.style.color =  'white';
    container.style.width =  '100%';
    container.style.backgroundColor =  'rgb(23, 22, 22)';
    container.style.padding =  '20px';
    container.style.borderRadius =  '20px';
}

// function resetToDefault(){
//     let inputWrapper = document.getElementById('toChange');
//     inputWrapper.innerHTML = 
//     ` 
//       <label for="inputTime">Enter Deadline in 24 hour format from now</label>
//         <br />
//         <input
//           placeholder="xyz"
//           type="time"
//           name="inputTime"
//           id="inputTime"
//           min="0:00"
//           max="24:00"
//         />
//         <button id="submit">Submit</button>
//     `
// }