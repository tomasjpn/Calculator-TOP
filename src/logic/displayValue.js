import { inputDisplay } from "../utils/domElm.js";

// Zeigt die eingegebenen Wert an
const displayVal = (num) =>{
    if (inputDisplay.value === '0') {
        inputDisplay.value = num;
    } else {
        inputDisplay.value += num;
    }
}

export {displayVal};