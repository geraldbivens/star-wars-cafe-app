const baseURL = "http://localhost:3000";
const charactersURL = `${baseURL}/characters`;

const showCharacters = document.querySelector(".show-characters");
const showForm = document.querySelector(".show-form");
const createCharacterForm = document.querySelector(".create-character-form");
const charactersSection = document.querySelector(".characters-section");

// Fetch
fetch(charactersURL).then(parseJSON).then(getCharacters);

// Event listeners
showCharacters.addEventListener("click", showCharactersSection);
showForm.addEventListener("click", showCreateCharactersForm);
// createCharacterForm.addEventListener("submit", createNewCharacter);

// Toggle between the characters and the form
function showCharactersSection() {
  charactersSection.classList.remove("hide");
  createCharacterForm.classList.add("hide");
}

function showCreateCharactersForm() {
  charactersSection.classList.add("hide");
  createCharacterForm.classList.remove("hide");
}

// Get and show characters from the fetch result
function getCharacters(characters) {
  characters.forEach((character) => {
    showCharacter(character);
  });
}

function showCharacter(character) {
  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const name = document.createElement("h2");
  name.textContent = character.name;

  const image = document.createElement("img");
  image.src = character.image;

  const favoriteDrink = document.createElement("p");
  favoriteDrink.textContent = character.favorite_drink;

  const side = document.createElement("p");
  side.textContent = character.side ? "Light Side" : "Dark Side";
  // if (character.side) {
  //   side.textContent = "Light Side";
  // } else {
  //   side.textContent = "Dark Side";
  // }

  characterCard.append(name, image, favoriteDrink, side);

  charactersSection.append(characterCard);
}

function parseJSON(response) {
  return response.json();
}
