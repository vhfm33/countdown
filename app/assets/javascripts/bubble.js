var encourage = [
  "Come go!!!",
  "Uhuuu...",
  "Partiu",
  "Toma uma weiss que melhora."
];

function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}

function getNextPhase(phases) {
  var index = getRandomInt(0, phases.length-1);
  return phases[index]
}

$(function() {
  setInterval(function () {
    $bubble = $('.bubble');
    $bubble.text(getNextPhase(encourage));
    $bubble.fadeIn(function () {
      setTimeout($bubble.fadeOut.bind($bubble), 1500);
    });
  }, 5000);
});