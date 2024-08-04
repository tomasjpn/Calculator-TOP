import { calculateVal } from "../logic/calculateInput.js";
import { clearInput, deleteLastInput } from "../logic/clearInput.js";
import { displayVal } from "../logic/displayValue.js";

// Tastatureingaben für den Taschenrechner
const keyboardFunc = () =>{
    document.addEventListener("keydown", function(event){
        const key = event.key;
    
        if((key >= '0' && key <= '9') || key === '.'){ // Begrenzt die Eingabe auf Zahlen 0 - 9 und ".", sowie Rechenoperatoren
            displayVal(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            displayVal(key);
        } else if (key === 'Enter' || key === '='){ // bei "Enter" oder "=" werden die Werte kalkuliert
            event.preventDefault();
            calculateVal();
        } else if (key === 'Backspace') {// Bei "Lösch-Taste" wird die letzte Eingabe gelöscht
            deleteLastInput();
        } else if (key === 'Escape' || key === 'c') { // Bei "Escape" oder "c" wird die gesamte Eingabe zurückgesetzt
            clearInput();
        }
    });
}

export {keyboardFunc}