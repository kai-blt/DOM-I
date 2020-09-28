//Get all the children of the divs with the class digits
let timerDigits = document.querySelector('.digits').children;

//Make an array out of the above selection
let timerArray = Array.from(timerDigits);


//Declare variables to save value places in timer.
let currTime = 0;
let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;




//Declare function that sets timer to run every nano second
function startTimer() {
    setInterval(() => {     
        if (currTime < 1000) { //Run function and stop once 10000ms has been reached. 
            currTime++;

            //Calculate Seconds Tens Place. If 10000ms was reached, increment Tens place for seconds.
            if (currTime % 1000 === 0) {
                secondTens++;
                timerArray[0].textContent = secondTens;
            }

            //Calculate Seconds Ones Place. if 1000ms was reached, increment Ones places for seconds.
            if (currTime % 100 === 0) {
                secondOnes++;
                    
                if (secondOnes > 9) { //If the ones place will roll over to 10, set back to 0!
                    secondOnes = 0;
                }
                timerArray[1].textContent = secondOnes;
            }
                
            //Calculate Seconds Ones Place. if 100ms was reached, increment Hundreds places for milliseconds.
            if (currTime % 10 === 0) {
                msHundreds++;
                if (msHundreds > 9) {
                    msHundreds = 0;
                }
                timerArray[3].textContent = msHundreds;
            }
        
            let currNanoSeconds = String(currTime);  //Sets the current nano seconds to a string       
            timerArray[4].textContent = currNanoSeconds.slice(currNanoSeconds.length - 1);    //Sets the nano seconds by slicing the string and setting the last digit        
        } else {
        timerArray.forEach(item => item.style.color = "red"); //Set timer digits to red once 10 seconds are reached.
        }
    }, 10);
} 




//Get Digits container
let digitsContainer = document.querySelector('.digits');

//Create button
function createButton(text) {
    let button = document.createElement('button');
    button.textContent = text;
    button.style.backgroundColor = 'green';
    button.style.borderRadius = '10px';
    button.style.padding = '4%';
    button.style.fontSize = '2rem';
    button.style.color = 'white';

    button.addEventListener('click', startTimer);
    return button;
}

digitsContainer.appendChild(createButton('START'));
