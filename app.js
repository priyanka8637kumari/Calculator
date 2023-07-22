(function () {
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value= e.target.dataset.num;
           // alert("value of button pressed----"+value);
           // if(value!=undefined)
                screen.value += value;
        })
     });
    
    equal.addEventListener('click', function(e){
      
        if(screen.value===''){
            screen.value="";
        }
            else{
                 // alert("screen.value---"+eval("5+7 "));
                let answer=eval(screen.value);
                //alert("answer---"+answer);
                screen.value = answer;
            }
        
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
        
    })
    
    
    
    
    
})();