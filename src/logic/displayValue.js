import { inputDisplay } from "../utils/domElm.js";

// Zeigt die eingegebenen Wert an
const displayVal = (num) =>{
    inputDisplay.value += num;
    return;
}

export {displayVal};