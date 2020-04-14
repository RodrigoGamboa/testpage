const moonPath = "M19.5 27.5C19.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 19.5 12.3122 19.5 27.5Z";
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click', () => {

  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline.add({
    targets: ".sun",
    d: [
      {value: toggle ? sunPath : moonPath}
    ]
  })
  .add({
    targets: "#darkMode",
    rotate: toggle ? 0: 320
  }, "-= 750")
  .add({
    targets: "section",
    backgroundColor: toggle ? 'rgb(199, 199, 199)' : 'rgb(22, 22, 22)'
  }, "-= 700")
  .add({
    targets: "h1",
    color: toggle ? 'rgb(22, 22, 22)' : 'rgb(199, 199, 199)'
  }, "-= 150");
  toggle = !toggle;
});
