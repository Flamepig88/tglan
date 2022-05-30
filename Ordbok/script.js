const input = document.getElementById("input");
const search_btn = document.getElementById("search_btn");
const not_found = document.querySelector(".not_found");
const defination_box = document.querySelector(".def");
const audio_box = document.querySelector(".audio");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const word = input.value;
  if (word === "") {
    alert("Please type a word");
    return;
  }

  dataGet(word);

  audio_box.innerHTML = "";
  not_found.innerText = "";
  defination_box.innerText = "";
});

async function dataGet(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await response.json();
  console.log(data);

  if (!data.length) {
    not_found.innerText = "No result found";
    return;
  }

  if (typeof data[0] === "string") {
    // if result is suggestions
    let heading = document.createElement("h3");
    heading.innerText = "Did you mean?";
    not_found.appendChild(heading);

    data.forEach((element) => {
      let suggestion = document.createElement("span");
      suggestion.classList.add("suggested");
      suggestion.innerText = element;
      not_found.appendChild(suggestion);
    });
    return;
  }
}
