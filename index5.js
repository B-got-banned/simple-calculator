const display = document.getElementById("display");

function attachToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    console.log(error);
    display.value = "Error";
  }
}