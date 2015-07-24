var encourage = [
  "Come go!!!",
  "Uhuuu...",
  "Toma uma IPA que melhora.",
  "Boa!",
  "Vc precisa ser mais auto suficiente.",
  "Me deixa codar.",
  "Galera, se importam se eu trabalhar de casa hoje?",
  "Inacreditavel. Reuniao diaria em menos de 8 minutos.",
  "Ok show!",
  "Preteou o olho da gateada",
  "Forkei almoço.",
  "Deixe que venha!",
  "I Left to the snakes"
];

function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}

function getNextPhase(phases) {
  var index = getRandomInt(0, phases.length-1);
  return phases[index]
}

$(function() {
  console.info('Tem mais frases famosas que deseja compartilhar? \nContribui aí: https://github.com/vhfm33/countdown');
  setInterval(function () {
    $bubble = $('.bubble');
    $bubble.text(getNextPhase(encourage));
    $bubble.fadeIn(function () {
      setTimeout($bubble.fadeOut.bind($bubble), 1500);
    });
  }, 5000);
});