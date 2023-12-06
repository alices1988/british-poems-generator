function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1faac340e1f45toe0cfe3749556cbd9a";
  let prompt = `User instructions: Generate a British poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Please generate a 4 line poem in basic HTML and separate each line with a <br /> . Please do not include any title. Please make sure to follow the user instructions. At the bottom please sign the poem with `Made by AI` inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a short poem for you about ${instructionsInput.value} in few moments...`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
