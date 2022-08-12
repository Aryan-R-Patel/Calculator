// Declaring Variables
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

// Main Logic
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // Multiplication
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // Clear
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        // Equal 
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}