import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import {hoursLoad} from '../form/hours-load.js';
//seeciona o input de data
const selectedDate =document.getElementById('date');

export async function schedulesDay() {
    //obtem a data do input
    const date = selectedDate.value;
    
    
    //Buscar na API os Agendamentos
const dailySchedules = await scheduleFetchByDay({date})

//renderizar os agendamentos
schedulesShow({dailySchedules})


    // Lógica para carregar os horários disponíveis
    hoursLoad({date, dailySchedules})
}