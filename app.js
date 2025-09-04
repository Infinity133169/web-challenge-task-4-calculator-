let inputBox=document.querySelector("#input-box");
let buttons=document.querySelectorAll("button");
let string="";
let digits=document.querySelector('.digit')
buttons.forEach(button=>{
    button.addEventListener("click",(evt)=>{

    
        if(evt.target.innerText== "="){
            string=eval(string);
            inputBox.value=string;
            if(inputBox.value==='Infinity'){
                inputBox.value='error';
            }
           
           
           
        }
    
        else if(evt.target.innerText== "AC"){
            string="";
            inputBox.value=string;
        }
        else if(evt.target.innerText== "x²"){
           string=inputBox.value * inputBox.value;
           inputBox.value=string;
        }
        else if(evt.target.innerText== "x³"){
           string=inputBox.value * inputBox.value * inputBox.value;
           inputBox.value=string;
        }
        else if(evt.target.innerText== "1/x"){
           string=1/(inputBox.value);
           inputBox.value=string;
        }
        else if(evt.target.innerText== "√"){
           string=Math.sqrt(inputBox.value);
           inputBox.value=string;
        }

        else if(evt.target.innerText== "DEL"){
            string=string.toString();
            console.log(string);
            string=string.substring(0,string.length-1);
            console.log(string);
            inputBox.value=string;

        }
       

       

        else{
            string=string+evt.target.innerText;
            inputBox.value=string;
            console.log(string);
         
            

        }
      
    })
});

document.addEventListener('keydown',(e)=>{
    console.log("key pressed:",e.key);
    e.preventDefault();
    
       if(e.key==='Enter' || e.key=="="){
            
            string=eval(string);
            inputBox.value=string;
            if(inputBox.value==='Infinity'){
                inputBox.value='error';

            }
        }
        else if(e.key== "Delete"){
            string="";
            inputBox.value=string;
        }
        else if(e.key== "Backspace"){
            string=string.toString();
            // console.log(string);
            string=string.substring(0,string.length-1);
            // console.log(string);
            inputBox.value=string;

        }


        else{
            string=string+e.key;
            inputBox.value=string;

        }
});

