function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "If you can talk with crowds and keep your virtue",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
