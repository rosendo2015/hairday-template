import dayjs from "dayjs";

//seleciona as sessões por periodo manha tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    //Limpa as listas
    periodMorning = "";
    periodAfternoon = "";
    periodNight = "";

    //renderiza os agendamentos por periodo
    dailySchedules.array.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //adiciona o id
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");

      name.textContent = schedule.name;

      //criar o icone de cancelar
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      //Adicionar a hora, nome e o iconno item.
      item.append(time, name, cancelIcon);

      //Obtem somente a hora
      const hour = dayjs(schedule.when).hour();

      //renderizar de forma condicional conforme a hora
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      }else{
        periodNight.appendChild(item)
      }
    });
  } catch (error) {
    alert("Não foi possivel exibir os agendamentos.");
    console.log(error);
  }
}
