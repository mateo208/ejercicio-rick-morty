const maincontent = document.getElementById("main-container");
const search = document.getElementById("search");
const btn = document.getElementById("btnsearch");

const options = {method: 'GET'};
function url() {
  fetch(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
  .then(response => response.json())
  .then(data =>{
   const {results} = data;
   results.map((morty)=>{
    createcard(morty);
  
   });
  })
  .catch(err => console.error(err));

};
search.addEventListener("keyup",url)
url();

 function createcard(data) {

  const card = document.createElement("div");
  const row = document.createElement("div");
  const row_image = document.createElement("div");
  const charaterdes = document.createElement("div");
  const card_body = document.createElement("div");
  const title = document.createElement("h2");
  const species = document.createElement("p");
  const gender = document.createElement("p");
  const img = document.createElement("img");

    title.textContent = data.name;
    species.textContent = data.species;
    gender.textContent = data.gender;
    img.setAttribute("src",data.image);
    img.setAttribute("atl", data.name);

    card.classList.add("card");
    row.classList.add("row");
    charaterdes.classList.add("charater");
    title.classList.add("name");
    gender.classList.add("gender");
    row_image.classList.add("img-card");

    card.appendChild(row);
    row.appendChild(row_image);
    row.appendChild(charaterdes);
    charaterdes.appendChild(card_body);
    card_body.appendChild(title);
    card_body.appendChild(species);
    card_body.appendChild(gender);
    row_image.appendChild(img);

    maincontent.appendChild(card);
};





