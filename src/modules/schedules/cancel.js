import {schedulesDay} from "./load.js"
import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period");

//Gerar um evento de click para cada lista
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //obtém a li pai do elemento clicado
      const item = event.target.closest("li");
      //Pega o id do agendamento para cancelar
      const { id } = item.dataset;
      if(id){
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?")
        if(isConfirm){
            //Faz a requisição na api pra cancelar
            await scheduleCancel({id})
            schedulesDay
        }
      }
    }
  });
});
