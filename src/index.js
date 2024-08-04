import { calculateVal } from './logic/calculateInput.js';
import { clearInput, deleteLastInput } from './logic/clearInput.js';
import { displayVal } from './logic/displayValue.js'
import './styles.css'
import { keyboardFunc } from './utils/keyboardFunc.js';

window.displayVal = displayVal;
window.calculateVal = calculateVal;
window.clearInput = clearInput;
window.deleteLastInput = deleteLastInput;

keyboardFunc();