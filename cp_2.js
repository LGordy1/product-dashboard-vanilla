const apiURL = "https://www.course-api.com/javascript-store-products";

// Step 3
function fetchProductsThen() {
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
}

// Step 4
async function fetchProductsAsync() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Step 5
function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.slice(0, 5).forEach((product) => {
    const name = product.fields.name;
    const price = product.fields.price / 100;
    const image = product.fields.image[0].url;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
      <p>$${price.toFixed(2)}</p>
    `;

    productContainer.appendChild(card);
  });
}

// Step 6
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// Step 7
fetchProductsThen();
fetchProductsAsync();