import { inputDisplay } from "../utils/domElm.js";

// Setzt den die Eingabe im Taschenrechner komplett zurück
const clearInput = () =>{
    inputDisplay.value = '0';
}

// Löscht den zuletzt eingegebenen Wert
const deleteLastInput = () =>{
    inputDisplay.value = inputDisplay.value.slice(0, -1);
    if (inputDisplay.value === '') {
        inputDisplay.value = '0';
    }
}

export {clearInput, deleteLastInput};