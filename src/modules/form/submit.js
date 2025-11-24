import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//carregando data atual como valor padrão
selectedDate.value = inputToday;

//bloqueando data anterior à data atual
selectedDate.min = inputToday;


//lidando com o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();     
});