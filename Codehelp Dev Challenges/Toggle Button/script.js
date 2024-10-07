let icon = document.querySelector('#icon')
let box = document.querySelector('.box');

console.log(icon);


icon.addEventListener('click', update);
  
let value = true;


function update(){
  console.log("clicked");
  if(value){
    console.log("state is true");
    icon.style.backgroundColor = 'rgb(0, 153, 255)';
    icon.style.transform = 'translateX(100%)';
    icon.innerHTML = "&#10004;"
    box.style.backgroundColor = 'rgb(153, 204, 255)';
    value = false;
  }
  else{
    icon.style.backgroundColor = 'rgb(81, 79, 79)';
    icon.style.transform = 'translateX(0)';
    icon.innerHTML = "&#10006;"
    box.style.backgroundColor = 'grey';
    value = true;
  }
}