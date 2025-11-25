import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

//data atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//carregando data atual como valor padrão
selectedDate.value = inputToday;

//bloqueando data anterior à data atual
selectedDate.min = inputToday;


//lidando com o envio do formulário
form.onsubmit = (event) => {
    event.preventDefault();     
};