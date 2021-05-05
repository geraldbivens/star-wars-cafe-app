const baseURL = "http://localhost:3000";
const charactersURL = `${baseURL}/characters`;

fetch(charactersURL).then(parseJSON).then(getCharacters);

function getCharacters(characters) {
  console.log("Characters", characters);

  const charactersSection = document.querySelector(".characters");

  characters.forEach((character) => {
    showCharacter(character, charactersSection);
  });
}

function showCharacter(character, charactersSection) {
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
