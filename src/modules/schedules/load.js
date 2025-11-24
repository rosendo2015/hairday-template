import {hoursLoad} from '../form/hours-load.js';
const selectedDate =document.getElementById('date');
export function schedulesDay() {
    const date = selectedDate.value;
    // Lógica para carregar os horários disponíveis
    hoursLoad({date})
}