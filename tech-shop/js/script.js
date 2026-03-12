fetch("data/products.json")
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((error) => console.log(error));

const showData = (data) => {
  console.log(data);
  let card = "";
  for (let i = 0; i < data.products.length; i++) {
    const badgeClass =
      data.products[i].stockStatus === "in"
        ? "badge-in"
        : data.products[i].stockStatus === "low"
          ? "badge-low"
          : "badge-out";

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
              <span class="badge ${badgeClass}">${data.products[i].stockText}</span>
            </p>

            <button class ="addToCart">Añadir al carrito</button>
          </article>
`;
  }
  let container = document.querySelector("#product-grid");
  container.innerHTML = card;

  let cartCount = 0;

  const buttons = document.querySelectorAll(".addToCart");
  const counter = document.querySelector("#cart-count");
  counter.style.display = "none";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      counter.textContent = cartCount;
      counter.style.display = "flex";
    });
  });
};

const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".menu-hamburguer");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");

menuButton.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("open");
});

closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

function closeSideMenu() {
  menu.classList.remove("open");
  overlay.classList.remove("open");
}
