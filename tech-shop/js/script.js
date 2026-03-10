fetch("data/products.json")
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((error) => console.log(error));

const showData = (data) => {
  console.log(data);
  let card = "";
  for (let i = 0; i < data.products.length; i++) {
    card += `<article class="product-card">
            <figure>
              <img
                src="${data.products[i].image}"
                alt="${data.products[i].alt}"
              />
            </figure>
            <h3>${data.products[i].name}</h3>

            <p class="price">${data.products[i].price} €</p>

            <p>
              <span class="badge badge-in">${data.products[i].stockText}</span>
            </p>

            <button>Añadir al carrito</button>
          </article>
`;
  }
  let container = document.querySelector("#product-grid");
  container.innerHTML = card;
};
