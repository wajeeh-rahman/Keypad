let string = "";
let buttons = document.querySelectorAll('.btn');//Selecting all the buttons on the keypad and assigning it to a variable 
let input = document.querySelector(".inputDisplay");//Selecting the input display and assigning it to a variable


//putting all buttons of the keypad into an array by using [Array.from()] and selecting its elements using [foreach()]
Array.from(buttons).forEach((btn) => {
  
  btn.addEventListener('click', (e) => { //putting "click" event listener on buttons

    if (e.target.innerHTML == '=') { // Checking if  equals sign is clicked
      string = eval(string);
      input.value = string;
    }

    else if (e.target.innerHTML == 'Clear All') { // Checking if Clear All button is clicked
      string = "";
      input.value = string;
    }

    else if (e.target.innerHTML == document.querySelector(".backArrow").innerHTML) { // Checking if back arrow button is clicked
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else {   //else display the button inputs in the textfield while replacing the dollar sign if clicked)
      string = string + e.target.innerHTML.replace("$", "");
      input.value = string;
    }
  })
})



