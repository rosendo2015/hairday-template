import dayjs from "dayjs";
import {schedulesDay} from "../schedules/load.js"
import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carregando data atual como valor padrão
selectedDate.value = inputToday;

//bloqueando data anterior à data atual
selectedDate.min = inputToday;

//lidando com o envio do formulário
form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //pegar o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("informe onoe do cliente");
    }
    //pega o horário selecionada
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um horário válido.");
    }
    //pega somente a hora
    const [hour] = hourSelected.innerText.split(":")
    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

   //gerar um ID
   const id = new Date().getTime

   await scheduleNew({
    id, 
    name, 
    when
   })    
   //Reacarrega os agendamentos
   await schedulesDay()

   //Limpa o imput de nome do cliente
   clientName.value = "";

   
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
