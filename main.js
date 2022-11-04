const diaSemana = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sabado'
]

function createGame(team1, hour, team2) {
  return `
    <li>
      <img
        src="./assets/bandeiras/icon=${team1}.svg"
        alt="Bandeira do ${team1}"
      />
        <strong> ${hour} </strong>
      <img
          src="./assets/bandeiras/icon=${team2}.svg"
          alt="Bandeira da ${team2}"
      />
    </li>
  `
}

var delay = -0.5
function createCard(dia, mes, games) {
  day = new Date(2022, mes - 1, dia)
  data = dia + '/' + mes
  semana = diaSemana[day.getDay()]
  delay += 0.5
  return `
    
      <div class="card" style="animation-delay: ${delay}s">
        <h2> ${data} <span>${semana} </span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.getElementById('cards').innerHTML =
  createCard(24, 11, createGame('brazil', '16:00', 'serbia')) +
  createCard(28, 11, createGame('brazil', '13:00', 'switzerland')) +
  createCard(2, 12, createGame('cameroon', '16:00', 'brazil'))
