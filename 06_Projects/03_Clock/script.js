const clock = document.querySelector('#clock')


//set interval -> runs the given fucntion continously after 
//intervals -> setInterval(function(){}, time_in_miliseconds)
setInterval(function(){
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)