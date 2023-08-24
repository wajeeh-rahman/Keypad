let string = "";
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector(".inputDisplay");



Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (e) => { 

    if (e.target.innerHTML == '=') { 
      string = eval(string);
      input.value = string;
    }

    else if (e.target.innerHTML == 'Clear All') { 
      string = "";
      input.value = string;
    }

    else if (e.target.innerHTML == document.querySelector(".backArrow").innerHTML) { 
      string = string.substring(0, string.length - 1);
      input.value = string;
    }

    else {  
      
      string =  string + e.target.innerHTML.replace("$", "");
      input.value = string;
      
    }
  })
})



