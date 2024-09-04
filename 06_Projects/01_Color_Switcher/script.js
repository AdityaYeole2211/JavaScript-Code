const buttons = document.querySelectorAll('.button')
// console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);

        switch (e.target.id) {
            case 'grey':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            case 'white':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            case 'blue':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            case 'yellow':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            case 'purple':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            case 'red':
                document.body.style.backgroundColor = e.target.id;
                break;
        
            default:
                break;
        }

        
        
    })
})
