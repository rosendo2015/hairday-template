import {schedulesDay} from "../schedules/load.js"

const selectedDate = document.getElementById("date")
//recarrega a lista de datas quendo o input de data mudar
selectedDate.onchange = () => schedulesDay()