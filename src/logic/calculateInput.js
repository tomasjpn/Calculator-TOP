import { inputDisplay } from "../utils/domElm.js"

// Berechnet die Eingabe Werte
const calculateVal = () =>{
    try {
        inputDisplay.value = eval(inputDisplay.value);  // eval() -> Interpretiert den String z.B. "2 + 2" und berechnet
    } catch {
        inputDisplay.value = 'Error';
    }
}

export {calculateVal};