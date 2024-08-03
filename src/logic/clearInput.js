import { inputDisplay } from "../utils/domElm.js";

// Setzt den die Eingabe im Taschenrechner komplett zurück
const clearInput = () =>{
    inputDisplay.value = '';
}

// Löscht den zuletzt eingegebenen Wert
const deleteLastInput = () =>{
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

export {clearInput, deleteLastInput};